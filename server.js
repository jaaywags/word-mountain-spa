var liveServer = require("live-server");

var params = {
	port: 3000,
	host: "localhost",
	root: "./src", // Set root directory that's being served. Defaults to cwd.
	open: true, // When false, it won't load your browser by default.
	ignore: '', // comma-separated string for paths to ignore
	file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
	wait: 0, // Waits for all changes, before reloading. Defaults to 0 sec.
	mount: [['./src', './node_modules']], // Mount a directory to a route.
	logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
	middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
liveServer.start(params);