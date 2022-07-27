// Some info about viewport percentages:
// http://stackoverflow.com/questions/1575141/make-div-100-height-of-browser-window

(function () {
    const plotlyD3 = Plotly.d3;
    const maleCategory = [];
    const femaleCategory = [];
    const maleCount = [];
    const femaleCount = [];
    d3.csv("/assets/nobel-prize/df_prizes_by_categories_genders.csv").then(function (data) {
        data.forEach(row => {
            if (row.sex === 'Male') {
                maleCount.push(row.prize);
                maleCategory.push(row.category)
            }
            else {
                femaleCount.push(row.prize);
                femaleCategory.push(row.category)
            }
        });
        const gd = plotlyD3.select('#bar-prizes-by-categories-genders').append('div').node();
        const malePart = {
            y: maleCount,
            x: maleCategory,
            name: 'Male',
            type: 'bar',
        };

        const femalePart = {
            y: femaleCount,
            x: femaleCategory,
            name: 'Female',
            type: 'bar',
        };

        const plotData = [femalePart, malePart]

        const layout = {
            title: 'Prizes by Genders across Categories',
            barmode: 'stack',
            legend: {x: 1, y: 1, xanchor: 'right'}
        };

        const config = { responsive: true }

        Plotly.newPlot(gd, plotData, layout, config);
    });
})();