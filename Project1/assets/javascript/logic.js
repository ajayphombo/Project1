

// object with team ids for api input
let Players = {
    "Houston Rockets": "134876",
    "Oklahoma City Thunder": "134887",
    "San Antonio Spurs": "134879",
    "Minnesota Timberwolves": "134886",
    "Indiana Pacers": "134873",
    "Dallas Mavericks": "134875",
    "Detroit Pistons": "134872"
};


// api for displaying schedule
var queryURL = "https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=134865"

$.ajax({
    url: queryURL,
    method: "GET",

}).then(function (response) {

    var results = response.events;

    for (var i = 0; i < results.length; i++) {

        //determining the opposing team and againstStatement
        if (results[i].strHomeTeam === "Golden State Warriors") {
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
            "<p>" + "Sunday " + results[i].dateEvent + " at " + results[i].strTime + "</p>");
        gameDiv.addClass("gameContainer");


        $("#schLoc").append(gameDiv);
        // console.log(gameDiv)
        $(gameDiv).attr('id', opponent);
        $("#games-view").append(gameDiv);
        //console.log(opponent);

    };

    // on clicking a schedule display gif and roster

    $(".gameContainer" || "#gifDisplay").on("click", function () {
        var gameId = $(this).prop("id");
        $("#playerList").html("");
        //gif api
        //$("#contentTitle").text(gameId)
        var query2URL = "https://api.giphy.com/v1/gifs/random?api_key=fTQFhu3tMcEVU2sqaVkMweJGunYG68UR&tag=" + gameId;

        $.ajax({
            url: query2URL,
            method: "GET"
        })

            .then(function (response) {
                var results = response.data;
                var topicImage = $("<img>");
                console.log(results)
                //topicImage.attr("src", results[i].images.fixed_height_still.url);
                //topicImage.attr("data-still",results[i].images.fixed_height_still.url);
                topicImage.attr("src", results.images.original.url);//source of the gif
                // topicImage.attr("data-state","still");
                topicImage.addClass("gif");

                $("#gifDisplay").html(topicImage);

            })

        //roster api
        var queryURL = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=" + Players[gameId]; //134865";

        $.ajax({
            url: queryURL,
            method: "GET",

        }).then(function (response) {

            var results = response.player;
            console.log(results)

            for (var i = 0; i < results.length; i++) {
                var player = $("<p>");
                player.text(results[i].strPlayer + ", " + results[i].strPosition);

                $("#playerList").append(player);
            }
        })


        //team info api
        var queryURL = "https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=" + Players[gameId]; //134865";

        $.ajax({
            url: queryURL,
            method: "GET",

        }).then(function (response) {
            console.log(response)
            var results = response.teams[0];
            console.log(results.strTeamBadge);
            var logo = $("<img>");
            logo.attr("src", results.strTeamBanner);
            logo.attr("id", "logo");
            // console.log(logo)
            $("#contentTitle").html(logo);
        })




    })
});


