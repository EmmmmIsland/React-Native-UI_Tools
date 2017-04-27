/**
 * Created by wangl on 2017/4/25.
 */
import React, { PureComponent, PropTypes } from 'react'
import { View, TouchableHighlight } from 'react-native'
import { StylePropType } from './CustomPropTypes'

export default class DefaultMarker extends PureComponent {
    static propTypes = {
        pressed: PropTypes.bool,
        markerStyle: StylePropType,
        pressedMarkerStyle: StylePropType,
    }

    render() {
        const { pressed, markerStyle, pressedMarkerStyle } = this.props

        return (
            <TouchableHighlight>
                <View style={[markerStyle, pressed && pressedMarkerStyle]} />
            </TouchableHighlight>
        )
    }
}