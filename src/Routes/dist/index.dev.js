"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;require("react-native-gesture-handler");var _Libraries=require("Libraries");var _Assets=require("Assets");var _Screens=require("Screens");var _this=void 0,_jsxFileName="/home/herena/HC-program fix/arkademy program/SAKU SAKU/src/Routes/index.js";var Stack=(0,_Libraries.createStackNavigator)();var Drawer=(0,_Libraries.createDrawerNavigator)();var Tab=(0,_Libraries.createBottomTabNavigator)();var Routes=function Routes(props){return _Libraries.React.createElement(_Libraries.NavigationContainer,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:48,columnNumber:5}},_Libraries.React.createElement(Stack.Navigator,{initialRouteName:"Auth",screenOptions:{headerTintColor:'white',headerStyle:{backgroundColor:_Assets.color.primary}},__self:_this,__source:{fileName:_jsxFileName,lineNumber:49,columnNumber:7}},props.auth.isLogin?_Libraries.React.createElement(_Libraries.React.Fragment,null,_Libraries.React.createElement(Stack.Screen,{name:"Dashboard",component:MyTabs,options:{headerShown:false},__self:_this,__source:{fileName:_jsxFileName,lineNumber:62,columnNumber:13}}),_Libraries.React.createElement(Stack.Screen,{name:"DetailUser",component:_Screens.DetailUser,options:{title:'Detail User'},__self:_this,__source:{fileName:_jsxFileName,lineNumber:69,columnNumber:13}}),_Libraries.React.createElement(Stack.Screen,{name:"DetailTransaction",component:_Screens.DetailTransaction,options:{title:'Detail Transaction'},__self:_this,__source:{fileName:_jsxFileName,lineNumber:76,columnNumber:13}}),props.auth.data.role===3?_Libraries.React.createElement(_Libraries.React.Fragment,null,_Libraries.React.createElement(Stack.Screen,{name:"Home",component:DrawerNavigator,options:{headerShown:false},__self:_this,__source:{fileName:_jsxFileName,lineNumber:85,columnNumber:17}}),_Libraries.React.createElement(Stack.Screen,{name:"History",component:_Screens.History,__self:_this,__source:{fileName:_jsxFileName,lineNumber:90,columnNumber:17}}),_Libraries.React.createElement(Stack.Screen,{name:"Search",component:_Screens.Search,options:{title:'Find Receiver'},__self:_this,__source:{fileName:_jsxFileName,lineNumber:94,columnNumber:17}}),_Libraries.React.createElement(Stack.Screen,{name:"Transfer",component:_Screens.Transfer,__self:_this,__source:{fileName:_jsxFileName,lineNumber:101,columnNumber:17}}),_Libraries.React.createElement(Stack.Screen,{name:"Confirmation",component:_Screens.Confirmation,__self:_this,__source:{fileName:_jsxFileName,lineNumber:105,columnNumber:17}}),_Libraries.React.createElement(Stack.Screen,{name:"Status",component:_Screens.Status,__self:_this,__source:{fileName:_jsxFileName,lineNumber:109,columnNumber:17}}),_Libraries.React.createElement(Stack.Screen,{name:"TopUp",component:_Screens.TopUp,__self:_this,__source:{fileName:_jsxFileName,lineNumber:113,columnNumber:17}}),_Libraries.React.createElement(Stack.Screen,{name:"Notif",component:_Screens.Notif,options:{title:'Notification'},__self:_this,__source:{fileName:_jsxFileName,lineNumber:117,columnNumber:17}}),_Libraries.React.createElement(Stack.Screen,{name:"PersonalInfo",component:_Screens.PersonalInfo,options:{title:'Personal Information'},__self:_this,__source:{fileName:_jsxFileName,lineNumber:124,columnNumber:17}}),_Libraries.React.createElement(Stack.Screen,{name:"ChangePassword",component:_Screens.ChangePassword,options:{title:'Change Password'},__self:_this,__source:{fileName:_jsxFileName,lineNumber:131,columnNumber:17}}),_Libraries.React.createElement(Stack.Screen,{name:"ChangePin",component:_Screens.ChangePin,options:{title:'Change PIN'},__self:_this,__source:{fileName:_jsxFileName,lineNumber:138,columnNumber:17}}),_Libraries.React.createElement(Stack.Screen,{name:"AddPhone",component:_Screens.AddPhone,options:{title:'Add Phone Number'},__self:_this,__source:{fileName:_jsxFileName,lineNumber:145,columnNumber:17}}),_Libraries.React.createElement(Stack.Screen,{name:"ManagePhone",component:_Screens.ManagePhone,options:{title:'Manage Phone Number'},__self:_this,__source:{fileName:_jsxFileName,lineNumber:152,columnNumber:17}})):null):_Libraries.React.createElement(_Libraries.React.Fragment,null,_Libraries.React.createElement(Stack.Screen,{name:"Auth",component:_Screens.Auth,options:{headerShown:false},__self:_this,__source:{fileName:_jsxFileName,lineNumber:164,columnNumber:15}}),_Libraries.React.createElement(Stack.Screen,{name:"CreatePin",component:_Screens.CreatePin,options:{headerShown:false},__self:_this,__source:{fileName:_jsxFileName,lineNumber:169,columnNumber:15}}),_Libraries.React.createElement(Stack.Screen,{name:"ForgotPassword",component:_Screens.ForgotPassword,options:{headerShown:false},__self:_this,__source:{fileName:_jsxFileName,lineNumber:174,columnNumber:15}}),_Libraries.React.createElement(Stack.Screen,{name:"SignUp",component:_Screens.SignUp,options:{headerShown:false},__self:_this,__source:{fileName:_jsxFileName,lineNumber:179,columnNumber:15}}),_Libraries.React.createElement(Stack.Screen,{name:"StatusPin",component:_Screens.StatusPin,options:{headerShown:false},__self:_this,__source:{fileName:_jsxFileName,lineNumber:184,columnNumber:15}}),_Libraries.React.createElement(Stack.Screen,{name:"ForgotPassword2",component:_Screens.ForgotPassword2,options:{headerShown:false},__self:_this,__source:{fileName:_jsxFileName,lineNumber:189,columnNumber:15}}))));};var DrawerNavigator=function DrawerNavigator(){return _Libraries.React.createElement(Drawer.Navigator,{drawerContentOptions:{activeTintColor:_Assets.color.primary,itemStyle:{marginVertical:10}},initialRouteName:"Home",__self:_this,__source:{fileName:_jsxFileName,lineNumber:203,columnNumber:3}},_Libraries.React.createElement(Stack.Screen,{name:"Home",component:_Screens.Home,options:{headerShown:false,drawerIcon:function drawerIcon(_ref){var color=_ref.color,size=_ref.size;return _Libraries.React.createElement(_Libraries.Ionicons,{name:"grid-outline",size:25,color:color,__self:_this,__source:{fileName:_jsxFileName,lineNumber:216,columnNumber:11}});}},__self:_this,__source:{fileName:_jsxFileName,lineNumber:210,columnNumber:5}}),_Libraries.React.createElement(Drawer.Screen,{name:"Transaction",component:_Screens.Transaction,options:{drawerIcon:function drawerIcon(_ref2){var color=_ref2.color,size=_ref2.size;return _Libraries.React.createElement(_Libraries.Ionicons,{name:"cash-outline",size:25,color:color,__self:_this,__source:{fileName:_jsxFileName,lineNumber:225,columnNumber:11}});}},__self:_this,__source:{fileName:_jsxFileName,lineNumber:220,columnNumber:5}}),_Libraries.React.createElement(Drawer.Screen,{name:"Profile",component:_Screens.Profile,options:{headerShown:false,drawerIcon:function drawerIcon(_ref3){var color=_ref3.color,size=_ref3.size;return _Libraries.React.createElement(_Libraries.Ionicons,{name:"people-outline",size:25,color:color,__self:_this,__source:{fileName:_jsxFileName,lineNumber:235,columnNumber:11}});}},__self:_this,__source:{fileName:_jsxFileName,lineNumber:229,columnNumber:5}}));};var MyTabs=function MyTabs(){return _Libraries.React.createElement(Tab.Navigator,{initialRouteName:"Dashboard",tabBarOptions:{inactiveTintColor:_Assets.color["default"],activeTintColor:_Assets.color.darkblue,inactiveBackgroundColor:_Assets.color.darkblue,activeBackgroundColor:_Assets.color.primary},__self:_this,__source:{fileName:_jsxFileName,lineNumber:244,columnNumber:5}},_Libraries.React.createElement(Tab.Screen,{name:"Dashboard",component:_Screens.Dashboard,options:{tabBarLabel:'Dashboard',tabBarIcon:function tabBarIcon(_ref4){var color=_ref4.color,size=_ref4.size;return _Libraries.React.createElement(_Libraries.Ionicons,{name:"grid-outline",size:25,color:color,__self:_this,__source:{fileName:_jsxFileName,lineNumber:259,columnNumber:13}});}},__self:_this,__source:{fileName:_jsxFileName,lineNumber:253,columnNumber:7}}),_Libraries.React.createElement(Tab.Screen,{name:"TransactionAdmin",component:_Screens.TransactionAdmin,options:{tabBarLabel:'Transaction',tabBarIcon:function tabBarIcon(_ref5){var color=_ref5.color,size=_ref5.size;return _Libraries.React.createElement(_Libraries.Ionicons,{name:"wallet-outline",size:25,color:color,__self:_this,__source:{fileName:_jsxFileName,lineNumber:269,columnNumber:13}});}},__self:_this,__source:{fileName:_jsxFileName,lineNumber:263,columnNumber:7}}),_Libraries.React.createElement(Tab.Screen,{name:"UserAdmin",component:_Screens.UserAdmin,options:{tabBarLabel:'Users',tabBarIcon:function tabBarIcon(_ref6){var color=_ref6.color,size=_ref6.size;return _Libraries.React.createElement(_Libraries.Ionicons,{name:"people-outline",size:25,color:color,__self:_this,__source:{fileName:_jsxFileName,lineNumber:279,columnNumber:13}});}},__self:_this,__source:{fileName:_jsxFileName,lineNumber:273,columnNumber:7}}),_Libraries.React.createElement(Tab.Screen,{name:"TopUpAdmin",component:_Screens.TopUpAdmin,options:{tabBarLabel:'Top Up',tabBarIcon:function tabBarIcon(_ref7){var color=_ref7.color,size=_ref7.size;return _Libraries.React.createElement(_Libraries.Ionicons,{name:"add-outline",size:25,color:color,__self:_this,__source:{fileName:_jsxFileName,lineNumber:289,columnNumber:13}});}},__self:_this,__source:{fileName:_jsxFileName,lineNumber:283,columnNumber:7}}));};var mapStateToProps=function mapStateToProps(state){return{auth:state.auth};};var _default=(0,_Libraries.connect)(mapStateToProps)(Routes);exports["default"]=_default;