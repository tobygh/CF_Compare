# CF_Compare
功能：将多人的CF rating变化曲线汇聚到一起进行比较，是CF的隐藏功能之一

使用方法：
 - 将Comp.js拷贝下来
 - 前往你想查看的人的CF profile界面，按ctrl+U查看页面源代码，在源代码页面按ctrl+F搜索 data.push，将两个data.push完整地复制下来，替换掉Comp.js里面的两行data.push
 - 设置datas里面的名字和递增的序号
 - 复制现在的Comp.js，回到任意一个人的网页，按F12并且切换到控制台，粘贴脚本并回车运行，一段时间后（人数越多需要的时间越久），将显示出结果。

注意事项
 - 默认的rating上下界是 1250 和 2600，如果显示不全，可以在options里面修改
