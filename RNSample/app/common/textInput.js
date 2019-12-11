import React from 'react';

import {
  PixelRatio,
  StyleSheet,
  TextInput,
  View,
  Text
} from 'react-native';
import Config from "../config/config";
//import I18n from "../assets/localization/i18n";

class _TextInput extends React.Component {
  constructor(props) {
    super(props);
  }

  setNativeProps(...args) {
    this.refs.input.setNativeProps(...args);
  }

  blur() {
    this.refs.input.blur();
  }

  focus() {
    this.refs.input.focus();
  }

  render() {
    return (
    //   <TextInput
    //     ref='input'
    //     {...this.props}
    //     style={[styles.input, this.props.style]}
    //   />
    <View>
    <Text style={styles.labelContainer}>{this.props.textHeader}</Text>

    <View style={styles.textInputWrapper}
                        // accessible={true}
                        // accessibilityLabel={this.props.adaLabel+ " " + I18n.t('accessible_double_tap_textfield')}
                        >
    
        <TextInput
            style={[styles.textInput, this.props.style]}
            {...this.props}
            importantForAccessibility="no"
            />
    </View>
    </View>

    );
  }
}

const styles = StyleSheet.create({
//   input: {
//     borderWidth: 1 / PixelRatio.get(),
//     borderColor: cssVar('gray50'),
//     padding: 10,
//     fontFamily: cssVar('fontRegular'),
//     color: cssVar('gray90'),
//     fontSize: 8, // make it small to know it's not set
//   },
labelContainer: {
    paddingTop: 30,
    paddingBottom: 10,
    color: Config.colors.blackColor,
    //fontFamily: Config.fontFamily.font_sourceSansPro_regular,
    //fontSize: Config.fonts.font_2_1,
},
textInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 4,
    borderColor: '#669bac',
    borderBottomWidth: 2,
},

textInput: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 5,
    paddingLeft: 5,
    //fontSize: Config.fonts.font_2_1,
    //fontFamily: Config.fontFamily.font_sourceSansPro_regular,
    color: Config.colors.blackColor,
},

});

export default _TextInput;
