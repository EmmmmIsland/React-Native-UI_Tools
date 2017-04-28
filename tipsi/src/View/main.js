/**
 * Created by wangl on 2017/4/26.
 */
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


import Counter from './Counter'
import LabelRating from './LabelRating'
import RangeSlider from './RangeSlider'
import Expand from './Expand'
import Start from './Start'
import Alipay from './Alipay'
import Flatlist from './Flatlist'



export default class tipsi extends Component {


    plus() {
        this.props.navigator.push({
            component: Counter
        })
    }

    colorbutton() {
        this.props.navigator.push({
            component: LabelRating
        })
    }

    scrollbutton() {
        this.props.navigator.push({
            component: RangeSlider
        })
    }

    expand() {
        this.props.navigator.push({
            component: Expand
        })
    }

    start() {
        this.props.navigator.push({
            component: Start
        })
    }
    alipay() {
        this.props.navigator.push({
            component: Alipay
        })
    }
    flatlist() {
        this.props.navigator.push({
            component: Flatlist
        })
    }

    render() {
        return (


            <View style={styles.container}>
                <Button title="加减数量控件" onPress={() => {
                    this.plus()
                }}/>
                <Button title="颜色按钮" onPress={() => {
                    this.colorbutton()
                }}/>
                <Button title="拖动条" onPress={() => {
                    this.scrollbutton()
                }}/>
                <Button title="展开" onPress={() => {
                    this.expand()
                }}/>
                <Button title="星星" onPress={() => {
                    this.start()
                }}/>
                <Button title="Alipay" onPress={() => {
                    this.alipay()
                }}/>
                <Button title="FlatList" onPress={() => {
                    this.flatlist()
                }}/>
            </View>
        );
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
