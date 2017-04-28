
/**
 * Created by wangl on 2017/4/26.
 */
import React, {PureComponent} from 'react';
import {
    Animated,
    Text,
    View,
    Button,
    FlatList
} from 'react-native';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const {
    FooterComponent,
    HeaderComponent,
    ItemComponent,
    PlainInput,
    SeparatorComponent,
    genItemData,
    getItemLayout,
    pressItem,
    renderSmallSwitchOption,
} = require('../UIExplorer/ListExampleShared');

export default class Flatlist extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            bin: [{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}],
            data: genItemData(100),
            debug: false,
            horizontal: false,
            filterText: '',
            fixedHeight: true,
            logViewable: false,
            virtualized: true,

        }
    }



    render() {
        const filterRegex = new RegExp(String(this.state.filterText), 'i');
        const filter = (item) => (
            filterRegex.test(item.text) || filterRegex.test(item.title)
        );
        const filteredData = this.state.data.filter(filter);
        return (
            <View >
                <View style={{marginTop: 40}}>
                    <Button title="返回" onPress={() => {
                        this.props.navigator.pop()
                    }
                    }/>
                </View>
                <View style={{marginTop: 40}}>

                    <AnimatedFlatList
                        ItemSeparatorComponent={SeparatorComponent}
                        ListHeaderComponent={HeaderComponent}
                        ListFooterComponent={FooterComponent}
                        disableVirtualization={!this.state.virtualized}
                        horizontal={this.state.horizontal}
                        onRefresh={this._onRefresh}     //下拉刷新数据
                        refreshing={false}
                        //data={this.state.bin}
                        data={filteredData}
                        //renderItem={({item}) => <Text>{item.key}</Text>}
                        renderItem={this._renderItemComponent}
                    />
                </View>
            </View>
        );

    }
    _onRefresh = () => alert('onRefresh: nothing to refresh :P');
    _renderItemComponent = ({item}) => {
        return (
            <ItemComponent
                item={item}
                horizontal={this.state.horizontal}
                fixedHeight={this.state.fixedHeight}
                onPress={this._pressItem}
            />
        );
    };

    _pressItem = (key: number) => {

        pressItem(this, key);
    };
    _listRef: AnimatedFlatList;
}

