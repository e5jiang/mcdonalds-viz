Highcharts.chart('column_day', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Cumulative Hamburger Sales for Each Day of Week Jan 2016'
    },
    
    data: {
        csvURL: 'https://raw.githubusercontent.com/e5jiang/mcdonalds-viz/master/data_files/burgers_dow.csv'
    },

    yAxis: {
        title: {
            text: 'Hamburger Sales'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },

});