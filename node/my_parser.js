//加载内置文件fs模块
var fs = require('fs');

//将日志内容读到内存中；使用内置fs文件模块能很方便的进行文件的输入输出操作
//readFile方法以文件路径和回调函数为参数，该回调函数在完成文件的读取后调用

//nodejs的典型模式是异步回调，且node是单线程的
fs.readFile('example_log.txt', function(err, logData) {

	if(err) throw err;

	var text = logData.toString();
	var results = {};
	var lines = text.split('\n');

	lines.forEach(function(line) {
	    var parts = line.split(' ');
	    var letter = parts[1];
	    var count = parseInt(parts[2]);

	    if(!results[letter]) {
		     results[letter] = 0;
		}

	    results[letter] += parseInt(count);
	});

  	console.log(results);
});





