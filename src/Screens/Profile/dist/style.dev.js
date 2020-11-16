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
    padding: 15,
    backgroundColor: _Assets.color["default"]
  },
  container2: {
    minHeight: _Libraries.Dimensions.get('window').height - 20,
    backgroundColor: _Assets.color["default"]
  },
  container3: {
    minHeight: _Libraries.Dimensions.get('window').height,
    padding: 15,
    backgroundColor: _Assets.color.light
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 10
  },
  detail: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30
  },
  helperText: {
    opacity: 0.5,
    marginVertical: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16,
    opacity: 0.5,
    marginVertical: 10
  },
  textPadding: {
    fontSize: 16,
    opacity: 0.5,
    marginVertical: 30,
    marginHorizontal: 15,
    textAlign: 'center'
  },
  between: {
    margin: 15,
    justifyContent: 'space-between',
    height: _Libraries.Dimensions.get('window').height / 2 + 160
  },
  between2: {
    justifyContent: 'space-between',
    height: _Libraries.Dimensions.get('window').height / 2 + 200
  },
  btn: {
    margin: 15
  },
  action: {
    flexDirection: 'row',
    margin: 15,
    borderBottomColor: 'rgba(169, 169, 169, 0.6)',
    borderBottomWidth: 1
  },
  textInput1: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    fontSize: 16
  },
  icons: {
    marginTop: 10
  },
  //modal
  modalContainer: {
    width: _Libraries.Dimensions.get('window').width,
    height: _Libraries.Dimensions.get('window').height - 370,
    padding: 15,
    position: 'absolute',
    bottom: 0,
    backgroundColor: _Assets.color.darkblue,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },
  scrollTit: {
    width: 80,
    height: 6,
    margin: 15,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: _Assets.color.primary
  },
  modalFade: {
    width: _Libraries.Dimensions.get('window').width,
    height: _Libraries.Dimensions.get('window').height,
    backgroundColor: _Assets.color.dark,
    opacity: 0.6
  },
  textModal: {
    paddingVertical: 15,
    color: _Assets.color.primary,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'JustAnotherHand-Regular'
  },
  modalsCard: {
    width: _Libraries.Dimensions.get('window').width - 30,
    marginVertical: 30,
    // backgroundColor: color.light,
    borderRadius: 10
  },
  desc: {
    color: _Assets.color.primary,
    fontSize: 16,
    paddingTop: 10 // paddingHorizontal: 10,

  },
  search2: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // marginTop: 15,
    borderWidth: 1,
    backgroundColor: _Assets.color.light,
    borderRadius: 10,
    // paddingBottom: 10,
    borderColor: _Assets.color.light
  },
  textSearch2: {
    // marginHorizontal: 5,
    color: _Assets.color.darkblue,
    borderBottomColor: _Assets.color.primary,
    borderBottomWidth: 1,
    marginBottom: 10,
    backgroundColor: _Assets.color["default"],
    fontSize: 16,
    borderRadius: 10
  }
});

var _default = style;
exports["default"] = _default;