console.log('this is loaded');

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

exports.ombd = {
    api_key: process.env.OMDB_API

};

exports.bandsInTown_API = {

    api_key: process.env.bandsInTown_API
};