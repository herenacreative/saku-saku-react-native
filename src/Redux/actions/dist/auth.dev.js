"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.register=exports.logout=exports.login=void 0;var _Libraries=require("Libraries");var _index=_interopRequireDefault(require("../../Configs/index"));var login=function login(data){return{type:"LOGIN",payload:(0,_Libraries.axios)({method:'POST',url:"".concat(_index["default"].baseURL,"/auth/login"),data:{email:data.email,password:data.password}})};};exports.login=login;var logout=function logout(){return{type:"LOGOUT"};};exports.logout=logout;var register=function register(data){return{type:"REGISTER",payload:(0,_Libraries.axios)({method:'POST',url:"".concat(_index["default"].baseURL,"/sign-up"),data:{email:data.email,password:data.password}})};};exports.register=register;