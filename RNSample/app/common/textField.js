import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
// import TextStyles from '../../helpers/TextStyles';
import config from "../config/config";
//import RF from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
viewContainer: {
    borderColor: config.colors.textInput_borderColor,
    borderRadius: 4,
    borderWidth: 1,
    height: "8%",
    marginTop: 5,
    justifyContent: 'center'
},
textInputView: {
    paddingLeft: 5,
    paddingRight: 5,
    //fontSize: RF(config.fonts.font_2_1),
},

});

const TextField = props => (
  <View style={styles.viewContainer}>
    <TextInput
      style={styles.textInputView}
    />
  </View>
);


export default TextField;
