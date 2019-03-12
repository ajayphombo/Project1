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

        $(".gameContainer").on("click",function(){//when you click on the schedule

            var gameId= $(this).prop("id");//grabs the "id= opponent" sets it to the var
            console.log(gameId);
        
            var query2URL = "https://api.giphy.com/v1/gifs/search?q=" +
            gameId + "&api_key=fTQFhu3tMcEVU2sqaVkMweJGunYG68UR&limit=10";
        
            $.ajax({
            url: query2URL,
            method: "GET"
            })
        
            .then(function(response) {
                var results = response.data;
                console.log(results);
                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div>");
                    var rating = results[i].rating;
                    var p = $("<p>").text("Rating: " + rating);
                    var topicImage = $("<img>");
                    //topicImage.attr("src", results[i].images.fixed_height_still.url);
                   //topicImage.attr("data-still",results[i].images.fixed_height_still.url);
                    topicImage.attr("src",results[i].images.fixed_height.url);//source of the gif
                   // topicImage.attr("data-state","still");
                    topicImage.addClass("gif");
                    gifDiv.append(p);
                    gifDiv.append(topicImage);
                    $("#display").html(gifDiv);
        
        }
        });
        
        
          })
        
        






    }
   
});
