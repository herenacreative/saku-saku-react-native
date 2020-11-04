"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _Libraries=require("Libraries");var _style=_interopRequireDefault(require("./style"));var _Assets=require("Assets");var _Components=require("Components");var _actions=require("Redux/actions");var _this=void 0,_jsxFileName="/home/herena/HC-program fix/arkademy program/SAKU SAKU/src/Screens/Admin/Dashboard.js";var Dashboard=function Dashboard(props){var navigation=(0,_Libraries.useNavigation)();var onSubmit=function onSubmit(){return _regenerator["default"].async(function onSubmit$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _regenerator["default"].awrap(props.dispatch((0,_actions.logout)()));case 2:props.navigation.navigate('Auth');case 3:case"end":return _context.stop();}}});};return _Libraries.React.createElement(_Libraries.ScrollView,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:16,columnNumber:5}},_Libraries.React.createElement(_Libraries.View,{style:_style["default"].container1,__self:_this,__source:{fileName:_jsxFileName,lineNumber:18,columnNumber:7}},_Libraries.React.createElement(_Libraries.StatusBar,{backgroundColor:_Assets.color.darkblue,barStyle:"light-content",__self:_this,__source:{fileName:_jsxFileName,lineNumber:19,columnNumber:9}}),_Libraries.React.createElement(_Libraries.View,{style:_style["default"].topNav,__self:_this,__source:{fileName:_jsxFileName,lineNumber:20,columnNumber:9}},_Libraries.React.createElement(_Libraries.View,{style:_style["default"].row,__self:_this,__source:{fileName:_jsxFileName,lineNumber:21,columnNumber:11}},_Libraries.React.createElement(_Libraries.Text,{style:_style["default"].headline,__self:_this,__source:{fileName:_jsxFileName,lineNumber:22,columnNumber:11}},"Dashboard"),_Libraries.React.createElement(_Libraries.TouchableOpacity,{onPress:onSubmit,__self:_this,__source:{fileName:_jsxFileName,lineNumber:23,columnNumber:11}},_Libraries.React.createElement(_Libraries.Ionicons,{name:"log-out-outline",size:30,color:_Assets.color.light,__self:_this,__source:{fileName:_jsxFileName,lineNumber:26,columnNumber:13}})))),_Libraries.React.createElement(_Libraries.View,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:30,columnNumber:9}},_Libraries.React.createElement(_Libraries.View,{style:_style["default"].card,__self:_this,__source:{fileName:_jsxFileName,lineNumber:31,columnNumber:11}},_Libraries.React.createElement(_Libraries.Ionicons,{name:"people-outline",style:{marginTop:10},size:20,color:_Assets.color.darkblue,__self:_this,__source:{fileName:_jsxFileName,lineNumber:32,columnNumber:13}}),_Libraries.React.createElement(_Libraries.Text,{style:[_style["default"].helperText,{marginTop:13}],__self:_this,__source:{fileName:_jsxFileName,lineNumber:33,columnNumber:13}},"Total User"),_Libraries.React.createElement(_Libraries.Text,{style:_style["default"].title,__self:_this,__source:{fileName:_jsxFileName,lineNumber:34,columnNumber:13}},"120")),_Libraries.React.createElement(_Libraries.View,{style:_style["default"].card,__self:_this,__source:{fileName:_jsxFileName,lineNumber:36,columnNumber:11}},_Libraries.React.createElement(_Libraries.Ionicons,{name:"wallet-outline",style:{marginTop:10},size:20,color:_Assets.color.darkblue,__self:_this,__source:{fileName:_jsxFileName,lineNumber:37,columnNumber:13}}),_Libraries.React.createElement(_Libraries.Text,{style:[_style["default"].helperText,{marginTop:13}],__self:_this,__source:{fileName:_jsxFileName,lineNumber:38,columnNumber:13}},"Total Transaction"),_Libraries.React.createElement(_Libraries.Text,{style:_style["default"].title,__self:_this,__source:{fileName:_jsxFileName,lineNumber:39,columnNumber:13}},"120")),_Libraries.React.createElement(_Libraries.View,{style:_style["default"].card,__self:_this,__source:{fileName:_jsxFileName,lineNumber:41,columnNumber:11}},_Libraries.React.createElement(_Libraries.Ionicons,{name:"cash-outline",style:{marginTop:10},size:20,color:_Assets.color.darkblue,__self:_this,__source:{fileName:_jsxFileName,lineNumber:42,columnNumber:13}}),_Libraries.React.createElement(_Libraries.Text,{style:[_style["default"].helperText,{marginTop:13}],__self:_this,__source:{fileName:_jsxFileName,lineNumber:43,columnNumber:13}},"Total Balance")),_Libraries.React.createElement(_Libraries.Text,{style:[_style["default"].title,{marginLeft:15}],__self:_this,__source:{fileName:_jsxFileName,lineNumber:45,columnNumber:11}},"Rp.120.000.000"))));};var mapStateToProps=function mapStateToProps(state){return{auth:state.auth};};var _default=(0,_Libraries.connect)(mapStateToProps)(Dashboard);exports["default"]=_default;