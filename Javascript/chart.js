var options = {
    series: [325],
    labels: ['Pré-Processamento'],
    chart: {
        width: 500,
        type: 'donut',
        
    },
    dataLabels: {
        enabled: false
    },
    responsive: [{
        breakpoint: 1456,
        options: {
            chart: {
                width: 400
            },
            legend: {
                show: false
            }
        },
        breakpoint: 858,
        options: {
            chart: {
                width: 300
            },
            legend: {
                show: false
            }
        }
    }],
    


    fill: {
        colors: ['#4E7AC7'],
        type: "gradient",
},
    legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'right',
        horizontalAlign: 'center',
        floating: false,
        fontSize: '10px',
        fontFamily: 'Helvetica, Arial',
        fontWeight: 400,
        formatter: undefined,
        inverseOrder: false,
        width: 150,
        height: 100,
        tooltipHoverFormatter: undefined,
        customLegendItems: [],
        offsetX: 0,
        offsetY: 0,
        labels: {
            colors: ['#4E7AC7'],
            useSeriesColors: false
        },
        markers: {
            width: 12,
            height: 12,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: ['#4E7AC7'],
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
        },
        itemMargin: {
            horizontal: 5,
            vertical: 0
        },
        onItemClick: {
            toggleDataSeries: true
        },
        onItemHover: {
            highlightDataSeries: true
        },
    },

    

    
};
var options2 = {
    series: [100, 125],
    labels: ['Em processamento', 'Processados'],
    chart: {
        width: 500,
        type: 'donut',
        
    },
    dataLabels: {
        enabled: false
    },
    responsive: [{
        breakpoint: 1456,
        options: {
            chart: {
                width: 400
            },
            legend: {
                show: false

            }
        },
        breakpoint: 858,
        options: {
            chart: {
                width: 300
            },
            legend: {
                show: false
            }
        }

    }],
    


    fill: {
        colors: ['#FF8500','#04BF8A'],
        opacity: 1,
        type: "gradient",
    },
    legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'right',
        horizontalAlign: 'center',
        floating: false,
        fontSize: '10px',
        fontFamily: 'Helvetica, Arial',
        fontWeight: 400,
        formatter: undefined,
        inverseOrder: false,
        width: 150,
        height: 100,
        tooltipHoverFormatter: undefined,
        customLegendItems: [],
        offsetX: 0,
        offsetY: 0,
        labels: {
            colors: ['#FF8500', '#04BF8A'],
            useSeriesColors: false
        },
        markers: {
            width: 12,
            height: 12,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: ['#FF8500', '#04BF8A'],
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
        },

        onItemClick: {
            toggleDataSeries: true
        },
        onItemHover: {
            highlightDataSeries: true
        },
    },
    

    
};




var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
var chart = new ApexCharts(document.querySelector("#chart2"), options2);
chart.render();


function appendData() {
    var arr = chart.w.globals.series.slice()
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
    return arr;
}

function removeData() {
    var arr = chart.w.globals.series.slice()
    arr.pop()
    return arr;
}



function reset() {
    return options.series
}


