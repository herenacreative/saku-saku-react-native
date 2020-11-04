"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _react=_interopRequireDefault(require("react"));var _reactNativeSvgCharts=require("react-native-svg-charts");var _jsxFileName="/home/herena/HC-program fix/arkademy program/SAKU SAKU/src/Components/Organisms/Charts/index.js";var colors=['#33691E','#689F38','#9CCC65','#DCEDC8'];var data=[{broccoli:{value:3840,svg:{onPress:function onPress(){return console.log('onPress => 0:broccoli:3840');}}},celery:{value:1920,svg:{onPress:function onPress(){return console.log('onPress => 0:celery:1920');}}},onions:{value:960,svg:{onPress:function onPress(){return console.log('onPress => 0:onions:960');}}},tomato:{value:400,svg:{onPress:function onPress(){return console.log('onPress => 0:tomato:400');}}}},{broccoli:{value:1600,svg:{onPress:function onPress(){return console.log('onPress => 1:broccoli:1600');}}},celery:{value:1440,svg:{onPress:function onPress(){return console.log('onPress => 1:celery:1440');}}},onions:{value:960,svg:{onPress:function onPress(){return console.log('onPress => 1:onions:960');}}},tomato:{value:400,svg:{onPress:function onPress(){return console.log('onPress => 1:tomato:400');}}}},{broccoli:{value:640,svg:{onPress:function onPress(){return console.log('onPress => 2:broccoli:640');}}},celery:{value:960,svg:{onPress:function onPress(){return console.log('onPress => 2:celery:960');}}},onions:{value:3640,svg:{onPress:function onPress(){return console.log('onPress => 2:onions:3640');}}},tomato:{value:400,svg:{onPress:function onPress(){return console.log('onPress => 2:tomato:400');}}}},{broccoli:{value:3320,svg:{onPress:function onPress(){return console.log('onPress => 3:broccoli:3320');}}},celery:{value:480,svg:{onPress:function onPress(){return console.log('onPress => 3:celery:480');}}},onions:{value:640,svg:{onPress:function onPress(){return console.log('onPress => 3:onions:640');}}},tomato:{value:400,svg:{onPress:function onPress(){return console.log('onPress => 3:tomato:400');}}}}];var keys=['broccoli','celery','onions','tomato'];var Charts=function(_React$PureComponent){(0,_inherits2["default"])(Charts,_React$PureComponent);function Charts(){(0,_classCallCheck2["default"])(this,Charts);return(0,_possibleConstructorReturn2["default"])(this,(0,_getPrototypeOf2["default"])(Charts).apply(this,arguments));}(0,_createClass2["default"])(Charts,[{key:"render",value:function render(){return _react["default"].createElement(_reactNativeSvgCharts.StackedBarChart,{style:{height:300},colors:colors,contentInset:{top:30,bottom:30},data:data,keys:keys,valueAccessor:function valueAccessor(_ref){var item=_ref.item,key=_ref.key;return item[key].value;},__self:this,__source:{fileName:_jsxFileName,lineNumber:117,columnNumber:13}},_react["default"].createElement(_reactNativeSvgCharts.Grid,{__self:this,__source:{fileName:_jsxFileName,lineNumber:125,columnNumber:17}}));}}]);return Charts;}(_react["default"].PureComponent);var _default=Charts;exports["default"]=_default;