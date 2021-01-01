"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPassword = exports.confirmPassword = exports.requestPassword = exports.register = exports.logout = exports.login = void 0;

var _Libraries = require("Libraries");

var _index = _interopRequireDefault(require("../../Configs/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var login = function login(data) {
  return {
    type: "LOGIN",
    payload: (0, _Libraries.axios)({
      method: 'POST',
      url: "".concat(_index["default"].baseURL, "/login"),
      data: {
        email: data.email,
        password: data.password
      }
    })
  };
};

exports.login = login;

var logout = function logout() {
  return {
    type: "LOGOUT"
  };
};

exports.logout = logout;

var register = function register(data) {
  return {
    type: "REGISTER",
    payload: (0, _Libraries.axios)({
      method: 'POST',
      url: "".concat(_index["default"].baseURL, "/sign-up"),
      data: {
        username: data.username,
        email: data.email,
        password: data.password
      }
    })
  };
};

exports.register = register;

var requestPassword = function requestPassword(data) {
  return {
    type: "REQUEST_PASSWORD",
    payload: (0, _Libraries.axios)({
      method: 'POST',
      url: "".concat(_index["default"].baseURL, "/auth/request/otp"),
      data: {
        email: data,
        requestType: 'resetPassword'
      }
    })
  };
};

exports.requestPassword = requestPassword;

var confirmPassword = function confirmPassword(data) {
  return {
    type: "CONFIRM_PASSWORD",
    payload: (0, _Libraries.axios)({
      method: 'POST',
      url: "".concat(_index["default"].baseURL, "/auth/confirm/otp"),
      data: {
        otp: data.otp
      }
    })
  };
};

exports.confirmPassword = confirmPassword;

var resetPassword = function resetPassword(data) {
  return {
    type: "RESET_PASSWORD",
    payload: (0, _Libraries.axios)({
      method: 'POST',
      url: "".concat(_index["default"].baseURL, "/auth/reset-password"),
      data: {
        email: data.email,
        password: data.password
      }
    })
  };
};

exports.resetPassword = resetPassword;