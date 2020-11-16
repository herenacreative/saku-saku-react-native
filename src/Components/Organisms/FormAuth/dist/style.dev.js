"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Libraries = require("Libraries");

var _Assets = require("Assets");

var style = _Libraries.StyleSheet.create({
  container: {
    minHeight: _Libraries.Dimensions.get('window').height + 20,
    backgroundColor: _Assets.color["default"],
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  head: {
    minHeight: _Libraries.Dimensions.get('window').height - 15 * 33,
    justifyContent: 'center',
    alignItems: 'center'
  },
  shadow: {
    shadowColor: _Assets.color.light,
    shadowOffset: {
      width: 0,
      height: 15
    },
    shadowRadius: 30.00,
    elevation: 25,
    paddingTop: 7,
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33
  },
  contents: {
    backgroundColor: _Assets.color.light,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    minHeight: _Libraries.Dimensions.get('window').height - 15 * 12,
    padding: 15,
    paddingBottom: 0,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  content: {
    alignItems: 'center'
  },
  forms: {
    width: _Libraries.Dimensions.get('window').width - 30
  },
  //typography
  headline2: {
    fontSize: 32,
    color: _Assets.color.primary,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 24,
    color: _Assets.color.dark,
    fontWeight: 'bold',
    marginTop: 25
  },
  desc: {
    fontSize: 16,
    opacity: 0.5,
    marginTop: 15,
    textAlign: 'center'
  },
  text: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 16
  },
  textPrimary: {
    color: _Assets.color.primary
  }
});

var _default = style;
exports["default"] = _default;