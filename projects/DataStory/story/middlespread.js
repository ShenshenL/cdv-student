
let viz = d3.select("#container")
  .append("svg")
  .attr("id", "viz")
  .attr("width", 1600)
  .attr("height", 7200)
;
//var zoom = d3.behavior.zoom().scaleExtent([1, 8]).on("zoom", zoomed);
var svg = d3.select('svg')
    .call(d3.zoom().scaleExtent([1,4]).on("zoom", zoom))


    // .call(d3.zoom().on("zoom",function ()
// viz.call(d3.zoom()
//     .extent([[0, 0], [1600, 7200]])
//     .scaleExtent([1, 6])
//     .on("zoom", zoomed));
//
//   function zoomed({transform}) {
//     g.attr("transform", transform);
//   }

// function zoomed() {
//     svg.attr("transform",
//         "translate(" + zoom.translate() + ")" +
//         "scale(" + zoom.scale() + ")"
//     );
// }



var text = svg.append('text')
    .text('4000 players')
      .attr("x",50)
      .attr('y',50)
      .attr("fill", "darkblue")
      .style("font-size", "22px")

let newData = d3.csv("data/steamplayers.csv").then(gotData)

function gotData(newData){
  console.log(newData);
  viz.selectAll("circle").data(newData).enter().append("circle")

                                              .attr("cx", xposition)
                                              .attr("cy", yposition)
                                              .transition()
                                              .duration(2000)
                                              .attr("r", 15)
                                              .style("opacity", .10)
                                              .attr("fill","black")


}


function xposition(datapoint){
  let a = datapoint.num*40;
  let n = datapoint.n;
  if(n>0){
    a = a-n*1440
  }
  return a+50
}

function yposition(datapoint){
  let y = datapoint.y*60;
  return y+100;
}

function zoom() {
  svg.attr("transform", d3.event.transform);
}

function interpolateZoom (translate, scale) {
    var self = this;
    return d3.transition().duration(300).tween("zoom", function () {
        var iTranslate = d3.interpolate(zoom.translate(), translate),
            iScale = d3.interpolate(zoom.scale(), scale);
        return function (t) {
            zoom
                .scale(iScale(t))
                .translate(iTranslate(t));
            zoomed();
        };
    });
}
