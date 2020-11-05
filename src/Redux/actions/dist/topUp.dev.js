"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTopUp = exports.patchTopUp = exports.postTopUp = exports.getIdTopUp = exports.getAllTopUp = void 0;

var _Libraries = require("Libraries");

var _index = _interopRequireDefault(require("../../Configs/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllTopUp = function getAllTopUp(token) {
  return {
    type: "GET_ALL_TOP_UP",
    payload: (0, _Libraries.axios)({
      method: 'GET',
      url: "".concat(_index["default"].baseURL, "/top-up"),
      headers: {
        Authorization: token
      }
    })
  };
};

exports.getAllTopUp = getAllTopUp;

var getIdTopUp = function getIdTopUp(token, id) {
  return {
    type: "GET_ID_TOP_UP",
    payload: (0, _Libraries.axios)({
      method: 'GET',
      url: "".concat(_index["default"].baseURL, "/top-up/").concat(id),
      headers: {
        Authorization: token
      }
    })
  };
};

exports.getIdTopUp = getIdTopUp;

var postTopUp = function postTopUp(token, data) {
  return {
    type: "POST_TOP_UP",
    payload: (0, _Libraries.axios)({
      method: 'POST',
      url: "".concat(_index["default"].baseURL, "/top-up"),
      data: data,
      headers: {
        Authorization: token
      }
    })
  };
};

exports.postTopUp = postTopUp;

var patchTopUp = function patchTopUp(token, id, data) {
  return {
    type: "PATCH_TOP_UP",
    payload: (0, _Libraries.axios)({
      method: 'PATCH',
      url: "".concat(_index["default"].baseURL, "/top-up/").concat(id),
      data: data,
      headers: {
        Authorization: token
      }
    })
  };
};

exports.patchTopUp = patchTopUp;

var deleteTopUp = function deleteTopUp(token, id) {
  return {
    type: "DELETE_TOP_UP",
    payload: (0, _Libraries.axios)({
      method: 'DELETE',
      url: "".concat(_index["default"].baseURL, "/top-up/").concat(id),
      headers: {
        Authorization: token
      }
    })
  };
};

exports.deleteTopUp = deleteTopUp;