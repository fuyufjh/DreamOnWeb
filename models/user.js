/**
 * 用户模型
 */
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  phoneNumber: String,
  email: String,
  password: String,
  userType: Number,
  registrationDate: Date,
  nickname: String
});

var User = mongoose.model('User', userSchema);
module.exports = User;

/**
 * 检查登录，如果用户密码匹配返回一个user对象，否则返回null
 * @param phoneNumber
 * @param password
 * @param callback callback(err, user)
 */
User.checkLogin = function(phoneNumber, password, callback) {
  User.findOne({
    phoneNumber: phoneNumber,
    password: password
  }, function(err, result) {
    if (err) return callback(err);
    callback(null, result);
  });
};
