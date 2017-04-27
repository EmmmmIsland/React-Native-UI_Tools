# React-Native-UI_Tools
React Native 工具


图截得很low，凑合看吧，哈哈哈
https://github.com/a4962189/React-Native-UI_Tools

#加减数量按钮
```
<Counter/>  控件

```


![ImgCap](https://github.com/a4962189/MP4/blob/master/QQ20170427-145745-HD.gif?raw=true)
```
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


```

 


#特殊按钮
```
<LabelRating/> 
```

![ImgCap](https://raw.githubusercontent.com/a4962189/gif/master/teshuanniu.png)

```

import React, {PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'



export default class LabelRating extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        rating: PropTypes.number,
        styles: PropTypes.object,
    }

    static defaultProps = {
        rating: 0,
    }

    render() {
        const { title, rating } = this.props

        return (
            <View style={baseStyles.container}>
                <View style={baseStyles.titleWrapper}>
                    <Text style={baseStyles.titleText}>
                        {title}
                    </Text>
                </View>
                <View style={baseStyles.ratingWrapper}>
                    <Text style={baseStyles.ratingText}>
                        {rating}
                    </Text>
                </View>
            </View>
        )
    }
}

const baseStyles = StyleSheet.create({
    container: {
        borderRadius: 3,
        padding: 2,
        margin: 3,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: 'red',
    },
    titleWrapper: {
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 4,
        paddingRight: 4,
        marginRight: 2,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 18,
        color: 'white',
    },
    ratingWrapper: {
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ratingText: {
        fontSize: 18,
        color: 'gray',
    },
})



```



#滑动条
```
<LabelRating/> 
```

![ImgCap](https://raw.githubusercontent.com/a4962189/gif/master/tuodong.gif)

>   请参照github src/RangeSlider文件夹下代码



#星星
```
<RangeSlider/> 
```
>  npm install react-native-star-rating --save


![ImgCap](https://github.com/a4962189/gif/blob/master/xingxing.gif?raw=true)


```
import StarRating from 'react-native-star-rating';

class GeneralStarExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <StarRating
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
    );
  }
}
```










