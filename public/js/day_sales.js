Highcharts.chart('column_day', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Cumulative Hamburger Sales for Each Day of Week Jan 2016'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },

});