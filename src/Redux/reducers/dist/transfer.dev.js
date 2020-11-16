"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  isLoading: false,
  isError: false,
  errorMsg: "",
  data: []
};

var transfer = function transfer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "GET_ALL_TRANSFER_PENDING":
      return _objectSpread({}, state, {
        isLoading: true,
        isError: false
      });

    case "GET_ALL_TRANSFER_REJECTED":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      });

    case "GET_ALL_TRANSFER_FULFILLED":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: false,
        data: action.payload.data.data
      });

    case "GET_ADMIN_TRANSFER_PENDING":
      return _objectSpread({}, state, {
        isLoading: true,
        isError: false
      });

    case "GET_ADMIN_TRANSFER_REJECTED":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      });

    case "GET_ADMIN_TRANSFER_FULFILLED":
      console.log(action.payload.data, 'kook');
      return _objectSpread({}, state, {
        isLoading: false,
        isError: false,
        data: action.payload.data.data
      });

    case "POST_TRANSFER_PENDING":
      return _objectSpread({}, state, {
        isLoading: true,
        isError: false
      });

    case "POST_TRANSFER_REJECTED":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      });

    case "POST_TRANSFER_FULFILLED":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: false,
        data: action.payload.data.data
      });

    case "PATCH_TRANSFER_PENDING":
      return _objectSpread({}, state, {
        isLoading: true,
        isError: false
      });

    case "PATCH_TRANSFER_REJECTED":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      });

    case "PATCH_TRANSFER_FULFILLED":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: false,
        data: action.payload.data.data
      });

    case "DELETE_TRANSFER_PENDING":
      return _objectSpread({}, state, {
        isLoading: true,
        isError: false
      });

    case "DELETE_TRANSFER_REJECTED":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      });

    case "DELETE_TRANSFER_FULFILLED":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: false,
        data: action.payload.data.data
      });

    default:
      return state;
  }
};

var _default = transfer;
exports["default"] = _default;