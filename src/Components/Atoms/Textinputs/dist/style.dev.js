"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Libraries = require("Libraries");

var style = _Libraries.StyleSheet.create({
  action: {
    width: _Libraries.Dimensions.get('window').width - 30,
    flexDirection: 'row',
    marginTop: 20,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    alignSelf: 'center'
  },
  textInput1: {
    width: _Libraries.Dimensions.get('window').width - 30,
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    fontSize: 16
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14
  },
  icons: {
    marginTop: 10
  }
});

var _default = style;
exports["default"] = _default;