// .env to make keys not visible//
require("dotenv").config();
// acessing project keys and creating variables for the required packages//
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var fs = require("fs");
var moment = require("moment");
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
   

    // Search function for spotify API
    function getSpotify(songName) {
    // id and secret for var spotify
        var spotify  = new Spotify(keys.spotify);
    // console.log("songName if not a song name: " + songName);
     if (!songName) {
        songName = "heart-shaped box";
     };

    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if(err) {
            return console.log('Error Occurred: '+ err);
        }

        //console.log("Data for song search: " + data.tracks.items[0]);
        // adding a line break for clarity of when search results begin
        


    }

    




