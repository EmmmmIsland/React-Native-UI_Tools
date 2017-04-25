/**
 * Created by wangl on 2017/4/25.
 */
import React, {PropTypes} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';


export default class Counter extends React.Component {
    static propTypes = {
        value: PropTypes.number,
        minValue: PropTypes.number,
        maxValue: PropTypes.number,
        defaultValue: PropTypes.number,
        step: PropTypes.number,
        onValueChange: PropTypes.func,
        styles: PropTypes.object,
    }

    static defaultProps = {
        maxValue: Infinity,
        minValue: -Infinity,
        defaultValue: 0,
        step: 1,
        value: undefined,
        styles: {},
        onValueChange: () => {
        },
    }

    static isValueInRange = ({value, maxValue, minValue}) => {
        if (value !== undefined && (value > maxValue || value < minValue)) {
            throw Error('Counter: value is out of range')
        }
    }

    constructor(props) {
        super(props)

        const {defaultValue, value, minValue, maxValue} = props
        const values = [defaultValue, value]
        values.forEach(item => Counter.isValueInRange({value: item, minValue, maxValue}))

        this.state = {
            count: this.props.defaultValue,
            isControlled: this.props.value !== undefined,
        }
    }

    onPress = (step) => {
        const currentValue = this.state.isControlled ? this.props.value : this.state.count
        const count = currentValue + step
        const isValidValue = step > 0 ?
            (count <= this.props.maxValue) :
            (count >= this.props.minValue)

        if (!isValidValue) {
            return false
        }

        if (!this.state.isControlled) {
            this.setState({count})
        }

        return this.props.onValueChange(count)
    }

    onPressPlus = () => this.onPress(this.props.step)

    onPressMinus = () => {
        if (this.state.count > 0) {
            this.onPress(-this.props.step)
        }
    }

    render() {
        const value = this.state.isControlled ? this.props.value : this.state.count

        return (
            <View style={baseStyles.container}>
                <TouchableOpacity onPress={this.onPressMinus} style={[baseStyles.button, baseStyles.leftButton]}>
                    <Text style={baseStyles.buttonText}>
                        -
                    </Text>
                </TouchableOpacity>
                <View style={baseStyles.valueWrapper}>
                    <Text style={baseStyles.value}>
                        {value}
                    </Text>
                </View>
                <TouchableOpacity onPress={this.onPressPlus} style={[baseStyles.button, baseStyles.rightButton]}>
                    <Text style={baseStyles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const baseStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: 'gainsboro',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'aliceblue',
    },
    leftButton: {
        borderBottomLeftRadius: 3,
        borderTopLeftRadius: 3,
    },
    rightButton: {
        borderBottomRightRadius: 3,
        borderTopRightRadius: 3,
    },
    buttonText: {
        fontSize: 25,
        lineHeight: 25,
        textAlign: 'center',
        marginBottom: Platform.select({
            ios: 0,
            android: 5,
        }),
    },
    valueWrapper: {
        width: 80,
        height: 40,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: 'gainsboro',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    value: {
        fontSize: 25,
        textAlign: 'center',
    },
})

