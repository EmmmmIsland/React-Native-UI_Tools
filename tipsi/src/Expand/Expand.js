/**
 * Created by wangl on 2017/4/26.
 */
import React, { PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Expand extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        children: PropTypes.node,
        defaultExpanded: PropTypes.bool,
        icon: PropTypes.object,
        expandedIcon: PropTypes.object,
        styles: PropTypes.object,
    }

    static defaultProps = {
        description: '',
        children: null,
        defaultExpanded: false,
        icon: { name: 'chevron-down', color: 'gray', size: 12 },
        expandedIcon: { name: 'chevron-up', color: 'gray', size: 12 },
        styles: null,
    }

    state = { expanded: this.props.defaultExpanded }

    onPress = () => {
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        const { title, description, children, icon, expandedIcon } = this.props
        const { expanded } = this.state
        const disclosureIndicator = expanded ? <Icon {...expandedIcon} /> : <Icon {...icon} />
        return (
            <TouchableOpacity onPress={this.onPress} activeOpacity={1}>
                <View style={baseStyles.container}>
                    <View style={baseStyles.titleWrapper}>
                        <Text
                            numberOfLines={1}
                            style={baseStyles.titleText}>
                            {title}
                        </Text>
                        {disclosureIndicator}
                    </View>
                    {Boolean(description) &&
                    <View style={baseStyles.descriptionWrapper}>
                        <Text
                            numberOfLines={expanded ? 0 : 1}
                            style={baseStyles.descriptionText}>
                            {description}
                        </Text>
                    </View>
                    }
                    {expanded && children}
                </View>
            </TouchableOpacity>
        )
    }
}

const baseStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 3,
        marginRight: 3,
    },
    titleWrapper: {
        marginBottom: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleText: {
        fontSize: 14,
    },
    descriptionText: {
        fontSize: 14,
    },
    descriptionWrapper: {
        marginBottom: 5,
    },
})

