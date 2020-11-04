import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput, Button, Image, Dimensions, TouchableOpacity,
    SafeAreaView, ScrollView
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';
import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { PersistGate } from "redux-persist/integration/react";
import DateRangePicker from "react-native-daterange-picker";
import LinearGradient from 'react-native-linear-gradient';
import promiseMiddleware from 'redux-promise-middleware';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
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
    createBottomTabNavigator,
    createStackNavigator,
    createDrawerNavigator,

    //redux
    applyMiddleware,
    createStore,
    combineReducers,
    Provider,
    connect,

    // redux-persist
    persistStore,
    persistReducer,
    PersistGate,

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
    DateRangePicker,
    promiseMiddleware,
};

export * from 'react';
export * from 'react-native';
export * from 'redux';