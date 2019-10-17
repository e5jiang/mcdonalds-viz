Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Full Time Male Student Enrollment per Year'
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/e5jiang/mcdonalds-viz/master/monthly_sales.csv',
        endColumn: 1,
        endRow: 12,
        beforeParse: function(csv) {
            return csv.replace(/\b([a-zA-Z]{3})([\W\D\S]\d{2})\b/g, "$1-01$2");
        },
        parseDate: Date.parse
    },

    yAxis: {
        title: {
            text: 'McDonalds'
        }
    },
    xAxis: {
        type: 'datetime',
        labels: {
            format: '{value: %b-%y}',
        }
    },

    series: [{
        name: 'XD'
    }]
});