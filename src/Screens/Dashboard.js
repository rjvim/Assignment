import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, BackHandler, Dimensions, ImageBackground,FlatList
} from 'react-native'

import NetInfo from "@react-native-community/netinfo";
import global_style from '../Style/GlobalStyle';
import Images from "../Constant/Images";
import ToolbarFooter from '../Style/ToolbarFooter';
import ToolbarHeader from '../Style/ToolbarHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, useSafeArea } from 'react-native-gesture-handler';
import Modal from "react-native-modal";
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart'
import Piechart from 'react-native-pie'
const deviceHeight = Dimensions.get('window').height;

const data1 = [
  { x: -2, y: 6 },
  { x: -1, y: 6 },
  { x: 1, y: 7 },
  { x: 1, y: 7 },
  { x: 9, y: 12 },
  { x: 10, y: 14 },
]

const data2 = [
  { x: -2, y: 3 },
  { x: -1, y: 4 },
  { x: 1, y: 5 },
  { x: 1, y: 5 },
  { x: 8, y: 9 },
  { x: 10, y: 12 },]

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      connection_status: false,
      showProgressBar: false,
      selectIndex : -1,
      labelArray: [
        {
        key: '1m',
        },
        {
          key: '3m',
        },
        {
          key: '6m',
        },
        {
          key: '1y',
        },
        {
          key: '5y',
        },
        ],
       
    };

    this.didFocus = props.navigation.addListener("didFocus", payload =>
      BackHandler.addEventListener("hardwareBackPress", this.onBack),
    );

  }

  componentDidMount() {

    this.willBlur = this.props.navigation.addListener("willBlur", payload =>
      BackHandler.removeEventListener("hardwareBackPress", this.onBack),
    );


    //To get the network state once
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        this.setState({ connection_status: true });
      } else {
        this.setState({ connection_status: false });
      }
    });


  }

  changeBackgroundColor = (item, index) => {
    this.setState({ selectIndex: index })
  }

  //to handle back press
  componentWillUnmount() {
    this.didFocus.remove();
    this.willBlur.remove();
    BackHandler.removeEventListener("hardwareBackPress", this.onBack);

  }

  onBack = () => {
    this.setState({ showSearch: false })
    this.setState({ showExitAppAlert: true })
    return true

  };

  handleBackButtonClick() {
    this.setState({ showExitAppAlert: true })
  }


  render() {

    return (
      <SafeAreaView
        style={[global_style.Container]}>

        <View style={[global_style.Container]}>
          <Modal
            animationIn="slideInLeft"
            animationOut="slideOutLeft"
            animationInTiming={500}
            animationOutTiming={500}
            isVisible={this.state.showExitAppAlert}>
            <View style={[global_style.Center]}>

              <View style={{ width: '100%', backgroundColor: 'white', borderRadius: 5 }}>

                <Text
                  style={{ fontFamily: "roboto-medium", fontSize: 18, color: '#000', marginTop: 15, marginLeft: 25 }}>
                  {"Exit App"}
                </Text>

                <Text
                  style={{ fontFamily: "roboto-medium", fontSize: 18, color: '#000', marginTop: 15, marginLeft: 25 }}>
                  {"Do you want to Exit?"}
                </Text>

                <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 15, justifyContent: 'flex-end' }}>
                  <TouchableOpacity
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    onPress={() => {
                      this.setState({ showExitAppAlert: false })
                    }}>

                    <Text
                      style={{
                        fontFamily: "roboto-medium", fontSize: 18, color: '#000',
                        marginRight: 30,
                      }}>
                      {"No"}
                    </Text>

                  </TouchableOpacity>

                  <TouchableOpacity
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    onPress={() => {
                      this.setState({ showExitAppAlert: false })
                      BackHandler.exitApp();
                    }}>

                    <Text
                      style={{ fontFamily: "roboto-medium", fontSize: 18, color: '#000', marginRight: 30, }}>
                      {"Yes"}
                    </Text>

                  </TouchableOpacity>
                </View>

              </View>

            </View>
          </Modal>

          {/* custom toolbar */}


          <ToolbarHeader global_navigation={this.props.navigation} param_title={"Dashboard"} />

          <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#FCFCFC' }}>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:10, backgroundColor: '#FCFCFC'}}>

                <View style={{
                  marginRight: 5, backgroundColor: '#FFFFFF', borderRadius: 3, flex: 1,
                  padding: 5, flex: 1
                }}>

                  <Text style={{
                    fontFamily: "roboto-medium", fontSize: 14,
                    color: '#63748D', textAlign: 'center',marginBottom:5
                  }}>{'NIFTY'}
                  </Text>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 2,marginHorizontal:10 }}>

                    <Text style={{
                      fontFamily: "roboto-medium", fontSize: 14,
                      color: '#393D54', textAlign: 'center', marginRight: 5
                    }}>{'10417.30'}
                    </Text>

                    <Text style={{
                      fontFamily: "roboto-medium", fontSize: 14,
                      color: '#56D057', textAlign: 'center'
                    }}>{'115.2 (+1.12%)'}
                    </Text>

                  </View>

                </View>

                <View style={{ backgroundColor: '#FFFFFF', borderRadius: 3, flex: 1, padding: 2,marginHorizontal:10 }}>

                  <Text style={{
                    fontFamily: "roboto-medium", fontSize: 14,
                    color: '#63748D', textAlign: 'center',marginBottom:5
                  }}>{'SENSEX'}
                  </Text>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 2, }}>

                    <Text style={{
                      fontFamily: "roboto-medium", fontSize: 14,
                      color: '#393D54', textAlign: 'center', marginRight: 5
                    }}>
                      {'35352.02'}
                    </Text>

                    <Text style={{
                      fontFamily: "roboto-medium", fontSize: 14,
                      color: '#56D057', textAlign: 'center'
                    }}>
                      {'436.22 (+1.25%)'}
                    </Text>

                  </View>

                </View>

              </View>

              <View style={{
                backgroundColor: '#FFFFFF', borderRadius: 3, marginVertical: 20, marginHorizontal: 20,
                elevation: 4, shadowOffset: 2,marginTop:20,
                shadowColor: '818181',
              }}>

                <Text style={{
                  fontFamily: "roboto-regular", fontSize: 14,
                  color: '#98A2B0', textAlign: 'center', marginVertical: 10
                }}>
                  {'Value as of Today'}
                </Text>

                <Text style={{
                  fontFamily: "roboto-medium", fontSize: 20,
                  color: '#393D54', textAlign: 'center'
                }}>
                  {'₹ 2,56,846.23'}
                </Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15 }}>

                  <View>

                    <Text style={{
                      fontFamily: "roboto-regular", fontSize: 14,
                      color: '#98A2B0', textAlign: 'center', marginVertical: 10
                    }}>
                      {'Invested'}
                    </Text>

                    <Text style={{
                      fontFamily: "roboto-medium", fontSize: 14,
                      color: '#393D54', textAlign: 'center'
                    }}>
                      {'₹ 2,50,000.00'}
                    </Text>

                  </View>

                  <View>

                    <Text style={{
                      fontFamily: "roboto-regular", fontSize: 14,
                      color: '#98A2B0', textAlign: 'center', marginVertical: 10
                    }}>
                      {'Unrealised Gain'}
                    </Text>

                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>

                      <Text style={{
                        fontFamily: "roboto-medium", fontSize: 14,
                        color: '#393D54', textAlign: 'center'
                      }}>
                        {'₹ 6,000.65'}
                      </Text>

                      <AntDesign name='caretup' color='#31AB3F' size={10} borderColor='#000'
                        style={{ marginTop: 7, marginLeft: 5 }} />

                    </View>

                  </View>
                  <View>

                    <Text style={{
                      fontFamily: "roboto-regular", fontSize: 14,
                      color: '#98A2B0', textAlign: 'center', marginVertical: 10
                    }}>
                      {'Annual Returns'}
                    </Text>

                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>

                      <Text style={{
                        fontFamily: "roboto-medium", fontSize: 14,
                        color: '#393D54', textAlign: 'center'
                      }}>
                        {'3.52%'}
                      </Text>

                      <AntDesign name='caretup' color='#31AB3F' size={10} borderColor='#000'
                        style={{ marginTop: 7, marginLeft: 5 }} />

                    </View>

                  </View>

                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 20 }}>

                  <Text style={{
                    fontFamily: "roboto-regular", fontSize: 18,
                    color: '#393D54', textAlign: 'center'
                  }}>
                    {'Portfolio Insights'}
                  </Text>

                  <AntDesign name='right' color='#3041A7' size={20} borderColor='#000'
                    style={{ marginTop: 3, marginLeft: 5 }} />

                </View>

              </View>

              <View style={{
                width: '100%', borderRadius: 5, marginTop: 20,
                marginBottom: 10, backgroundColor: '#fff'
              }}>

                <Text
                  style={{
                    fontFamily: "roboto-medium", fontSize: 18, color: '#161F56',
                    marginTop: 15, marginLeft: 20,
                  }}>
                  {'Title'}
                </Text>

                <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 20, }}>

                  <View style={{ marginTop: 10, flexDirection: 'row' }}>

                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#54C8A9', marginLeft: 2 }}>

                    </View>

                    <Text
                      style={{
                        fontFamily: "roboto-medium", fontSize: 16, color: '#63748D', marginTop: -7, marginLeft: 15
                      }}>
                      {"Invested Amount"}
                    </Text>

                  </View>

                  <View style={{ marginTop: 10, flexDirection: 'row', marginLeft: 20, marginBottom: 20 }}>

                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#3041A7', marginLeft: 2 }}>

                    </View>

                    <Text
                      style={{
                        fontFamily: "roboto-medium", fontSize: 16, color: '#63748D', marginTop: -7, marginLeft: 15
                      }}>
                      {"Current Value"}
                    </Text>

                  </View>

                </View>

                <Chart
                  style={{ height: 160, width: '100%', backgroundColor: '#fff' }}
                  xDomain={{ min: 0, max: 10 }}
                  yDomain={{ min: 0, max: 20 }}
                  padding={{ left: 30, top: 10, bottom: 10, right: 30 }} >
                  <Line data={data1} smoothing="cubic-spline" theme={{ stroke: { color: '#3041A7', width: 3.5 } }} />
                  <Line data={data2} smoothing="cubic-spline" theme={{ stroke: { color: '#35D5AA', width: 3.5 } }} />

                </Chart>

                <FlatList
                  data={this.state.labelArray}
                  style={{ marginHorizontal: 15 }}
                  marginBottom={15}
                  horizontal
                  keyExtractor={(item, index) => index.toString()}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) =>

                    <TouchableOpacity
                      activeOpacity={global.activeOpacity}
                      onPress={() => this.changeBackgroundColor(item, index)}>

                      <View style={{ alignSelf: 'center', marginTop: 15, }}>

                        <View style={{
                          margin: 10, borderWidth: 1, paddingHorizontal: 15, paddingVertical: 3,
                          borderColor: this.state.selectIndex == index ? '#fff' : '#ACACAC', borderRadius: 6,
                          backgroundColor: this.state.selectIndex == index ? '#35D5AA' : '#fff'
                        }}>

                          <Text style={{
                            fontFamily: "roboto-medium", fontSize: 16,
                            color: this.state.selectIndex == index ? '#fff' : '#ACACAC'
                          }}>
                            {item.key}
                          </Text>

                        </View>

                      </View>

                    </TouchableOpacity>
                  } />

              </View>

              <View style={{ margin: 20,marginTop:10 }}>
                <Text style={{
                  fontFamily: "roboto-meduim", fontSize: 18,
                  color: '#393D54', marginBottom: 10
                }}>
                  {'Investment Allocation'}
                </Text>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <Piechart
                    radius={50}
                    innerRadius={40}
                    sections={[
                      {
                        percentage: 25,
                        color: '#FFB471',
                      },
                      {
                        percentage: 15,
                        color: '#889DBB',
                      },

                      {
                        percentage: 10,
                        color: '#86E286',
                      },



                      {
                        percentage: 50,
                        color: '#FFE47D',
                      },
                    ]}
                    strokeCap={'butt'} />

                  <View style={{ flexDirection: 'row', flex: 1 }}>

                    <View>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{
                          marginLeft: 10, marginTop: 20, fontFamily: "roboto-medium", fontSize: 16,
                          color: '#FFD016',
                        }}>
                          {"50%"}
                        </Text>
                        <Text style={{
                          marginLeft: 10, marginTop: 20, fontFamily: "roboto-regular", fontSize: 16,
                          color: '#393D54',
                        }}>
                          {"Equity"}
                        </Text>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{
                          marginLeft: 10, marginTop: 20, fontFamily: "roboto-medium", fontSize: 16,
                          color: '#F08526',
                        }}>
                          {"25%"}
                        </Text>
                        <Text style={{
                          marginLeft: 10, marginTop: 20, fontFamily: "roboto-regular", fontSize: 16,
                          color: '#393D54',
                        }}>
                          {"Debt"}
                        </Text>
                      </View>
                    </View>

                    <View>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{
                          marginLeft: 10, marginTop: 20, fontFamily: "roboto-medium", fontSize: 16,
                          color: '#56D057',
                        }}>
                          {"10%"}
                        </Text>
                        <Text style={{
                          marginLeft: 10, marginTop: 20, fontFamily: "roboto-regular", fontSize: 16,
                          color: '#393D54',
                        }}>
                          {"Liquid"}
                        </Text>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{
                          marginLeft: 10, marginTop: 20, fontFamily: "roboto-medium", fontSize: 16,
                          color: '#63748D',
                        }}>
                          {"15%"}
                        </Text>
                        <Text style={{
                          marginLeft: 10, marginTop: 20, fontFamily: "roboto-regular", fontSize: 16,
                          color: '#393D54',
                        }}>
                          {"Others"}
                        </Text>
                      </View>
                    </View>

                  </View>



                </View>

              </View>

              <View style={{ backgroundColor: '#FFFFFF', marginTop: 10 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                  <Text style={{
                    marginLeft: 20, marginTop: 20, fontFamily: "roboto-medium", fontSize: 16,
                    color: '#393D54',
                  }}>
                    {"Upcoming SIPs"}
                  </Text>

                  <View style={{ flexDirection: 'row', marginRight: 20, alignContent: 'center', alignSelf: 'center' }}>

                    <Text style={{
                      marginLeft: 20, marginTop: 20, fontFamily: "roboto-regular", fontSize: 14,
                      color: '#3041A7',
                    }}>
                      {"SEE ALL"}
                    </Text>

                    <AntDesign name='right' color='#3041A7' size={18} borderColor='#000'
                      style={{ marginTop: 21, marginLeft: 5 }} />

                  </View>

                </View>



                <View style={{ flexDirection: 'row', margin: 20 }}>

                  <View style={{ backgroundColor: '#E5F9E7', paddingVertical: 10, paddingHorizontal: 15, borderBottomRightRadius: 30 }}>

                    <Text style={{
                      alignSelf: 'center', fontFamily: "roboto-bold", fontSize: 14,
                      color: '#31AB3F',
                    }}>
                      {"Apr"}
                    </Text>

                    <Text style={{
                      alignSelf: 'center', fontFamily: "roboto-regular", fontSize: 20, color: '#31AB3F',
                    }}>
                      {"3"}
                    </Text>

                  </View>

                  <View style={{ alignSelf: 'center', marginLeft: 10, flex: 1 }}>

                    <Text style={{
                      fontFamily: "roboto-medium", fontSize: 14, color: '#393D54',
                    }}>
                      {"₹ 2,500"}
                    </Text>

                    <Text style={{
                      fontFamily: "roboto-regular", fontSize: 16, color: '#818181',
                    }}>
                      {"Invesco India Gold Growth Direct..."}

                    </Text>
                  </View>

                </View>

                <View style={{ flexDirection: 'row', margin: 20, marginTop: 0 }}>

                  <View style={{ backgroundColor: '#E5F9E7', paddingVertical: 10, paddingHorizontal: 15, borderBottomRightRadius: 30 }}>

                    <Text style={{
                      alignSelf: 'center', fontFamily: "roboto-bold", fontSize: 14,
                      color: '#31AB3F',
                    }}>
                      {"Apr"}
                    </Text>

                    <Text style={{
                      alignSelf: 'center', fontFamily: "roboto-regular", fontSize: 20, color: '#31AB3F',
                    }}>
                      {"3"}
                    </Text>

                  </View>

                  <View style={{ alignSelf: 'center', marginLeft: 10, flex: 1 }}>
                    <Text style={{
                      fontFamily: "roboto-medium", fontSize: 14, color: '#393D54',
                    }}>
                      {"₹ 2,500"}
                    </Text>

                    <Text style={{
                      fontFamily: "roboto-regular", fontSize: 16, color: '#818181',
                    }}>
                      {"Invesco India Gold Growth Direct..."}
                    </Text>

                  </View>

                </View>
              </View>

              <View style={{
                elevation: 4, shadowOffset: 2,
                shadowColor: '818181',
              }}>
                <ImageBackground source={Images.background}
                  borderRadius={2}
                  style={{ marginRight: 20, marginLeft: 20, padding: 10, flexDirection: 'row' }} >

                  <Image
                    source={Images.file}
                    style={{ alignSelf: 'flex-start', }} />

                  <Text style={{
                    fontFamily: "roboto-meduim", fontSize: 16, color: '#1A9483', alignSelf: 'center', marginLeft: 20
                  }}>
                    {"Reports"}
                  </Text>

                </ImageBackground>
              </View>

              <View style={{
                marginTop: 20, marginRight: 20, marginLeft: 20, padding: 10,
                flexDirection: 'row', backgroundColor: '#FFFFFF', elevation: 4, shadowOffset: 2,
                shadowColor: '818181', borderRadius: 2
              }}>

                <Image
                  source={Images.support}
                  style={{ alignSelf: 'flex-start', }} />

                <Text style={{
                  fontFamily: "roboto-meduim", fontSize: 16, color: '#1A9483', alignSelf: 'center', marginLeft: 20
                }}>
                  {"Need Support?"}
                </Text>

              </View>

              <View style={{ height: 120 }} />

            </View>


          </ScrollView>

          <ToolbarFooter global_navigation={this.props.navigation} />

          {/* {!this.state.connection_status ?
            <ToolbarFooter global_navigation={this.props.navigation} param_title={"You are Offline"} />
            : null
          } */}
        </View>

      </SafeAreaView >
    );
  }
}

const styles = {

}