/**
 * Console.log shim
 *
 * Allows newer console API to be used in older browsers without erroring
 */

;(function (window) {
	if (!window.console) {
		console = {};
	}

	var funcs = 'assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn'.split(',');
	var stub = function () { };

	for (var i = 0; i < funcs.length; i++) {
		if (!console[funcs[i]]) {
			console[funcs[i]] = stub;
		}
	}
})(window);
