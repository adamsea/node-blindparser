const fs = require('fs');
var parseString = require('xml2js').parseString;


let atomFeed;
let mrssFeed;
let rssV1Feed;
let rssV2Feed;

fs.readFile(__dirname + '/atomFeed.xml', function(err, data) {


	atomFeed = parseString(data);
	console.log(JSON.stringify(atomFeed) + '=============================================================')
});
fs.readFile(__dirname + '/mrssFeed.xml', function(err, data) {
    mrssFeed = parseString(data);
});
fs.readFile(__dirname + '/rssV1Feed.xml', function(err, data) {
    rssV1Feed = parseString(data);
});
fs.readFile(__dirname + '/rssV2Feed.xml', function(err, data) {
    rssV2Feed = parseString(data);
});
module.exports = {
    atomFeed,
	mrssFeed,
	rssV1Feed,
	rssV2Feed
}
