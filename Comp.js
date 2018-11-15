(function(){
/*
新建一个数据集，作为rating变化的点
data格式[
    时间戳,
    当前rating,
    比赛编号,
    比赛名称(英文),
    比赛名称(俄文),
    rating变化,
    比赛排名,
    比赛链接,
    头衔,
    也是头衔?,
    数据的id(必须有，否则标签不会自动消失),
    要显示的比赛名称(英文)
]
*/
var data = new Array();
/*替换为第一个人的两个data.push*/
data.push([]);
data.push([]);
/*替换为第二个人的两个data.push*/
data.push([]);
data.push([]);
//更多人的两个data.push
    
var datas = [
    /*..替换为第一个人的名字*/
    {label: "..",                                       data: data[0]},
    {clickable: false, hoverable: false, color: "red",  data: data[1]},
    
    /*..替换为第二个人的名字*/
    {label: "..",                                       data: data[2]},
    {clickable: false, hoverable: false, color: "red",  data: data[3]}
    //更多人的名字，以及data[递增的序号]，使用逗号隔开
];
var markings = [
    /*Legendary grandmaster    */{color: '#a00', lineWidth: 1, yaxis: { from: 3000 } },
    /*International Grandmaster*/{color: '#f33', lineWidth: 1, yaxis: { from: 2600, to: 2999 } },
    /*Grandmaster              */{color: '#f77', lineWidth: 1, yaxis: { from: 2400, to: 2599 } },
    /*International master     */{color: '#ffbb55', lineWidth: 1, yaxis: { from: 2300, to: 2399 } },
    /*master                   */{color: '#ffcc88', lineWidth: 1, yaxis: { from: 2100, to: 2299 } },
    /*candidate master         */{color: '#f8f', lineWidth: 1, yaxis: { from: 1900, to: 2099 } },
    /*expert                   */{color: '#aaf', lineWidth: 1, yaxis: { from: 1600, to: 1899 } },
    /*specialist               */{color: '#77ddbb', lineWidth: 1, yaxis: { from: 1400, to: 1599 } },
    /*pupil                    */{ color: '#7f7', lineWidth: 1, yaxis: { from: 1200, to: 1399 } },
    /*newbie                   */{ color: '#ccc', lineWidth: 1, yaxis: { from: 0, to: 1199 } },
];
var options={
    lines: { show: true },
    points: { show: true },
    /*xaxis: { tickDecimals: 0, tickSize: 1 },*/
    xaxis: { mode: "time" },
    /*调整min和max来改变上下界*/
    yaxis: { min: 1250, max: 2600, ticks: [1200, 1400, 1600, 1900, 2100, 2300, 2400, 2600, 3000] },
    grid: { hoverable: true, markings: markings }
};
/*后面的东西不需要改动*/

/*解除原先的消息响应*/
$("#placeholder").unbind();
/*画新的*/
var plot=$.plot($("#placeholder"),datas,options);
/*显示tip函数*/
function showTooltip(x, y, contents) {
    $('<div id="tooltip">' + contents + '</div>').css( {
        position: 'absolute',
        display: 'none',
        top: y - 20,
        left: x + 10,
        border: '1px solid #fdd',
        padding: '2px',
        'font-size' : '11px',
        'background-color': '#fee',
        opacity: 0.80
    }).appendTo("body").fadeIn(200);
}
var ctx=plot.getCanvas().getContext("2d");
var prev = -1;
/*绑定新的相应函数，弹出提示*/
$("#placeholder").bind("plothover", function (event, pos, item) {
    if (item) {
        if (prev != item.dataIndex) {
            $("#tooltip").remove();
            var params = data[item.seriesIndex][item.dataIndex];
            var total = params[1];
            var change = params[5] > 0 ? "+" + params[5] : params[5];
            var contestName = params[11];
            var contestId = params[2];
            var contestUrl = params[7];
            var rank = params[6];
            var title = params[8];
            var html = "= " + total + " (" + change + "), " + title + "<br/>"
                            + "Rank: " + rank + "<br/>"
                            + "<a href='" + contestUrl + "'>" + contestName + "</a>";
            if (change > 0)
                html += "<br/><a style='font-weight: bold;' href=\"/bestRatingChanges/" + params[10] + "\">Share it!</a>";
            showTooltip(item.pageX, item.pageY, html);
            setTimeout(function () {
                $("#tooltip").fadeOut(200);
                prev = -1;
            }, 4000);
            prev = item.dataIndex;
        }
    }
});
})();
