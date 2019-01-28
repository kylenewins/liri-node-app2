require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var axios = require("axios")
var moment = require("moment")
var fs = require("fs")

var arg1 = process.argv[2]
var arg2 = process.argv[3]

// console.log(bandsInTownQuery)
// console.log(omdbQuery)
// console.log(spotify)

function runApp(userCommand, userQuery){
    switch(userCommand){
        case "concert-this":
            concertThis();
            break;
        case "spotify-this-song":
            spotifyThis();
            break;
        case "movie-this":
            movieThis();
            break;
        case "do-what-it-says":
            doThis();
            break;
        default:
            console.log("I didn't quite get that, make sure you use hyphens in your query!")
            break;
    }
}
runApp(arg1, arg2)

function concertThis(){
    var bandsInTownQuery = "https://rest.bandsintown.com/artists/" + arg2 + "/events?app_id=codingbootcamp"

    axios.get(bandsInTownQuery)
    .then(
        function(response){
            console.log("------------------------")
            console.log("Venue Name: " + response.data[0].venue.name)
            console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region)
            var dateFormat = moment(response.data[0].datetime).format("MM/DD/YYYY")
            console.log("Venue Date: " + dateFormat)
            console.log("------------------------")
            console.log(bandsInTownQuery)
         })
    .catch(function (error) {
        console.log(error);
      })
}

function movieThis(){
    var omdb = keys.omdb.id
    
    var omdbQuery = "http://www.omdbapi.com/?t=" + arg2 + "&y=&plot=short" + "&apikey=" + omdb + "&"

    axios.get(omdbQuery)
    .then(
        function(response){
            console.log("-----------------------")
            console.log("Title: " + response.data.Title)
            console.log("\nYear: " + response.data.Year)
            console.log("\nIMDB Rating: " + response.data.Ratings[0].Value)
            console.log("\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value)
            console.log("\nCountry: " + response.data.Country)
            console.log("\nLanguage: " + response.data.Language)
            console.log("\nPlot: " + response.data.Plot)
            console.log("\nActors: " + response.data.Actors)
            console.log("-------------------------")
         })
      .catch(function (error) {
        console.log(error);
      })
}

function spotifyThis(){
    var spotify = new Spotify(keys.spotify);
    var spotifyQuery = spotify.search({type: "track", query: arg2, limit: 1},
    function(error, data){
        if(error){
            console.log("Error Ocurred: " + error)
        }
        else {
        var response = data.tracks.items[0]
        console.log("----------------------")
        console.log("Artist: " + response.album.artists[0].name)
        console.log("Track Name: " + response.name)
        console.log("Spotify Link: " + response.external_urls.spotify)
        console.log("Album Name: " + response.album.name)
        console.log("------------------------")
        }
    })
}

function doThis(){
    fs.readFile("random.txt", "utf8", function(error, data){
        if(error){return console.log(error)}
        var dataFormat = data.split(",")
        arg1 = dataFormat[0]
        arg2 = dataFormat[1]

        runApp(arg1, arg2)
    })
}