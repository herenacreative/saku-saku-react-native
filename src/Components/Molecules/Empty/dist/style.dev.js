"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Assets = require("Assets");

var _Libraries = require("Libraries");

var style = _Libraries.StyleSheet.create({
  icons: {
    alignSelf: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 28,
    fontFamily: 'JustAnotherHand-Regular',
    alignSelf: 'center',
    color: _Assets.color.primary
  }
});

var _default = style;
exports["default"] = _default;