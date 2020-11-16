"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Assets = require("Assets");

var _Libraries = require("Libraries");

var style = _Libraries.StyleSheet.create({
  button: {
    width: _Libraries.Dimensions.get('window').width - 30,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 15
  },
  buttonText: {
    fontSize: 16
  },
  button2: {
    width: _Libraries.Dimensions.get('window').width - 30,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 15,
    marginVertical: 5,
    backgroundColor: _Assets.color.grey
  },
  buttonText2: {
    fontSize: 16,
    color: _Assets.color.dark,
    fontWeight: 'bold'
  }
});

var _default = style;
exports["default"] = _default;