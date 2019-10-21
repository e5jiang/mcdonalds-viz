/**
 * Create a global getSVG method that takes an array of charts as an
 * argument
 */
Highcharts.getSVG = function(charts) {
    var svgArr = [],
      top = 0,
      width = 0,
      endWidth = 0;
  
    Highcharts.each(charts, function(chart) {
      var svg = chart.getSVG(),
        // Get width/height of SVG for export
        svgWidth = +svg.match(
          /^<svg[^>]*width\s*=\s*\"?(\d+)\"?[^>]*>/
        )[1],
        svgHeight = +svg.match(
          /^<svg[^>]*height\s*=\s*\"?(\d+)\"?[^>]*>/
        )[1];
  
      svg = svg.replace(
        '<svg',
        '<g transform="translate(' + width + ', ' + top + ')" '
      );
  
      svg = svg.replace('</svg>', '</g>');
  
      width += svgWidth;
      endWidth = Math.max(endWidth, width)
  
      if (width === 2 * svgWidth) {
        width = 0;
        top += svgHeight;
      }
  
      svgArr.push(svg);
    });
    top += 200;
    return '<svg height="' + top + '" width="' + endWidth +
      '" version="1.1" xmlns="http://www.w3.org/2000/svg">' +
      svgArr.join('') + '</svg>';
  };
  
  /**
   * Create a global exportCharts method that takes an array of charts as an
   * argument, and exporting options as the second argument
   */
  Highcharts.exportCharts = function(charts, options) {
  
    // Merge the options
    options = Highcharts.merge(Highcharts.getOptions().exporting, options);
  
    // Post to export server
    Highcharts.post(options.url, {
      filename: options.filename || 'mcdonalds_charts',
      type: options.type,
      width: options.width,
      svg: Highcharts.getSVG(charts)
    });
  };

$('#export-pdf').click(function () {
    Highcharts.exportCharts([burger_line, chicken_line, fish_line, column_burger, column_chicken, column_fish], {
        type: 'application/pdf'
    });
});