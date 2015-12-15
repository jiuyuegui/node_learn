var express = require('express'),
	app = express();

/*app.get('/', function(req, res) {
	res.send('Hello World');
});

var server = app.listen(8081, function() {
	var host = server.address().address;	//为什么这里面就可以使用server了？
	var port = server.address().port;
	console.log("应用实例，访问地址http://%s:%s", host, port);
});*/

app.use(express.static('public'));
app.get('/', function(req, res) {	//get请求
	console.log('主页get请求');
	res.send('hello get');
});

/*app.post('/', function(req, res) {	//post请求
	console.log('主页post请求');
	res.send('hello post');
});

app.delete('/del_user', function(req, res) {	//	/del_user 页面响应
	console.log('主页delete请求');
	res.send('删除页面');
});

app.get('/list_user', function(req, res) {	//  /list_user 页面 GET 请求
	console.log('/list_user get请求');
	res.send('用户列表页');
});

app.get('/ab*cd', function(req, res) {
	console.log('/ab*cd get请求');
	res.send('正则匹配');
});*/


var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('应用实例，访问地址http://%s:%s', host, port);
});