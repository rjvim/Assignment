import React, { Component } from 'react'

import {
  AppRegistry, StyleSheet,
  View, Toolbar, Text, Image, TouchableOpacity, Dimensions,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get('window').width;
import Images from "../Constant/Images";

export default class ToolbarFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <View style={{
        flexDirection: "row", height: 75, backgroundColor: "#fff",
        width: SCREEN_WIDTH, position: 'absolute', bottom: 0,
        borderTopColor: '#00000033', borderTopWidth: 1
      }}>
        <TouchableOpacity
          style={{ width: SCREEN_WIDTH / 5, justifyContent: "center" }}>
          <View style={{ alignItems: "center" }}>

            {this.props.activePage == "Dashboard" ?
              <View style={{ alignItems: "center", height: '100%' }}>

                <View style={{ width: '100%', alignSelf: 'center', height: '100%', justifyContent: 'center' }}>

                  <Image
                    source={Images.home}
                    style={{ alignSelf: 'center' }} />

                  <Text style={[styles.MenuText_Active, { color: "#63748D" }]}>Home</Text>

                </View>

              </View>
              :
              <View style={{ alignItems: "center" }}>
                <Image
                  source={Images.home}
                  style={{ alignSelf: 'center' }} />
                <Text style={[styles.MenuText_Inactive]}>Home</Text>
              </View>
            }

          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ width: SCREEN_WIDTH / 5, justifyContent: "center" }}>
          <View style={{ alignItems: "center" }}>
            {this.props.activePage == "My Order" ?
              <View style={{ alignItems: "center" }}>

                <View style={{ width: '100%', alignSelf: 'center', height: '100%', justifyContent: 'center' }}>
                  <Image
                    source={Images.invest}
                    style={{ alignSelf: 'center' }} />
                  <Text style={[styles.MenuText_Active, { color: "yellow" }]}>Invest</Text>
                </View>
              </View>
              :
              <View style={{ alignItems: "center" }}>
                <Image
                  source={Images.invest}
                  style={{ alignSelf: 'center' }} />
                <Text style={[styles.MenuText_Inactive]}>Invest</Text>
              </View>
            }
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ width: SCREEN_WIDTH / 5, justifyContent: "center" }}>
          <View style={{ alignItems: "center" }}>
            {this.props.activePage == "Cart" ?
              <View style={{ alignItems: "center" }}>

                <View style={{ width: '100%', alignSelf: 'center', height: '100%', justifyContent: 'center' }}>
                  <Image
                    source={Images.insight}
                    style={{ alignSelf: 'center' }} />
                  <Text style={[styles.MenuText_Active, { color: 'yellow' }]}>Insights</Text>
                </View>
              </View>
              :
              <View style={{ alignItems: "center" }}>
                <Image
                  source={Images.insight}
                  style={{ alignSelf: 'center' }} />
                <Text style={[styles.MenuText_Inactive]}>Insights</Text>
              </View>
            }
          </View>
        </TouchableOpacity>


        <TouchableOpacity
          style={{ width: SCREEN_WIDTH / 5, justifyContent: "center" }}>
          <View style={{ alignItems: "center" }}>
            {this.props.activePage == "Address" ?
              <View style={{ alignItems: "center" }}>

                <View style={{ width: '100%', alignSelf: 'center', height: '100%', justifyContent: 'center' }}>
                  <Image
                    source={Images.tax}
                    style={{ alignSelf: 'center' }} />
                  <Text style={[styles.MenuText_Active, { color: 'yellow' }]}>Tax Corner</Text>
                </View>
              </View>
              :
              <View style={{ alignItems: "center" }}>
                <Image
                  source={Images.tax}
                  style={{ alignSelf: 'center' }} />
                <Text style={[styles.MenuText_Inactive]}>Tax Corner</Text>
              </View>
            }
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ width: SCREEN_WIDTH / 5, justifyContent: "center" }}>
          <View style={{ alignItems: "center" }}>
            {this.props.activePage == "Address" ?
              <View style={{ alignItems: "center" }}>

                <View style={{ width: '100%', alignSelf: 'center', height: '100%', justifyContent: 'center' }}>
                  <Image
                    source={Images.gameController}
                    style={{ alignSelf: 'center' }} />
                  <Text style={[styles.MenuText_Active, { color: 'yellow' }]}>Games</Text>
                </View>
              </View>
              :
              <View style={{ alignItems: "center" }}>
                <Image
                  source={Images.gameController}
                  style={{ alignSelf: 'center' }} />
                <Text style={[styles.MenuText_Inactive]}>Games</Text>
              </View>
            }
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  MenuText_Active: {
    color: "#000",
    fontFamily: "roboto-regular",
    marginTop: 4,
    fontSize: 12,textAlign:'center'
  },
  MenuText_Inactive: {
    color: "#ACACAC",
    fontFamily: "roboto-regular",
    marginTop: 4,
    fontSize: 12,textAlign:'center'
  },
  Menu_icons: {
    width: 20,
    height: 20,
    marginBottom: 2,
    alignSelf: 'center'

  }
});