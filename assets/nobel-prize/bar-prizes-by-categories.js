// Some info about viewport percentages:
// http://stackoverflow.com/questions/1575141/make-div-100-height-of-browser-window

(function () {
    var plotlyD3 = Plotly.d3;
    var Category = [];
    var Count = [];
    d3.csv("/assets/nobel-prize/df_prizes_by_categories.csv").then(function (data) {
        data.forEach(row => {
            Category.push(row.Category);
            Count.push(row.Count);
        });
        var gd = plotlyD3.select('#bar-prizes-by-categories').append('div').node();
        var data = [{
            y: Count,
            x: Category,
            marker: {
                color: Count,
                colorscale: 'Portland',
            },
            type: 'bar'
        }];

        var layout = {
            title: 'Prizes by Categories',
        };

        var config = { responsive: true }

        Plotly.newPlot(gd, data, layout, config);
    });
})();