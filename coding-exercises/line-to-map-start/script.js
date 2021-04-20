let w = 1200;
let h = 800;
let padding = 90

// SVG
let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)
    .style("background-color", "lavender")
;


// IMPORT DATA
d3.json("countries.geojson").then(function(geoData){
  d3.csv("population-figures-by-country-csv_csv.csv").then(function(incomingData){

    // PRINT DATA
    console.log(geoData);
    console.log(incomingData);
    // incomingData = incomingData.map(function(d,i){
    //   incomingData.Year_1960 = Number(incomingData.Year_1960)
    //   return incomingData
    // })
    let years = []

    let year1 = []
    let cn = []
    for (var i = 0; i < incomingData.length; i++) {
      if(incomingData[i].Year_1960 != ""){
        year1.push(incomingData[i].Year_1960);
        cn.push(incomingData[i].Country_Code)
      }
    }
    console.log(year1)

    let maxPop = d3.max(year1)
    let minPop = d3.min(year1)

    console.log(maxPop)
    console.log(minPop)

    let colorScale = d3.scaleLinear().domain([minPop,maxPop]).range(["white","red"])

    // SCALES (to translate data values to pixel values)
    // let xDomain = d3.extent(incomingData, function(d){ return Number(d.year); })
    // let xScale = d3.scaleLinear().domain(xDomain).range([padding,w-padding]);
    // let yDomain = d3.extent(incomingData, function(d){ return Number(d.birthsPerThousand); })
    // let yScale = d3.scaleLinear().domain(yDomain).range([h-padding,padding]);

    // PATH (line) MAKER - gets points, returns one of those complicated looking path strings
    // let lineMaker = d3.line()
    //     .x(function(d){
    //       return xScale(Number(d.year));
    //     })
    //     .y(function(d){
    //       return yScale(Number(d.birthsPerThousand));
    //     })
    // ;
    f = geoData.features
    console.log(f);
    let id = []
    for (var i = 0; i < f.length; i++) {
        id.push(f[i].id)
    }
    //console.log(id);


    let cData = []
    let color = []
    for (var i = 0; i < id.length; i++) {
      for(var j = 0; j < incomingData.length; j++){
        if(id[i] == incomingData[j].Country_Code){
          cData.push(incomingData[j])
        }
      }
    }
    console.log(cData)

    for(var i = 0; i < cData.length; i++){
     color.push({name:cData[i].Country_Code,co:cData[i].Year_1960})
    }
    console.log(color)

    // function c(){
    //   for (var i = 0; i < id.length; i++) {
    //     for(var j = 0; j < geoData.length; j++){
    //       if(color[i].name == geoData[j].geoData.features.id){
    //
    //       }
    //     }
    //   }
    //   return colorScale(color[i].co)
    // }


    let projection = d3.geoEqualEarth()
      .translate([w/2,h/2])
      //.center([103.8,34.1])
      .fitExtent([[0,0],[w,h]],geoData)
    let projection2 = d3.geoOrthographic()
  			.translate(w/2,h/2)
  			.fitExtent([[0,0],[w,h]],geoData)
    let projection3 = d3.geoMercator()
  		.translate(w/2,h/2)
  		.fitExtent([[0,0],[w,h]],geoData)
    let projections = [projection,projection2,projection3]
    let pathMaker = d3.geoPath(projection)

    // CREATE SHAPES ON THE PAGE!
    viz.selectAll(".Country").data(geoData.features).enter()
      .append("path")
        .attr("class", "province")
        .attr("d", pathMaker)
        //.attr("fill",c)
        .attr("fill",function(d,i){
          console.log(d.properties.name);
          let s = color.find(function(datapoint){
              if(color.name == d.properties.name){
                return true
             }else{
                return false
              }
            })
          console.log(s);
          if(s != undefined){
              return colorScale(color.co)
            }else{
              return "blue"
            }
         })
        .attr("stroke", "white")
    ;
    document.getElementById("btn").addEventListener("click", ()=>{
      i = (i+1)%projections.length
      let pathMaker = d3.geoPath(projections[i])
      viz.selectAll(".province").data(geoData.features).attr("d", pathMaker)
      document.querySelector("#pp").innerHTML = "Projection Type " + (i+1) + ": " + name[i]
    })

  })
  })
