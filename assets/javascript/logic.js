// Schedule API

var queryURL = "https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=134865";

$.ajax({
    url: queryURL,
    method: "GET"
})
    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

      

 
        $("#schLoc").append(gameDiv);
        console.log(gameDiv)
        $(gameDiv).attr('id', opponent);
        $("#games-view").append(gameDiv);
        console.log(opponent);



                var $div = $("<div>", test);
                $div.html("New Division");
                $("body").append($div);


            
        



        /*var results = response.events;

        
        for (var i = 0; i < results.length; i++);
       {

          var gameDiv = $("<div>");
            gameDiv.html("<p>" + againstStatement + "</p>" +
                "<p>" + "Sunday " + results[i].dateEvent + " at " + results[i].strTime + "</p>");
            gameDiv.addClass("gameContainer");

            console.log(results);






           /* lonz
            $("#schLoc").append(gameDiv);
            console.log(gameDiv)
            $(gameDiv).attr('id', opponent);
            $("#games-view").append(gameDiv);
            console.log(opponent);
            master*/

    

    );



