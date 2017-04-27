/**
 * Created by wangl on 2017/4/26.
 */

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


import StarRating from 'react-native-star-rating';



export default class ViewTools extends Component {

    constructor(props) {
        super(props);
        this.state = {
            starCount: 2
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

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
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={this.state.starCount}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                    />
                </View>
                <View style={{marginTop:40}}>
                    <StarRating
                        disabled={false}
                        emptyStar={'ios-star-outline'}
                        fullStar={'ios-star'}
                        halfStar={'ios-star-half'}
                        iconSet={'Ionicons'}
                        maxStars={7}
                        rating={this.state.starCount}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                        starColor={'red'}
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