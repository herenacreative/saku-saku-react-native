"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _Libraries=require("Libraries");var _Components=require("Components");var _style=_interopRequireDefault(require("./style"));var _Assets=require("Assets");var _this=void 0,_jsxFileName="/home/herena/HC-program fix/arkademy program/SAKU SAKU/src/Screens/Home/index.js";var Home=function Home(props){var navigation=(0,_Libraries.useNavigation)();(0,_Libraries.useEffect)(function(){console.log('props:',props);},[]);return _Libraries.React.createElement(_Libraries.ScrollView,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:14,columnNumber:5}},_Libraries.React.createElement(_Libraries.View,{style:_style["default"].container,__self:_this,__source:{fileName:_jsxFileName,lineNumber:15,columnNumber:5}},_Libraries.React.createElement(_Libraries.StatusBar,{backgroundColor:_Assets.color.primary,barStyle:"light-content",__self:_this,__source:{fileName:_jsxFileName,lineNumber:16,columnNumber:7}}),_Libraries.React.createElement(_Libraries.View,{style:_style["default"].topNav,__self:_this,__source:{fileName:_jsxFileName,lineNumber:17,columnNumber:9}},_Libraries.React.createElement(_Components.CardPhotoTextPrimary,{name:_Libraries.React.createElement(_Libraries.Text,{onPress:function onPress(){return navigation.navigate('Profile');},__self:_this,__source:{fileName:_jsxFileName,lineNumber:20,columnNumber:9}},props.auth.data.fullname),detail:props.auth.data.phone,count:_Libraries.React.createElement(_Libraries.Ionicons,{name:"notifications-outline",onPress:function onPress(){return navigation.navigate('Notif');},size:30,color:_Assets.color.light,__self:_this,__source:{fileName:_jsxFileName,lineNumber:22,columnNumber:20}}),__self:_this,__source:{fileName:_jsxFileName,lineNumber:18,columnNumber:11}})),_Libraries.React.createElement(_Libraries.View,{style:_style["default"].between,__self:_this,__source:{fileName:_jsxFileName,lineNumber:26,columnNumber:9}},_Libraries.React.createElement(_Components.Button,{title:"Transfer",style:"primary",onPress:function onPress(){return navigation.navigate('Search');},type:"primary",__self:_this,__source:{fileName:_jsxFileName,lineNumber:27,columnNumber:11}}),_Libraries.React.createElement(_Components.Button,{title:"Top Up",style:"primary",type:"primary",onPress:function onPress(){return navigation.navigate('TopUp');},__self:_this,__source:{fileName:_jsxFileName,lineNumber:33,columnNumber:11}})),_Libraries.React.createElement(_Libraries.Text,{style:_style["default"].subtitlePadding,__self:_this,__source:{fileName:_jsxFileName,lineNumber:40,columnNumber:9}},"Transaction History"),props.transfer.data.map(function(item){return _Libraries.React.createElement(_Components.CardPhotoText,{name:item.receiver_id,detail:item.amount,count:item.balance,__self:_this,__source:{fileName:_jsxFileName,lineNumber:44,columnNumber:11}});})));};var mapStateToProps=function mapStateToProps(state){return{auth:state.auth,transfer:state.transfer};};var _default=(0,_Libraries.connect)(mapStateToProps)(Home);exports["default"]=_default;