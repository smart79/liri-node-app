// .env to make keys not visible//
require("dotenv").config();
// acessing project keys and creating variables for the required packages//
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var fs = require("fs");
var moment = require("moment")
// arguments entered by user //
var appCommand = process.argv[2];
// console.log("appCommand");

// Slice Method//
var search = process.argv.slice(3).join(" ");
// console.log("search: "+ search);

// Switch Statement for executing proper command based off user search input.//
