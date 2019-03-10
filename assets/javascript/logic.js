
var queryURL = "https://www.fantasybasketballnerd.com/service/schedule/GSW"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    })