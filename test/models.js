/**
 * 所有模型的测试
 * @type {should|exports}
 */
var should = require('should');
var assert = require('assert');
var User = require('../models/user');
require('../models/db'); // 连接到数据库

describe('User', function () {
  describe('checkLogin', function () {
    var userTest = new User({
      phoneNumber: '18012345678',
      email: 'test@example.com',
      password: '123456',
      userType: 1,
      registrationDate: new Date(),
      nickname: 'Nick'
    });

    beforeEach(function (done) {
      userTest.save(done);
    });

    afterEach(function (done) {
      userTest.remove(done);
    });

    it('成功登录', function(done) {
      User.checkLogin('18012345678', '123456', function(err, user) {
        if (err) done(err);
        if (!user) done(new Error("未能写入数据库"));
        'test@example.com'.should.equal(user.email);
        done();
      });
    });

    it('密码错误', function(done) {
      User.checkLogin('18012345678', '12345', function(err, user) {
        if (err) done(err);
        assert(user === null);
        done();
      });
    });

    it('用户名错误', function(done) {
      User.checkLogin('1801234567', 'X', function(err, user) {
        if (err) done(err);
        assert(user === null);
        done();
      });
    });

  });
});