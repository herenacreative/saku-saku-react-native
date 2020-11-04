"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _Libraries=require("Libraries");var _Components=require("Components");var _style=_interopRequireDefault(require("./style"));var _actions=require("Redux/actions");var _this=void 0,_jsxFileName="/home/herena/HC-program fix/arkademy program/SAKU SAKU/src/Screens/Auth/index.js";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var Auth=function Auth(props){var navigation=(0,_Libraries.useNavigation)();var _React$useState=_Libraries.React.useState({email:'',password:''}),_React$useState2=(0,_slicedToArray2["default"])(_React$useState,2),data=_React$useState2[0],setData=_React$useState2[1];var onSubmit=function onSubmit(){props.login(data).then(function(res){console.log(res);props.navigation.navigate('Home');})["catch"](function(e){console.log(e.response);});};return _Libraries.React.createElement(_Libraries.View,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:22,columnNumber:5}},_Libraries.React.createElement(_Components.FormAuth,{title:"Login",desc:"Login to your existing account to access all the features in Zwallet.",footer:"Don\u2019t have an account? ",linkfooter:"Let\u2019s Sign Up",link:"SignUp",content:_Libraries.React.createElement(_Libraries.View,{style:_style["default"].fomrs,__self:_this,__source:{fileName:_jsxFileName,lineNumber:30,columnNumber:11}},_Libraries.React.createElement(_Libraries.View,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:31,columnNumber:13}},_Libraries.React.createElement(_Components.InputEmail,{onChangeText:function onChangeText(val){return setData(_objectSpread({},data,{email:val}));},value:data.email,__self:_this,__source:{fileName:_jsxFileName,lineNumber:32,columnNumber:15}}),_Libraries.React.createElement(_Components.InputPassword,{onChangeText:function onChangeText(val){return setData(_objectSpread({},data,{password:val}));},value:data.password,__self:_this,__source:{fileName:_jsxFileName,lineNumber:36,columnNumber:15}}),_Libraries.React.createElement(_Libraries.TouchableOpacity,{onPress:function onPress(){return navigation.navigate('ForgotPassword');},__self:_this,__source:{fileName:_jsxFileName,lineNumber:40,columnNumber:15}},_Libraries.React.createElement(_Libraries.Text,{style:_style["default"].text,__self:_this,__source:{fileName:_jsxFileName,lineNumber:41,columnNumber:17}},"Forgot password ?"))),_Libraries.React.createElement(_Components.Button,{title:"Login",style:"primary",type:"fullwidth",onPress:onSubmit,__self:_this,__source:{fileName:_jsxFileName,lineNumber:46,columnNumber:13}})),__self:_this,__source:{fileName:_jsxFileName,lineNumber:23,columnNumber:7}}));};var mapStateToProps=function mapStateToProps(state){return{auth:state.auth};};var mapDispatchToProps={login:_actions.login};var _default=(0,_Libraries.connect)(mapStateToProps,mapDispatchToProps)(Auth);exports["default"]=_default;