// Some info about viewport percentages:
// http://stackoverflow.com/questions/1575141/make-div-100-height-of-browser-window

(async function () {
    var plotlyD3 = Plotly.d3;
    var year = [];
    var count = [];
    var year5 = [];
    var count5 = [];
    await d3.csv("/assets/nobel-prize/df_prizes_by_years.csv").then(function (data) {
        data.forEach(row => {
            year.push(row.year);
            count.push(row.prize);
        })
    });

    await d3.csv("/assets/nobel-prize/df_prizes_by_years_roll_5.csv").then(function (data) {
        data.forEach(row => {
            year5.push(row.year);
            count5.push(row.prize);
        })
    });
    var gd = plotlyD3.select('#scatter-prizes-by-years').append('div').node();
    var plotData = [{
        y: count,
        x: year,
        type: 'scatter',
        mode: 'markers',
        name: 'Prizes by Years'
    },{
        y: count5,
        x: year5,
        type: 'scatter',
        mode: 'lines',
        name: 'Average of Prizes from Previous 5 Years'
    },];

    var layout = {
        title: 'Prizes by Years',
        legend: {x: 1, y: 0.01, xanchor: 'right', bgcolor: 'rgba(0,0,0,0.2)'}
    };
    var config = { responsive: true }

    Plotly.newPlot(gd, plotData, layout, config);
})();