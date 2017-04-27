/**
 * Created by wangl on 2017/4/27.
 */
/**
 * Created by wangl on 2017/4/26.
 */
/**
 * Created by wangl on 2017/4/26.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import Counter from '../Counter/counter'


export default class ViewTools extends Component {
    render() {
        return (
            <View >
                <View style={{marginTop:40}}>
                    <Button title="返回" onPress={() => {
                        this.props.navigator.pop()
                    }
                    }/>
                </View>
                <View style={{marginTop:40}}>
                    <Text>支付宝待开发</Text>
                </View>
            </View>
        );
    }
}

