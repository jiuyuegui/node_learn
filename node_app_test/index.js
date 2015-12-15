var server = require('./server'),
  	router = require('./router'),	
	requestHandlers = require('./requestHandlers');		//依赖注入

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;

server.start(router.route, handle);
