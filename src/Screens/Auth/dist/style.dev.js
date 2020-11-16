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
    marginVertical: 15
  },
  fomrs: {
    minHeight: _Libraries.Dimensions.get('window').height - 15 * 27,
    justifyContent: 'space-between'
  }
});

var _default = style;
exports["default"] = _default;