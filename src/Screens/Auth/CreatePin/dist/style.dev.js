"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Libraries = require("Libraries");

var style = _Libraries.StyleSheet.create({
  text: {
    textAlign: 'right',
    marginTop: 15
  },
  fomrs: {
    minHeight: _Libraries.Dimensions.get('window').height - 14.5 * 29,
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