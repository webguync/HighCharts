// Build the chart
Highcharts.chart('container', {
  chart: {
    plotBackgroundColor:'#555555',
    plotBorderWidth:'5px',
    plotShadow: true,
    type: 'pie'
  },
  title: {
    text: 'Corona Virus (COVID-19) data',
    
  },
  subtitle: {
    text: 'Highest number of Covid-19 cases'
},
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [{
    name: 'Countries',
    colorByPoint: false,
    data: [{
      name: 'United States',
      y: 55.00,
      sliced: true,
      selected: true,
      color: '#6f50aa'
    }, {
      name: 'United Kingdom',
      y: 25.05,
      color:'#d1972b',
    }, {
      name: 'Germany',
      y: 10.85,
      color:'#02d082',
    }, {
      name: 'France',
      y: 4.67,
      color:'#a47157',
    }, {
      name: 'China',
      y: 4.18,
      color:'#006d71',
    }, {
      name: 'Other',
      y: 7.05,
      color:'#5e0848',
    }]
  }]
});