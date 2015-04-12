/**
 * 数据库连接模块，多数情况下直接require即可而不需要用到返回值db
 */
var mongoose = require('mongoose');
var settings = require('../settings');

mongoose.connect(settings.mongodb.URL, {
  server: {poolSize: settings.mongodb.POOL_SIZE}
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.on('open', function() {
  console.log('MongoDB Connection Established.');
});

module.exports = db;