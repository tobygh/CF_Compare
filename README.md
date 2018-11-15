# CF_Compare
功能：将多人的CF rating变化曲线汇聚到一起进行比较，是CF的隐藏功能之一

使用方法：
 - 将Comp.js拷贝下来
 - 前往你想查看的人的CF profile界面，按ctrl+U查看页面源代码，在源代码页面按ctrl+F搜索 data.push，将两个data.push完整地复制下来，替换掉Comp.js里面的两行data.push
 - 设置datas里面的名字和递增的序号
 - 复制现在的Comp.js，回到任意一个人的网页，按F12并且切换到控制台，粘贴脚本并回车运行，一段时间后（人数越多需要的时间越久），将显示出结果。

注意事项
 - 默认的rating上下界是 1250 和 2600，如果显示不全，可以在options里面修改
 - 曲线上会出现红点，猜测应该是代表最高rating的那一场

data每一项含义：   
data\[   
&emsp;时间戳,   
&emsp;当前rating,   
&emsp;比赛编号,   
&emsp;比赛名称(英文),   
&emsp;比赛名称(俄文),   
&emsp;rating变化,   
&emsp;比赛排名,   
&emsp;比赛链接,   
&emsp;头衔,   
&emsp;也是头衔?,   
&emsp;数据的id(必须有，否则tips不会自动消失),   
&emsp;要显示的比赛名称(英文)   
\]
