
var queryURL = "https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=134865"
$.ajax({
    url: queryURL,
    method: "GET",

}).then(function (response) {
    console.log(response)

    var results = response.events;

    for (var i = 0; i < results.length; i++) {
        
        var gameDiv = $("<div>");
        gameDiv.html("<p>" + "Home: " + results[i].strHomeTeam + "</p>" +
                    "<p>" + "Away: " + results[i].strAwayTeam + "</p>" +
                    "<p>" + "Date: " + results[i].dateEvent +  "</p>" );
        gameDiv.addClass("gameContainer");
        $("#games-view").append(gameDiv);
        console.log(gameDiv)
    }
});
