Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Full Time Male Student Enrollment per Year'
    },
    xAxis: {
        categories: [
            '2005',
            '2006',
            '2007',
            '2008',
            '2009',
            '2010',
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Fulltime Men Enrolled'
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
    series: [{
        name: 'Fulltime Men Enrolled',
        data: [1607, 2031, 1838, 1893, 1695, 1858, 1583, 2328, 2616, 2538, 2711, 2669, 2725, 3220] 

    }]
});