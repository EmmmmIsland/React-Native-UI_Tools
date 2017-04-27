
/**
 * Created by wangl on 2017/4/26.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';


import Expand from '../Expand/Expand'



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
                <View style={{marginTop:40,backgroundColor:'red'}}>
                    <Text>222222</Text>
                    <Expand
                        title="Winemakers Notes:"
                        description="1111111"
                    />
                </View>
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