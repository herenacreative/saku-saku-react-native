"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  React: true,
  useState: true,
  useEffect: true,
  Text: true,
  View: true,
  StyleSheet: true,
  TextInput: true,
  Button: true,
  Image: true,
  Dimensions: true,
  TouchableOpacity: true,
  SafeAreaView: true,
  ScrollView: true,
  NavigationContainer: true,
  useNavigation: true,
  applyMiddleware: true,
  createStore: true,
  combineReducers: true,
  createDrawerNavigator: true,
  AsyncStorage: true,
  createStackNavigator: true,
  Animatable: true,
  LinearGradient: true,
  Ionicons: true,
  SplashScreen: true,
  logger: true,
  thunk: true,
  moment: true,
  axios: true
};
Object.defineProperty(exports, "React", {
  enumerable: true,
  get: function get() {
    return _react["default"];
  }
});
Object.defineProperty(exports, "useState", {
  enumerable: true,
  get: function get() {
    return _react.useState;
  }
});
Object.defineProperty(exports, "useEffect", {
  enumerable: true,
  get: function get() {
    return _react.useEffect;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function get() {
    return _reactNative.Text;
  }
});
Object.defineProperty(exports, "View", {
  enumerable: true,
  get: function get() {
    return _reactNative.View;
  }
});
Object.defineProperty(exports, "StyleSheet", {
  enumerable: true,
  get: function get() {
    return _reactNative.StyleSheet;
  }
});
Object.defineProperty(exports, "TextInput", {
  enumerable: true,
  get: function get() {
    return _reactNative.TextInput;
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _reactNative.Button;
  }
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function get() {
    return _reactNative.Image;
  }
});
Object.defineProperty(exports, "Dimensions", {
  enumerable: true,
  get: function get() {
    return _reactNative.Dimensions;
  }
});
Object.defineProperty(exports, "TouchableOpacity", {
  enumerable: true,
  get: function get() {
    return _reactNative.TouchableOpacity;
  }
});
Object.defineProperty(exports, "SafeAreaView", {
  enumerable: true,
  get: function get() {
    return _reactNative.SafeAreaView;
  }
});
Object.defineProperty(exports, "ScrollView", {
  enumerable: true,
  get: function get() {
    return _reactNative.ScrollView;
  }
});
Object.defineProperty(exports, "NavigationContainer", {
  enumerable: true,
  get: function get() {
    return _native.NavigationContainer;
  }
});
Object.defineProperty(exports, "useNavigation", {
  enumerable: true,
  get: function get() {
    return _native.useNavigation;
  }
});
Object.defineProperty(exports, "applyMiddleware", {
  enumerable: true,
  get: function get() {
    return _redux.applyMiddleware;
  }
});
Object.defineProperty(exports, "createStore", {
  enumerable: true,
  get: function get() {
    return _redux.createStore;
  }
});
Object.defineProperty(exports, "combineReducers", {
  enumerable: true,
  get: function get() {
    return _redux.combineReducers;
  }
});
Object.defineProperty(exports, "createDrawerNavigator", {
  enumerable: true,
  get: function get() {
    return _drawer.createDrawerNavigator;
  }
});
Object.defineProperty(exports, "AsyncStorage", {
  enumerable: true,
  get: function get() {
    return _asyncStorage["default"];
  }
});
Object.defineProperty(exports, "createStackNavigator", {
  enumerable: true,
  get: function get() {
    return _stack.createStackNavigator;
  }
});
Object.defineProperty(exports, "LinearGradient", {
  enumerable: true,
  get: function get() {
    return _reactNativeLinearGradient["default"];
  }
});
Object.defineProperty(exports, "Ionicons", {
  enumerable: true,
  get: function get() {
    return _Ionicons["default"];
  }
});
Object.defineProperty(exports, "SplashScreen", {
  enumerable: true,
  get: function get() {
    return _reactNativeSplashScreen["default"];
  }
});
Object.defineProperty(exports, "logger", {
  enumerable: true,
  get: function get() {
    return _reduxLogger["default"];
  }
});
Object.defineProperty(exports, "thunk", {
  enumerable: true,
  get: function get() {
    return _reduxThunk["default"];
  }
});
Object.defineProperty(exports, "moment", {
  enumerable: true,
  get: function get() {
    return _moment["default"];
  }
});
Object.defineProperty(exports, "axios", {
  enumerable: true,
  get: function get() {
    return _axios["default"];
  }
});
exports.Animatable = void 0;

var _react = _interopRequireWildcard(require("react"));

Object.keys(_react).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _react[key];
    }
  });
});

var _reactNative = require("react-native");

Object.keys(_reactNative).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _reactNative[key];
    }
  });
});

var _native = require("@react-navigation/native");

var _redux = require("redux");

Object.keys(_redux).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _redux[key];
    }
  });
});

var _drawer = require("@react-navigation/drawer");

var _asyncStorage = _interopRequireDefault(require("@react-native-community/async-storage"));

var _stack = require("@react-navigation/stack");

var Animatable = _interopRequireWildcard(require("react-native-animatable"));

exports.Animatable = Animatable;

var _reactNativeLinearGradient = _interopRequireDefault(require("react-native-linear-gradient"));

var _Ionicons = _interopRequireDefault(require("react-native-vector-icons/Ionicons"));

var _reactNativeSplashScreen = _interopRequireDefault(require("react-native-splash-screen"));

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _moment = _interopRequireDefault(require("moment"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }