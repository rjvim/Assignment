import React, { Component } from 'react'
import {
  View, Text, TouchableOpacity, Image
} from "react-native";
import global_style from '../Style/GlobalStyle';
import Images from '../Constant/Images';
export default class ToolbarHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <View style={[global_style.toolbar_cards]}>

        <TouchableOpacity>

          <Image
            style={{ tintColor: 'white' }}
            source={Images.hamburger} />

        </TouchableOpacity>

        <Text
          style={[global_style.Roboto_regular_18]}>
          {this.props.param_title}
        </Text>

        <TouchableOpacity>

          <Image
            source={Images.notification} />

        </TouchableOpacity>


      </View>


    )
  }
}
