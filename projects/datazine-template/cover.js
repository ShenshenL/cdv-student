let viz = d3.select("#container")
  .append("svg")
  .attr("id", "viz")
  .attr("width", 1200)
  .attr("height", 800)
;
var svg = d3.select('svg');
var text = svg.append('text')
                              .text('Birds in the Neighborhood')
                              .attr("x",240)
                              .attr('y',408)
                              .attr("fill", "white")
                              .attr("font-family", "Georgia")
                              .style("font-size", "64px")
