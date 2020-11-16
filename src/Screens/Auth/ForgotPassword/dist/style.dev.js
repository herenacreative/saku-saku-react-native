"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Libraries = require("Libraries");

var _Assets = require("Assets");

var style = _Libraries.StyleSheet.create({
  text: {
    textAlign: 'right',
    marginTop: 15
  },
  fomrs: {
    minHeight: _Libraries.Dimensions.get('window').height - 15 * 29,
    justifyContent: 'space-between'
  },
  fomrs2: {
    minHeight: _Libraries.Dimensions.get('window').height - 15 * 26,
    justifyContent: 'space-between'
  },
  row: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 40
  }
});

var _default = style;
exports["default"] = _default;