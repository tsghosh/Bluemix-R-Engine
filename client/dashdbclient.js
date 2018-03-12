/**
 * REST API Client for State Management Engine
 */

var restClient = global.local_require('/client/restclient');

var dashdbCreds = envUtils.getCredentials('dashDB');


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
