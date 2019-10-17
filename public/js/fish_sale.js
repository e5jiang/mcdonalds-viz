Highcharts.chart('fish_line', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Monthly Fish Fillet Sales by Region in 2016'
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/e5jiang/mcdonalds-viz/master/data_files/chicken.csv',
        endRow: 12,
        beforeParse: function(csv) {
            return csv.replace(/\b(\d{2}[\W\D\S])([a-zA-Z]{3})\b/g, "01-$1$2");
        },
        parseDate: Date.parse
    },
    tooltip: {
        xDateFormat: "%b-%y"
    },
    yAxis: {
        title: {
            text: 'Fish Fillets Sold'
        }
    },
    xAxis: {
        type: 'datetime',
        labels: {
            format: '{value: %b-%y}',
            rotation: -20
        },
        tickInterval: 1000 * 3600 * 24 *30
    },

    series: [{
        name: 'XD'
    }]
});