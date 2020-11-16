"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTransfer = exports.patchTransfer = exports.postTransfer = exports.getAdminTransfer = exports.getAllTransfer = void 0;

var _Libraries = require("Libraries");

var _index = _interopRequireDefault(require("../../Configs/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllTransfer = function getAllTransfer(token, id) {
  return {
    type: "GET_ALL_TRANSFER",
    payload: (0, _Libraries.axios)({
      method: 'GET',
      url: "".concat(_index["default"].baseURL, "/transfer/").concat(id),
      headers: {
        Authorization: token
      }
    })
  };
};

exports.getAllTransfer = getAllTransfer;

var getAdminTransfer = function getAdminTransfer(token) {
  return {
    type: "GET_ADMIN_TRANSEFR",
    payload: (0, _Libraries.axios)({
      method: 'GET',
      url: "".concat(_index["default"].baseURL, "/transfer"),
      headers: {
        Authorization: token
      }
    })
  };
};

exports.getAdminTransfer = getAdminTransfer;

var postTransfer = function postTransfer(token, data) {
  return {
    type: "POST_TRANSFER",
    payload: (0, _Libraries.axios)({
      method: 'POST',
      url: "".concat(_index["default"].baseURL, "/transfer"),
      data: data,
      headers: {
        Authorization: token
      }
    })
  };
};

exports.postTransfer = postTransfer;

var patchTransfer = function patchTransfer(token, id, data) {
  return {
    type: "PATCH_TRANSFER",
    payload: (0, _Libraries.axios)({
      method: 'PATCH',
      url: "".concat(_index["default"].baseURL, "/transfer/").concat(id),
      data: data,
      headers: {
        Authorization: token
      }
    })
  };
};

exports.patchTransfer = patchTransfer;

var deleteTransfer = function deleteTransfer(token, id) {
  return {
    type: "DELETE_TRANSFER",
    payload: (0, _Libraries.axios)({
      method: 'DELETE',
      url: "".concat(_index["default"].baseURL, "/transfer/").concat(id),
      headers: {
        Authorization: token
      }
    })
  };
};

exports.deleteTransfer = deleteTransfer;