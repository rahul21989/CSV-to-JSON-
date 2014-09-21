module.exports = function(app) {
	var routesDirPath = './routes/';
	app.get('/sample/', require(routesDirPath + 'index').index);
};