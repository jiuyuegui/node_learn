var events = require('events');

var evtE = new events.EventEmitter();
evtE.on('someEvent', function(arg1, arg2) {
	console.log('listener2', arg1, arg2);
});

evtE.on('someEvent', function(arg1, arg2) {
	console.log('listener1', arg1, arg2);
});

evtE.once('someEvent', function (stream) {
  console.log('Ah, we have our first user!');
});

// evtE.listenerCount(evtE, 'someEvent');	自己不可以监听自己的长度
var count = require('events').EventEmitter.listenerCount(evtE, 'someEvent');
console.log(count+"个监听器监听事件someEvent");
evtE.emit('someEvent', 'arg1', 'arg2');

var count = require('events').EventEmitter.listenerCount(evtE, 'someEvent');
console.log(count+"个监听器监听事件someEvent");
//运行结果中可以看到两个事件监听器回调函数被先后调用

//addListener(event, listener);可为指定事件添加一个监听器到监听数组的尾部

//once(event, listener);为指定事件注册一个单次监听器，即执行一次后立即解除

//removeListener(event,listener);移除已注册的指定事件

//removeAllListeners(event);移除所有事件的所有监听器，或指定事件的所有监听器

//setMaxListeners(n);用于限制监听器的默认数量

//listeners(event);返回指定事件的监听器数组

//error();一个特殊的事件，被触发时若没有响应的监听器，Node.js会把它当作异常退出程序并输出错误信息；一般要设置监听器，避免程序崩溃
