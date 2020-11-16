"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Libraries = require("Libraries");

var _Assets = require("Assets");

var style = _Libraries.StyleSheet.create({
  container: {
    width: _Libraries.Dimensions.get('window').width - 30,
    backgroundColor: _Assets.color.light,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 7.5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 10,
    elevation: 10,
    flexWrap: "wrap"
  },
  container4: {
    width: _Libraries.Dimensions.get('window').width - 30,
    backgroundColor: _Assets.color.primary,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 7.5,
    borderRadius: 10
  },
  container2: {
    width: _Libraries.Dimensions.get('window').width - 30,
    backgroundColor: _Assets.color.light,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 7.5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 10,
    elevation: 10
  },
  container3: {
    width: _Libraries.Dimensions.get('window').width / 2 - 30,
    backgroundColor: _Assets.color.primary,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 7.5,
    borderRadius: 10
  },
  img: {
    width: 50,
    height: 50
  },
  icons: {
    width: 25,
    height: 25,
    marginTop: 5
  },
  desc: {
    flex: 2,
    marginLeft: 15,
    textAlign: "left",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    color: _Assets.color.dark,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 16,
    color: _Assets.color.dark,
    fontWeight: 'bold'
  },
  subtitlelight: {
    fontSize: 24,
    color: _Assets.color.light,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 14,
    color: _Assets.color.dark,
    fontWeight: 'bold'
  },
  textPrimary: {
    color: _Assets.color.primary,
    fontWeight: 'bold'
  },
  helperText: {
    opacity: 0.5
  },
  helperTextlight: {
    fontSize: 14,
    opacity: 0.5,
    color: _Assets.color.light
  },
  helperTextPadding: {
    marginHorizontal: 13
  },
  descRight: {
    fontWeight: 'bold',
    marginTop: 15
  },
  descRight2: {
    marginTop: 8,
    color: _Assets.color.primary
  }
});

var _default = style;
exports["default"] = _default;