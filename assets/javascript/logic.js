// Schedule API

var queryURL = "https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=134865"
$.ajax({
    url: queryURL,
    method: "GET",

}).then(function (response) {
    
console.log(response);
    var results = response.events;

    for (var i = 0; i < results.length; i++) {

        //determining the opposing team and againstStatement
        if (results[i].strHomeTeam === "Golden State Warriors"){
            var opponent = results[i].strAwayTeam;
            var againstStatement = "vs " + opponent;
        }
        else {
        var opponent = results[i].strHomeTeam;
        var againstStatement = "@ " + opponent;
            };


        // displaying the againstStatement and date of game
        var gameDiv = $("<div>");
        gameDiv.html("<p>" + againstStatement + "</p>" +
                    "<p>" + "Sunday " + results[i].dateEvent + " at " + results[i].strTime + "</p>" );
        gameDiv.addClass("gameContainer");
    
      
      
      
      
    
      
      
 
        $("#schLoc").append(gameDiv);
        console.log(gameDiv)
        $(gameDiv).attr('id', opponent);
        $("#games-view").append(gameDiv);
        console.log(opponent);

    }
   
});


// GIPHY API
