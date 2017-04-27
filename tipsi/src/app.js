/**
 * Created by wangl on 2017/4/25.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Navigator
} from 'react-native';

import main from './View/main'



export default class tipsi extends Component {


    render() {
        return (

            <Navigator
                initialRoute={{id: 'main', component: main}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
            />


        );
    }

    configureScene(route, routeStack) {
        if (route.sceneConfig) { // 有设置场景
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.PushFromRight; // 默认，右侧弹出
    }

    renderScene(route, navigator) {
        return <route.component {...route.passProps} navigator= {navigator}/>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

AppRegistry.registerComponent('tipsi', () => tipsi);
