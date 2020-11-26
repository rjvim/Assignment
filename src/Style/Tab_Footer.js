import React, { Component } from 'react'

import { StyleSheet,
  View, Toolbar, Text, Image, TouchableOpacity, Dimensions,
  
} from "react-native";

const SCREEN_WIDTH = Dimensions.get('window').width;
import Images from "../Constant/Images";

export default class Tab_Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <View
        style={
          this.props.connection_status ?
          {
          flexDirection: "row", height: 70,
          backgroundColor: '#DEDEDE', width: SCREEN_WIDTH, position: 'absolute', bottom: 0
        }:
        {
          flexDirection: "row", height: 70,
          backgroundColor: '#DEDEDE', width: SCREEN_WIDTH, position: 'absolute', bottom: 25
        }
      }>
        <TouchableOpacity
          onPress={() => {
            this.props.global_navigation.navigate("DashboardScreen");
          }}
          style={{
            width: SCREEN_WIDTH / 2,
            justifyContent: "center"
          }}
        >
          <View style={{ alignItems: "center" }}>
            {this.props.activePage == "DashboardScreen" ?
              <View style={{ alignItems: "center",height:'100%'}}>
                <View style={{height: 4, backgroundColor: '#499E64',
                position:'absolute',top:0,width:'100%'}}></View>
                <View style={{width:'100%',alignSelf:'center',height:'100%',justifyContent:'center'}}>
                <Image style={[styles.Menu_icons,{tintColor:'#000000'}]} source={Images.calendar} />
                <Text style={styles.MenuText_Active}>Appointments</Text>
                </View>
              </View>
              :
              <View style={{ alignItems: "center" }}>
                <Image style={[styles.Menu_icons,{tintColor:'#909090'}]} source={Images.calendar} />
                <Text style={styles.MenuText}>Appointments</Text>
              </View>
            }

          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.global_navigation.navigate("SelectCallMode");
          }}
          style={{
            width: SCREEN_WIDTH / 2,
            justifyContent: "center"
          }}
        >
          <View style={{ alignItems: "center" }}>
            {this.props.activePage == "SelectCallMode" ?
              <View style={{ alignItems: "center" }}>
                <View style={{height: 4, backgroundColor: '#499E64',
                position:'absolute',top:0,width:'100%'}}></View>
                <View style={{width:'100%',alignSelf:'center',height:'100%',justifyContent:'center'}}>
                <Image style={[styles.Menu_icons,{tintColor:'#000000'}]} source={Images.add} />
                <Text style={styles.MenuText_Active}>New Appointment</Text>
                </View>
              </View>
              :
              <View style={{ alignItems: "center" }}>
                <Image style={[styles.Menu_icons,{tintColor:'#909090'}]} source={Images.add} />
                <Text style={styles.MenuText}>New Appointment</Text>
              </View>
            }
          </View>
        </TouchableOpacity>



      </View>
    )
  }
}
const styles = StyleSheet.create({
  MenuText: {
    color: "#909090",
    fontFamily: "roboto-regular",
    fontSize: 14
  },
  MenuText_Active: {
    color: "#000000",
    fontFamily: "roboto-regular",
    fontSize: 14
  },
  Menu_icons: {
    width: 20,
    height: 20,
    marginBottom: 2,
    alignSelf:'center'
  
  }
});