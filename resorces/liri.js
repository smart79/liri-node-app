// .env to make keys not visible//
require("dotenv").config();
// acessing project keys and creating variables for the required packages//
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var axios = require("axios");
var fs = require("fs");
var moment = require("moment");

// initializing the spotify API
var spotify = new Spotify(keys.spotify);
// Search function for spotify API
    function getSpotify(songName) {
    
    // console.log("songName if not a song name: " + songName);
     if (!songName) {
        songName = "The Sign";
     };

    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if(err) {
        //console.log("Data for song search: " + data.tracks.items[0]);
        return console.log('Error Occurred: '+ err);
        }
        var songs = data.tracks.items;
                for (var i = 0; i < songs.length; i++) {
                console.log(i);
        
        //return Artist(s)
        console.log("Artist(s) Name: " + data.tracks.items[0].album.artist[0].name + "\r\n");
        //return Song name
        console.log("Song Name: " + data.tracks.items[0].name + "\r\n");
        //return link of the song from spotify
        console.log("Preview Song: " + data.tracks.items[0].href + "\r\n");
        //return song's album 
        console.log("Album: " + data.tracks.items[0].album.name + "\r\n");
        // Line Break
        console.log("-----------------------------------");
      }
    }
  );
};
        // append text in log.txt file
         var logSong = "======Begin Spotify Log Entry======" + "\nArtist: " + data.tracks.items[0].album.artist.name + "\r\n";
         fs.appendFile("log.txt", logSong, function (err){
                 if (err) throw err;
         });
// 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

// function for BandsInTown API

function getBandsInTown(artist) {
       
var bandQueryURL = "https://rest.bandsintown.com/artist/" + artist + "/events?app_id=codingbootcamp";
var artist  = userSearch;
// console.log("songName if not a song name: " + songName);
        axios.get(bandQueryURL).then(
        function (response) {
        var jsonData = response.data;

        if (!jsonData.length) {
                console.log("No results found for " + artist);
                return;
        }
        // return venue
        console.log("Name of the venue: " + response.data[0].venue.name + "\r\n");
        // return city      
        console.log("Venue location: " + response.data[0].venue.city + "\r\n");
        // return date
        console.log("Date of event: " + moment(response.data[0].datetime).format("MM-DD-YYYY") + "\r\n");
        // append txt to log.txt
        var logConcert = "======Begin BandsInTown Log Entry======" + "\nArtist: " + data.tracks.items[0].album.artist.name + "\r\n";
        fs.appendFile("log.txt", logConcert, function (err){
                if (err) throw err;
        });
   });
};
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// Function for running a Movie Search
var getOMDB = function(movieName) {
        if (movieName === undefined) {
          movieName = "Mr. Nobody";
        }
      
        var urlHit = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";
      
        axios.get(urlHit).then(
          function(response) {
            var jsonData = response.data;
      
            console.log("Title: " + jsonData.Title);
            console.log("Year: " + jsonData.Year);
            console.log("Rated: " + jsonData.Rated);
            console.log("IMDB Rating: " + jsonData.imdbRating);
            console.log("Country: " + jsonData.Country);
            console.log("Language: " + jsonData.Language);
            console.log("Plot: " + jsonData.Plot);
            console.log("Actors: " + jsonData.Actors);
            console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
          }
        );
      };
      

// arguments entered by user //
var appCommand = process.argv[2];
// console.log("appCommand");

// Slice Method//
var userSearch = process.argv.slice(3).join(" ");
// console.log("search: "+ search);

// Switch Statement for executing proper command based off user search input.//
function liriRun(appCommand, userSearch) {
    
        switch (appCommand) {
            
            case "spotify-this-song":
                    getSpotify(userSearch);
                    break;
            
            case "movie-this":
                    getOMDB(userSearch);
                    break;
             
            case "concert-this":
                    getBandsInTown(userSearch);
                    break;

            case "do-what-it-says":
                    getRandom();
                    break;
            
            default:
                console.log("Please enter an executable command");
        } 
    };
   

            

