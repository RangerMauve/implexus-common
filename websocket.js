var websocket = require('websocket-stream');

module.exports = function(node,cb){
	var url = node.url||"";
	var socket = websocket(url);

	cb(null,socket);

	function destroy(){
		socket.close();
	}
}
