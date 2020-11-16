"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.patchUser = exports.getIdUsers = exports.getAllUsers = void 0;

var _Libraries = require("Libraries");

var _index = _interopRequireDefault(require("../../Configs/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllUsers = function getAllUsers(token, search, page) {
  return {
    type: "GET_USER_ALL",
    payload: (0, _Libraries.axios)({
      method: 'GET',
      url: "".concat(_index["default"].baseURL, "/users/"),
      params: {
        search: search,
        page: page,
        limit: 15
      },
      headers: {
        Authorization: token
      }
    })
  };
};

exports.getAllUsers = getAllUsers;

var getIdUsers = function getIdUsers(token, id) {
  return {
    type: "GET_USER_ID",
    payload: (0, _Libraries.axios)({
      method: 'GET',
      url: "".concat(_index["default"].baseURL, "/users/").concat(id),
      headers: {
        Authorization: token
      }
    })
  };
};

exports.getIdUsers = getIdUsers;

var patchUser = function patchUser(id, formData, token) {
  return {
    type: "PATCH_USER",
    payload: (0, _Libraries.axios)({
      method: 'PATCH',
      url: "".concat(_index["default"].baseURL, "/users/").concat(id),
      data: formData,
      headers: {
        // Accept: 'application/json',
        // 'Content-Type': 'multipart/form-data',
        Authorization: token
      }
    })
  };
};

exports.patchUser = patchUser;

var deleteUser = function deleteUser(token, id) {
  return {
    type: "DELETE_USER",
    payload: (0, _Libraries.axios)({
      method: 'DELETE',
      url: "".concat(_index["default"].baseURL, "/users/").concat(id),
      headers: {
        Authorization: token
      }
    })
  };
};

exports.deleteUser = deleteUser;