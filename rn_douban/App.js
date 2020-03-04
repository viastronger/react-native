/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/components/home/Home';
import Movie from './src/components/movie/Movie';
import Mine from './src/components/mine/Mine';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: '首页',
      headerTintColor: 'hotpink',
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
    },
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({focused, tintColor}) => {
          return (
            <Image
              source={
                focused
                  ? require('./src/statics/images/tabbar/home_select.png')
                  : require('./src/statics/images/tabbar/home.png')
              }
              style={{tintColor: tintColor, width: 25, height: 25}}
            />
          );
        },
      },
    },
    Movie: {
      screen: Movie,
      navigationOptions: {
        tabBarLabel: '分类',
        tabBarIcon: ({focused, tintColor}) => {
          return (
            <Image
              source={
                focused
                  ? require('./src/statics/images/tabbar/category_select.png')
                  : require('./src/statics/images/tabbar/category.png')
              }
              style={{tintColor: tintColor, width: 25, height: 25}}
            />
          );
        },
      },
    },
    Mine: {
      screen: Mine,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({focused, tintColor}) => {
          return (
            <Image
              source={
                focused
                  ? require('./src/statics/images/tabbar/mine_select.png')
                  : require('./src/statics/images/tabbar/mine.png')
              }
              style={{tintColor: tintColor, width: 25, height: 25}}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(TabNavigator);
