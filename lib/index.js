if (process.arch == 'ia32') {
	module.exports = require('../windows/x86/printer');
}else{
	module.exports = require('../windows/x64/printer');
}