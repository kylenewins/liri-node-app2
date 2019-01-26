require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var bandsInTownQuery = "https://rest.bandsintown.com/artists/" + bitArtist + "/events?app_id=codingbootcamp"
var bitArtist = "Cher"

var omdb = keys.omdb.id
var omdbQuery = "http://www.omdbapi.com/?apikey=" + omdb + "&"

console.log(bandsInTownQuery)
console.log(omdbQuery)
console.log(spotify)

