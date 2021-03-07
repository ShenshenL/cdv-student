
let viz = d3.select("#container")
.append("svg")
.attr("id", "viz")
.attr("width", 2400)
.attr("height", 800)
;
var svg = d3.select('svg');
var line = svg.append("line")
             .attr("x1",1150)
             .attr("y1",10)
             .attr("x2",1150)
             .attr("y2",50)
             .attr("stroke","black")
             .attr("stroke-width",2)

var line = svg.append("line")
             .attr("x1",2170)
             .attr("y1",700)
             .attr("x2",2170)
             .attr("y2",50)
             .attr("stroke","black")
             .attr("stroke-width",3)
             .attr("marker-end","url(#arrow)");

var line = svg.append("line")
             .attr("x1",1130)
             .attr("y1",30)
             .attr("x2",1170)
             .attr("y2",30)
             .attr("stroke","black")
             .attr("stroke-width",2)


var line = svg.append("line")
             .attr("x1",2170)
             .attr("y1",700)
             .attr("x2",1350)
             .attr("y2",700)
             .attr("stroke","black")
             .attr("stroke-width",3)
             .attr("marker-end","url(#arrow)");

var marker =svg.append("marker")
             .attr("id", "arrow")
             .attr("markerUnits","strokeWidth")//设置为strokeWidth箭头会随着线的粗细发生变化
             .attr("viewBox", "0 0 12 12")//坐标系的区域
             .attr("refX", 6)//箭头坐标
             .attr("refY", 6)
             .attr("markerWidth", 12)
             .attr("markerHeight", 12)
             .attr("orient", "auto")//绘制方向，可设定为：auto（自动确认方向）和 角度值
             .append("path")
             .attr("d", "M2,2 L10,6 L2,10 L6,6 L2,2")//箭头的路径
             .attr('fill', '#000000');//箭头颜色


var text = svg.append('text')
                              .text('N')
                              .attr("x",1155)
                              .attr('y',18);
var text = svg.append('text')
                              .text('Height')
                              .attr("x",2155)
                              .attr('y',28);
var text = svg.append('text')
                              .text('Stay time')
                              .attr("x",1300)
                              .attr('y',730);

let newData = d3.json("data.json").then(gotData)


function gotData(newData){
  console.log(newData);
  viz.selectAll("circle").data(newData).enter().append("circle")
                                                  .attr("cx", xposition)
                                                  .attr("cy", yposition)
                                                  .attr("r", size)
                                                  .style("opacity", .44)
                                                  .attr("stroke",tileColor)
                                                  .attr("stroke-width",4)
                                                  .attr("fill",birdColor);
  var imgs = viz.selectAll("image").data(newData);
  imgs.enter().append("svg:image")
                                                    .attr('x', x2)
                                                    .attr('y', height)
                                                    .attr('width', size2)
                                                    .attr('height', size2)
                                                    .style("opacity", .5)
                                                    .attr("xlink:href", img)
}



function xposition(datapoint){
  let x = datapoint.direction
  let a = datapoint.num*20
  if(x == "n"){
      return 300+a
    }else if(x == "s"){
      return 300+a
    }else if(x == "w"){
      return 50+a
    }else{
      return 550+a
    }
}

function yposition(datapoint){
  let y =datapoint.direction
  let a = datapoint.num*10
  if(y == "n"){
    return 150
  }else if(y == "s"){
    return 650
  }else if(y == "w"){
    return 400
  }else{
    return 400
  }
}
function birdColor(datapoint){
  //var color = d3.map(newData,function(c){return c.color})
  let color = datapoint.color;
  console.log(color)
  return color;
}

function tileColor(datapoint){
  //var color = d3.map(newData,function(c){return c.color})
  let color = datapoint.tcolor;
  console.log(color)
  return color;
}

function size(datapoint){
  let s=datapoint.size
  return s*12
}

function size2(datapoint){
  let s=datapoint.size
  return s*30
}

function height(datapoint){
  let h=600-datapoint.heightfloor*20
  return h
}

function img(datapoint){
  let c = datapoint.color;
  if(c == "black"){
    return "birdSize/1.png"
  }else if (c == "white") {
    return "birdSize/2.png"
  }else if (c == "darkgrey") {
    return "birdSize/3.png"
  }else if (c == "brown") {
    return "birdSize/4.png"
  }else if (c == "darkblue") {
    return "birdSize/5.png"
  }else if (c == "purple") {
    return "birdSize/6.png"
  }else if (c == "olive") {
    return "birdSize/7.png"
  }else if (c == "grey") {
    return "birdSize/8.png"
  }else if (c == "yellow") {
    return "birdSize/9.png"
  }else if (c == "goldenrod") {
    return "birdSize/10.png"
  }else if (c == "cadetblue") {
    return "birdSize/11.png"
  }
}

function x2(datapoint){
  let t = 2000-datapoint.timestay*5;
  return t;
}
