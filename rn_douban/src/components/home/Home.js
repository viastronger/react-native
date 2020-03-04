import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StyleSheet, ScrollView, Dimensions} from 'react-native';
import Carousel from 'react-native-looped-carousel';

const {width, height} = Dimensions.get('window');

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: {width, height:400},
    };
  }

  _onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({size: {width: layout.width, height: layout.height}});
  };

  render() {
    return (
      <View>
        <ScrollView>
          <View style={{flex: 1}} onLayout={this._onLayoutDidChange}>
            <Carousel
              delay={2000}
              style={this.state.size}
              autoplay={false}
              arrows
              bullets
              onAnimateNextPage={p => console.log(p)}>
              <View style={[{backgroundColor: '#BADA55'}, this.state.size]}>
                <Text>1</Text>
              </View>
              <View style={[{backgroundColor: 'red'}, this.state.size]}>
                <Text>2</Text>
              </View>
              <View style={[{backgroundColor: 'blue'}, this.state.size]}>
                <Text>3</Text>
              </View>
            </Carousel>
          </View>
          <View style={style.navigator}>
            <Text onPress={()=>{
              this.props.navigation.navigate('Home')
            }}>首页</Text>
            <Text onPress={()=>{
              this.props.navigation.navigate('Movie')
            }}>分类</Text>
            <Text onPress={()=>{
              this.props.navigation.navigate('Mine')
            }}>我的</Text>
          </View>
          <Text style={style.txt}>home</Text>
          <Text>哈哈哈哈哈</Text>
          <Text>哈哈哈哈哈</Text>
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  txt: {
    // backgroundColor: 'red',
    // height: 800,
  },
  navigator:{
    height:50,
    backgroundColor:'hotpink',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  }
});
