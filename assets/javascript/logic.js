
var queryURL = "https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=134865"
    $.ajax({
        url: queryURL,
        method: "GET",
    
    }).then(function (response) {
        console.log(response)
    })