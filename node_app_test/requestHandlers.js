// var exec = require('child_process').exec;	//注意内建的模块和文件夹内自定义的模块引用方式之间的区别
var querystring = require('querystring'),
	fs = require('fs'),
	formidable = require('formidable');

function start(response) {
	console.log('request handler "start" was called.');

	var body = '<html><head><meta http-equiv="Content-Type" content="text/html; charset="UFT-8 /></head>' +
	  '<body><form action="/upload" enctype="multipart/form-data" method="post">' +
      '<input type="file" name="upload" multiple="multiple"><br>' +
      '<input type="submit" name="Upload">' +
      '</form></body></html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}

function upload(response, request) {
	console.log('request handler "upload" was called');

	var form = new formidable.IncomingForm();
	console.log('about to parse');
	form.parse(request, function(err, fields, files) {
		console.log('parsing done');
		// fs.renameSync(files.upload.path, 'test.png');
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write('received images:<br/>');
		response.write('<img src="/show" />');
		response.end();
	});
}

function show(response) {
	console.log("request handler 'show' was called");
	fs.readFile("C:/Users/Administrator/AppData/Local/Temp/test.png", "binary", function(err, file) {
		if(err) {
			response.writeHead(500, {"Content-Type": "text/plain"});
			response.write(err + "\n");
			response.end();
		} else {
			response.writeHead(200, {"Content-Type": "image/png"});
			response.write(file, "binary");
			response.end();
		}
	});
}

exports.start = start;
exports.upload = upload;
exports.show = show;