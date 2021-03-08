let viz = d3.select("#cover-container")
  .append("svg")
  .attr("id", "viz")
  .attr("width", 1200)
  .attr("height", 800)
;
var svg = d3.select('svg');
var text = svg.append('text')
                              .text('Birds in the Neighborhood')
                              .attr("x",140)
                              .attr('y',408)
                              .attr("fill", "black")
                              .style("font-size", "72px")
