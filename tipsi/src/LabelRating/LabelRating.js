/**
 * Created by wangl on 2017/4/25.
 */

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
        backgroundColor: 'yellow',
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


