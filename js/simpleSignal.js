SIMPLE_SIGNAL = (function() {
  
  var vis = d3.select("#simpleSignalFigure"),
      width = 500,
      height = 150,
      margin = {top: 30, right: 30, bottom: 30, left: 30};

  var svg = vis.selectAll("svg")
              .data([{}]);
  svg.enter()
      .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom);

  var svgG = svg.selectAll("g#drawingArea").data([{}]);
  svgG.enter()
        .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .attr("id", "drawingArea");



}) ();
