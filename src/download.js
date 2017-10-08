var zip = require('./zip');
var saveAs = require("file-saver").saveAs;

module.exports = function(gj, options) {
    zip(gj, options).then(function(blob) {
        var fileName = options.fileName ? options.fileName : 'Zones';
        saveAs(blob, fileName + '.zip');
    });
};
