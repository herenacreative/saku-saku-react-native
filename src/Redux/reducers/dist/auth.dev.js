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
  errorMsg: '',
  data: [],
  successMsg: '',
  isLogin: false
};

var auth = function auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOGIN_PENDING':
      return _objectSpread({}, state, {
        isLoading: true,
        isError: false
      });

    case 'LOGIN_REJECTED':
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected'
      });

    case 'LOGIN_FULFILLED':
      return _objectSpread({}, state, {
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        isLogin: true
      });

    case 'LOGOUT':
      return _objectSpread({}, state, {
        isLoading: false,
        isError: false,
        isLogin: false,
        errorMsg: '',
        data: {},
        _persist: {
          version: -1,
          rehydrated: true
        }
      });

    case 'REGISTER_PENDING':
      return _objectSpread({}, state, {
        isLoading: true,
        isError: false
      });

    case 'REGISTER_REJECTED':
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected'
      });

    case 'REGISTER_FULFILLED':
      return _objectSpread({}, state, {
        isLoading: false,
        isError: false,
        data: action.payload.data.data
      });

    case 'REQUEST_PASSWORD_PENDING':
      return _objectSpread({}, state, {
        isLoading: true,
        isError: false
      });

    case 'REQUEST_PASSWORD_REJECTED':
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected'
      });

    case 'REQUEST_PASSWORD_FULFILLED':
      return _objectSpread({}, state, {
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        isLogin: true
      });

    case 'CONFIRM_PASSWORD_PENDING':
      return _objectSpread({}, state, {
        isLoading: true,
        isError: false
      });

    case 'CONFIRM_PASSWORD_REJECTED':
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected'
      });

    case 'CONFIRM_PASSWORD_FULFILLED':
      return _objectSpread({}, state, {
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        isLogin: true
      });

    case 'REQUEST_PASSWORD_PENDING':
      return _objectSpread({}, state, {
        isLoading: true,
        isError: false
      });

    case 'REQUEST_PASSWORD_REJECTED':
      console.log('object', action.payload.data);
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected'
      });

    case 'REQUEST_PASSWORD_FULFILLED':
      console.log('object', action.payload.data);
      return _objectSpread({}, state, {
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        isLogin: true
      });

    case 'RESET_PASSWORD_PENDING':
      return _objectSpread({}, state, {
        isLoading: true,
        isError: false
      });

    case 'RESET_PASSWORD_REJECTED':
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected'
      });

    case 'RESET_PASSWORD_FULFILLED':
      return _objectSpread({}, state, {
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        isLogin: true
      });

    default:
      return state;
  }
};

var _default = auth;
exports["default"] = _default;