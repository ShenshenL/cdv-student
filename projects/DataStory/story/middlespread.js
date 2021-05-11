
let viz = d3.select("#container")
  .append("svg")
  .attr("id", "viz")
  .attr("width", 2000)
  .attr("height", 7200)
;
//var zoom = d3.behavior.zoom().scaleExtent([1, 8]).on("zoom", zoomed);
// var svg = d3.select('svg')
//     .call(d3.zoom().scaleExtent([1,4]).on("zoom", zoom))

let svg = d3.select("svg")
  .attr("width", 2000)
  .attr("height", 7200)


var text = svg.append('text')
    .text('4000 players')
      .attr("x",50)
      .attr('y',70)
      .attr("fill", "white")
      .style("font-size", "22px")

let newData = d3.csv("data/steamplayers.csv").then(gotData)

// function ptext(){
//   viz.selectAll("text").data(playerData).enter().append("text")
//                                                     .text('1')
//                                                       .attr("cx", xposition)
//                                                       .attr("cy", yposition)
//
// }

console.log(a1);
function gotData(newData){
  //console.log(newData);
  viz.selectAll("circle").data(newData).enter().append("circle")
                                                .attr("cx", xposition)
                                                .attr("cy", yposition)
                                                .on("click", function(d) {
                                                     console.log(d)
                                                     var text = svg.append('text')
                                                           .attr("x",d3.event.pageX)
                                                           .attr('y',d3.event.pageY)
                                                           .attr("fill", "white")
                                                           .style("font-size", "16px")
                                                           .text(d.gnum)
                                                 })

                                                .transition()
                                                .duration(2000)
                                                .attr("r", 15)
                                                .style("opacity", .10)
                                                .attr("fill","black")

}

 // var rect = svg.append("rect").attr("x", 1000).attr("y", 40).attr("height", 50).attr("width", 50);
 //
 // rect.on("click", function() {
 //     //console.log("rect");
 //     gtext()
 // });
 //
 // var text = svg.append('text')
 //     .text('Click to see how many games players bought')
 //       .attr("x",1060)
 //       .attr('y',60)
 //       .attr("fill", "darkblue")
 //       .style("font-size", "12px")


function gtext(){
  for(i=0;i<a1.length;i++){
    var text = svg.append('text')
          .attr("x",x[i+1])
          .attr('y',y[i])
          .style("font-size", "12px")
          .attr("fill", "black")
          .text(a1[i])

  }
}


// function gotData2(){
//   //console.log(playerData);
//   viz.selectAll("text").data(playerData).enter().append("text")
//
//                                               .attr("cx", xposition)
//                                               .attr("cy", yposition)
//                                               .attr("fill","black")
// }

function xposition(datapoint){
  let a = datapoint.num*40;
  let n = datapoint.n;
  if(n>0){
    a = a-n*1440
  }
  return a+50
}

function yposition(datapoint){
  let y = datapoint.y*62;
  return y+100;
}
