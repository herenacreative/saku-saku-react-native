"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Libraries = require("Libraries");

var _Assets = require("Assets");

var style = _Libraries.StyleSheet.create({
  container: {
    backgroundColor: _Assets.color.dark2,
    minHeight: _Libraries.Dimensions.get('window').height + 30
  },
  container1: {
    backgroundColor: _Assets.color["default"],
    minHeight: _Libraries.Dimensions.get('window').height + 30
  },
  container2: {
    width: _Libraries.Dimensions.get('window').width - 30,
    backgroundColor: _Assets.color.darkblue,
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
  textPrimary: {
    color: _Assets.color.light,
    fontWeight: 'bold'
  },
  helperText: {
    fontSize: 16,
    color: _Assets.color.darkblue,
    marginLeft: 10,
    flex: 3
  },
  helperTextPadding: {
    fontSize: 16,
    color: _Assets.color.light,
    marginLeft: 10,
    flex: 3
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    borderWidth: 1,
    backgroundColor: _Assets.color.light,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: _Assets.color.light
  },
  textSearch: {
    marginHorizontal: 10,
    color: _Assets.color.primary
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10
  },
  topNav: {
    backgroundColor: _Assets.color.darkblue,
    borderBottomRightRadius: 45,
    padding: 15
  },
  headline: {
    fontSize: 24,
    color: _Assets.color.light,
    fontFamily: 'NunitoSans-Bold'
  },
  //dashboard
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: _Assets.color.primary,
    fontFamily: 'JustAnotherHand-Regular'
  },
  card2: {
    marginTop: 15,
    height: _Libraries.Dimensions.get('window').height / 2 + 60,
    backgroundColor: _Assets.color.darkblue,
    flexDirection: 'row',
    borderTopRightRadius: 40,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 10,
    elevation: 10
  },
  card3: {
    flexDirection: 'row',
    marginVertical: 5
  },
  btnmargin: {
    marginHorizontal: 15,
    marginTop: 20
  },
  img: {
    width: '100%',
    height: 250,
    resizeMode: 'cover'
  },
  img2: {
    width: 50,
    height: 50
  },
  //modal
  modalContainer: {
    width: _Libraries.Dimensions.get('window').width,
    height: _Libraries.Dimensions.get('window').height - 330,
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