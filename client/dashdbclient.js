/**
 * REST API Client for State Management Engine
 */

var restClient = require('/client/restclient');

module.exports = function() {
	var base_uri = 'https://awh-yp-small03.services.dal.bluemix.net:8443/dashdb-api/rscript';
	var username = 'x-tuhin-x';
	var password = 'xx-tuhin-xx';

	var rClient = restClient(username, password);

	var prototype = {};

	prototype.post = function(path, request, callback) {
		var url = base_uri + path;
		rClient.post(url, request, callback);
	}
	
	return prototype;
}
