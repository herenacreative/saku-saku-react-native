import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput, Button, Image, Dimensions, TouchableOpacity,
    SafeAreaView, ScrollView
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';
// import {persistStore, persisReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import moment from 'moment';
import axios from 'axios';

export {
    //react
    React,
    useEffect,
    useState,

    //react native
    StyleSheet,
    Text,
    TextInput,
    Button,
    View,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Image,

    //@react-navigation / native
    NavigationContainer,
    useNavigation,
    
    // @react-navigation / stack
    createStackNavigator,
    createDrawerNavigator,

    //redux
    applyMiddleware,
    createStore,
    combineReducers,

    //redux-persist
    // persistStore,
    // persisReducer,

    //utils
    axios,
    moment,
    Animatable,
    LinearGradient,
    // storage,
    logger,
    AsyncStorage,
    thunk,
    Ionicons,
    SplashScreen,
};

export * from 'react';
export * from 'react-native';
export * from 'redux';