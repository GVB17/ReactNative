/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import CustomLogoView from '../common/customLogoView';
import SegmentedControlTab from "react-native-segmented-control-tab";
import config from "../config/config";
import TextInput from "../common/textInput";
import Button from "../common/customButton";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// const Login: () => React$Node = () => {

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
  }

  handleIndexChange = (index) => {
    this.setState({
      selectedIndex: index,
    });
  };
  renderSegment() {
    let renderedSegment = null;
    if (this.state.selectedIndex == 0) {
      renderedSegment = (
        <View style={styles.sectionContainer}>
          <TextInput
            autoCapitalize='none'
            returnKeyType="done"
            autoCorrect={false}
            ref={(input) => this.emailInputValue = input}
            keyboardType='email-address'
            underlineColorAndroid={'transparent'}
            textHeader={"Email"}
            //value={this.state.emailInputValue}
            importantForAccessibility="no"
            //onChangeText={(text) => this.onChangedEmailValue(text)}
          // placeholder={I18n.t('accessible_forgotpasswordemail_textfield')}
          />

          <TextInput
            autoCapitalize='none'
            returnKeyType="done"
            autoCorrect={false}
            ref={(input) => this.emailInputValue = input}
            keyboardType='email-address'
            underlineColorAndroid={'transparent'}
            textHeader={"Email"}
            //value={this.state.emailInputValue}
            importantForAccessibility="no"
            //onChangeText={(text) => this.onChangedEmailValue(text)}
          // placeholder={I18n.t('accessible_forgotpasswordemail_textfield')}
          />

      <View style={{backgroundColor:'red', flexDirection: 'column',   }}>
          <Button
            backgroundColor={config.colors.button_bg_primaryColor}
            textColor={'white'}
            buttonTitle={'Login'}
            marginTop={50}

            //textFontFamily={config.fontFamily.font_sourceSansPro_regular}
            //textFontSize={config.fonts.font_2_1}
            borderRadius={4}
            padding={8}
            textFontWeight={'500'}
          //onButtonPress={this.onSSNLoginButtonPress}
          />
          </View>


          <Button
            backgroundColor={config.colors.button_bg_primaryColor}
            textColor={'white'}
            buttonTitle={'Login'}
            marginTop={50}
            //textFontFamily={config.fontFamily.font_sourceSansPro_regular}
            //textFontSize={config.fonts.font_2_1}
            borderRadius={4}
            padding={8}
            textFontWeight={'500'}
          //onButtonPress={this.onSSNLoginButtonPress}
          />
          <View style={{backgroundColor:'white', height: 40}}/>
        </View>
      );
    } else {
      renderedSegment = (
        <View style={styles.sectionContainer}>
          <TextInput
            autoCapitalize='none'
            returnKeyType="done"
            autoCorrect={false}
            ref={(input) => this.emailInputValue = input}
            keyboardType='email-address'
            underlineColorAndroid={'transparent'}
            textHeader={"Email1"}
            //value={this.state.emailInputValue}
            importantForAccessibility="no"
            //onChangeText={(text) => this.onChangedEmailValue(text)}
          // placeholder={I18n.t('accessible_forgotpasswordemail_textfield')}
          />

          <TextInput
            autoCapitalize='none'
            returnKeyType="done"
            autoCorrect={false}
            ref={(input) => this.emailInputValue = input}
            keyboardType='email-address'
            underlineColorAndroid={'transparent'}
            textHeader={"Email"}
            //value={this.state.emailInputValue}
            importantForAccessibility="no"
            //onChangeText={(text) => this.onChangedEmailValue(text)}
          // placeholder={I18n.t('accessible_forgotpasswordemail_textfield')}
          />

          <Button
            backgroundColor={config.colors.button_bg_primaryColor}
            textColor={config.colors.button_bg_primaryColor}
            buttonTitle={'Login'}
            marginTop={50}
            Button={50}
            //textFontFamily={config.fontFamily.font_sourceSansPro_regular}
            //textFontSize={config.fonts.font_2_1}
            borderRadius={4}
            padding={8}
            textFontWeight={'500'}
          //onButtonPress={this.onSSNLoginButtonPress}
          />

          <Button
            backgroundColor={config.colors.button_bg_primaryColor}
            textColor={config.colors.button_bg_primaryColor}
            buttonTitle={'Login'}
            marginTop={50}
            //textFontFamily={config.fontFamily.font_sourceSansPro_regular}
            //textFontSize={config.fonts.font_2_1}
            borderRadius={4}
            padding={8}
            textFontWeight={'500'}
          //onButtonPress={this.onSSNLoginButtonPress}
          />
          <View style={{backgroundColor:'white', height: 40}}/>
        </View>
      );
    }

    return renderedSegment;
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView >
          {/* <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}> */}
          <KeyboardAwareScrollView style={styles.wrapper} enableOnAndroid={true} bounces={false} keyboardShouldPersistTaps='always'>
            <View style={[styles.body, {flex:1, flexDirection: 'column'}]}>
              {/* <View style={styles.sectionContainer}> */}
              <View style={{ paddingHorizontal: 0, backgroundColor: 'white' }}>

                <CustomLogoView />

                {/* </View> */}
                {/* <View style={styles.sectionContainer}> */}
                {/* <View style={{marginTop: 32, paddingHorizontal: 0, backgroundColor:'blue'}}> */}
                <View style={{marginLeft: 5, marginRight: 5,
                  backgroundColor: 'white', shadowColor: 'black', shadowOffset: { width: 0, height: 2 },
                  shadowRadius: 6, shadowOpacity: 0.26, elevation: 8, borderRadius: 10, padding: 0
                }}>
                  <View style={{ backgroundColor: 'white'}}>
                    <SegmentedControlTab
                      values={['Venkat', 'ggg']}

                      selectedIndex={this.state.selectedIndex}
                      onTabPress={this.handleIndexChange}
                      tabsContainerStyle={styles.segmentContainer}
                      activeTabStyle={styles.activeTabStyle}
                      tabBadgeContainerStyle={styles.activeTabStyle}
                      tabTextStyle={styles.tabText}
                      tabStyle={styles.tabStyleBorder}
                      borderRadius={0}
                      activeTabTextStyle={{ color: 'red' }}
                    />
                  </View>
                
                {/* <View style={{marginTop: 32, paddingHorizontal: 24, backgroundColor:'blue'}}> */}
                <View style={{ marginLeft: 5, marginRight: 5, backgroundColor: 'white' }}>

                  {this.renderSegment()}

                </View>

                </View>
                </View>

              </View>
              {/* </ScrollView> */}
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </>
        );
      }
    };
    
const styles = StyleSheet.create({
          scrollView: {
          backgroundColor: Colors.white,
      },
  engine: {
          position: 'absolute',
        right: 0,
      },
  body: {
          backgroundColor: Colors.white,
      },
  sectionContainer: {
          marginTop: 32,
        paddingHorizontal: 24,
      },
  sectionTitle: {
          fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
      },
  sectionDescription: {
          marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
      },
  highlight: {
          fontWeight: '700',
      },
  footer: {
          color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
      },
  segmentContainer: {
          width: '100%',
        height: 'auto',
        // backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        //paddingTop: 20,
        //paddingBottom: 20,
    
        //backgroundColor: 'transparent'
        // padding: 20,
      },
  activeTabStyle: {
          //backgroundColor: config.colors.text_forgotpwd_color,
          backgroundColor: 'transparent',
        borderBottomWidth: 2,
        borderBottomColor: 'red'
      },
  tabText: {
          fontFamily: config.fonts.font_AvenirBook,
        color: config.colors.text_forgotpwd_color,
        fontSize: config.fonts.font_1_8,
      },
  tabStyleBorder: {
          //borderColor: config.colors.text_forgotpwd_color,
          borderColor: 'transparent'
      },
    });
    
    export default Login;
