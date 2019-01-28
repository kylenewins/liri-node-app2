require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var axios = require("axios")

var spotify = new Spotify(keys.spotify);

var arg1 = process.argv[2]

// console.log(bandsInTownQuery)
// console.log(omdbQuery)
// console.log(spotify)

if(arg1 === "concert-this"){
    var bitArtist =  process.argv[3]
    var bandsInTownQuery = "https://rest.bandsintown.com/artists/" + bitArtist + "/events?app_id=codingbootcamp"

    axios.get(bandsInTownQuery).then(
        function(response){
            console.log("Venue Name: " + response)
            // console.log("Venue Location: " + response.venue.city)
            // console.log("Venue Date: " + response.datetime)
            console.log(bandsInTownQuery)
         }
    )
}

if(arg1 === "movie-this"){
    var movie = process.argv[3]
    var omdb = keys.omdb.id
    
    var omdbQuery = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short" + "&apikey=" + omdb + "&"

    axios.get(omdbQuery)
    .catch(function (error) {
        console.log(error);
      })
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
        
}

