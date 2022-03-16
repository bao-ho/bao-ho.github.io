// Some info about viewport percentages:
// http://stackoverflow.com/questions/1575141/make-div-100-height-of-browser-window

(function () {
    var plotlyD3 = Plotly.d3;
    var Gender = [];
    var Count = [];
    d3.csv("/assets/nobel-prize/df_prizes_by_genders.csv").then(function (data) {
        data.forEach(row => {
            Gender.push(row.Gender);
            Count.push(row.Count);
        });
        var gd = plotlyD3.select('#pie-prizes-by-genders').append('div').node();
        var data = [{
            values: Count,
            labels: Gender,
            type: 'pie'
        }];

        var layout = {
            title: 'Prizes by Genders',
        };
        var config = {responsive: true}

        Plotly.newPlot(gd, data, layout, config);
    });
})();