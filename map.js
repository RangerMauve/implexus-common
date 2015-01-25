var throughMap = require("through2-map");
var objMap = throughMap.obj;

module.exports = function(node, cb) {
	var map;
	if (node.text) map = throughMap;
	else map = objMap;

	var source = node.code || "";
	if (source.indexOf("return") == -1)
		source = "return " + source;
	var fn = new Function("data", source);

	cb(null, map(fn));
}
