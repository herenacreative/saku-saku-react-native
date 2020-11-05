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

var topUp = function topUp() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "GET_ALL_TOP_UP_PENDING":
      return _objectSpread({}, state, {
        isLoading: true,
        isError: false
      });

    case "GET_ALL_TOP_UP_REJECTED":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      });

    case "GET_ALL_TOP_UP_FULFILLED":
      console.log(action.payload.data, 'pau');
      return _objectSpread({}, state, {
        isLoading: false,
        isError: false,
        data: action.payload.data.data
      });

    case "GET_ID_TOP_UP_PENDING":
      return _objectSpread({}, state, {
        isLoading: true,
        isError: false
      });

    case "GET_ID_TOP_UP_REJECTED":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      });

    case "GET_ID_TOP_UP_FULFILLED":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: false,
        data: action.payload.data.data.results
      });

    case "POST_TOP_UP_PENDING":
      return _objectSpread({}, state, {
        isLoading: true,
        isError: false
      });

    case "POST_TOP_UP_REJECTED":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      });

    case "POST_TOP_UP_FULFILLED":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: false,
        data: action.payload.data.data.results
      });

    case "PATCH_TOP_UP_PENDING":
      return _objectSpread({}, state, {
        isLoading: true,
        isError: false
      });

    case "PATCH_TOP_UP_REJECTED":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      });

    case "PATCH_TOP_UP_FULFILLED":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: false,
        data: action.payload.data.data.results
      });

    case "DELETE_TOP_UP_PENDING":
      return _objectSpread({}, state, {
        isLoading: true,
        isError: false
      });

    case "DELETE_TOP_UP_REJECTED":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true,
        errorMsg: "Data rejected"
      });

    case "DELETE_TOP_UP_FULFILLED":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: false,
        data: action.payload.data.data.results
      });

    default:
      return state;
  }
};

var _default = topUp;
exports["default"] = _default;