import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Dashboard from '../Screens/Dashboard';

export const AppStackNavigator = createStackNavigator({
    Dashboard: Dashboard,
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false
        }

    })

export default createAppContainer(AppStackNavigator);