



let viz = d3.select("#viz-container")
.append("svg")
.attr("id", "viz")
.attr("width", 800)
.attr("height", 800)
;
var svg = d3.select('svg');
var line = svg.append("line")
             .attr("x1",750)
             .attr("y1",10)
             .attr("x2",750)
             .attr("y2",50)
             .attr("stroke","black")
             .attr("stroke-width",2)
             .attr("marker-end","url(#arrow)");

var line = svg.append("line")
                          .attr("x1",730)
                          .attr("y1",30)
                          .attr("x2",770)
                          .attr("y2",30)
                          .attr("stroke","black")
                          .attr("stroke-width",2)
                          .attr("marker-end","url(#arrow)");


var text = svg.append('text')
                              .text('N')
                              .attr("x",755)
                              .attr('y',18)

var text = svg.append('text')
                              .text('Radius:bird Size')
                              .attr("x",650)
                              .attr('y',738)

var text = svg.append('text')
                              .text('Color:bird color')
                              .attr("x",650)
                              .attr('y',758)
var text = svg.append('text')
                              .text('Position: direction')
                              .attr("x",650)
                              .attr('y',778)

let newData = d3.json("data.json").then(gotData)

function gotData(newData){
  console.log(newData);
  viz.selectAll("circle").data(newData).enter().append("circle")
                                                  .attr("cx", xposition)
                                                  .attr("cy", yposition)
                                                  .attr("r", height)
                                                  .style("opacity", .3)
                                                  .attr("fill",birdColor)
  ;

}

function xposition(datapoint){
  let x = datapoint.direction
  if(x == "n"){
    return 400
  }else if(x == "s"){
    return 400
  }else if(x == "w"){
    return 150
  }else{
    return 650
  }
}

function yposition(datapoint){
  let y =datapoint.direction
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
  if(color == "gray"){
    return "gray";
  }else if(color == "brown"){
    return "brown";
  }else if(color == "blue"){
    return "blue";
  }else if(color == "black"){
    return "black";
  }else if(color == "white"){
    return "white";
  }
}

function height(datapoint){
  let h=datapoint.heightfloor
  return h*4
}
