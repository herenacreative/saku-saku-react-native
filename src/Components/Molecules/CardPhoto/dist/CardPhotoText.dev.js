"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _Libraries=require("Libraries");var _style=_interopRequireDefault(require("./style"));var _this=void 0,_jsxFileName="/home/herena/HC-program fix/arkademy program/SAKU SAKU/src/Components/Molecules/CardPhoto/CardPhotoText.js";var CardPhotoText=function CardPhotoText(props){var name=props.name,detail=props.detail,count=props.count,onPress=props.onPress;return _Libraries.React.createElement(_Libraries.TouchableOpacity,{style:_style["default"].container,onPress:onPress,__self:_this,__source:{fileName:_jsxFileName,lineNumber:7,columnNumber:9}},_Libraries.React.createElement(_Libraries.Image,{style:_style["default"].img,source:{uri:'https://reactnative.dev/img/tiny_logo.png'},__self:_this,__source:{fileName:_jsxFileName,lineNumber:8,columnNumber:13}}),_Libraries.React.createElement(_Libraries.View,{style:_style["default"].desc,__self:_this,__source:{fileName:_jsxFileName,lineNumber:14,columnNumber:13}},_Libraries.React.createElement(_Libraries.Text,{style:_style["default"].subtitle,__self:_this,__source:{fileName:_jsxFileName,lineNumber:15,columnNumber:17}},name),_Libraries.React.createElement(_Libraries.Text,{style:_style["default"].helperText,__self:_this,__source:{fileName:_jsxFileName,lineNumber:16,columnNumber:17}},detail)),_Libraries.React.createElement(_Libraries.Text,{style:_style["default"].descRight,__self:_this,__source:{fileName:_jsxFileName,lineNumber:18,columnNumber:17}},count));};var _default=CardPhotoText;exports["default"]=_default;