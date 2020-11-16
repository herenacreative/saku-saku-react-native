"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Assets = require("Assets");

var _Libraries = require("Libraries");

var style = _Libraries.StyleSheet.create({
  container: {
    minHeight: _Libraries.Dimensions.get('window').height + 20,
    backgroundColor: _Assets.color.default2
  },
  topNav: {
    justifyContent: 'center',
    paddingTop: 0,
    height: _Libraries.Dimensions.get('window').height / 6 - 10,
    backgroundColor: _Assets.color.primary,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15
  },
  between: {
    justifyContent: 'space-between',
    padding: 15,
    flexDirection: 'row'
  },
  subtitlePadding: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 15
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 10
  },
  icons: {
    alignSelf: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 28,
    fontFamily: 'JustAnotherHand-Regular',
    alignSelf: 'center',
    color: _Assets.color.primary
  },
  textLoading: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 30,
    color: _Assets.color.primary
  }
});

var _default = style;
exports["default"] = _default;