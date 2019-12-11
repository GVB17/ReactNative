import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
export default class CustomButton extends Component {
    render() {
        const {
            backgroundColor,
            buttonWidth,
            buttonHeight,
            onButtonPress,
            buttonTitle,
            textColor,
            accesLabel,
            borderWidth,
            borderRadius,
            borderColor,
            marginTop,
            marginLeft,
            marginRight,
            textFontFamily,
            textFontSize,
            textFontWeight,
            textDecorationLine,
            flex:flexValue,
            padding,
            margin,
            paddingLeft,
            paddingRight,
            disabledChk,
            opacity,
            accessibilityRole

        } = this.props;

        return (
            <TouchableOpacity
                style={[styles.buttonContainer, {
                    flex: flexValue,
                    width: buttonWidth,
                    height: buttonHeight,
                    backgroundColor: backgroundColor,
                    borderWidth: borderWidth,
                    borderColor: borderColor,
                    borderRadius: borderRadius,
                    marginTop: marginTop,
                    marginLeft: marginLeft,
                    marginRight: marginRight,
                    padding: padding,
                    paddingLeft: paddingLeft,
                    paddingRight: paddingRight,
                    margin: margin,
                    opacity: opacity
                }]}
                accessibilityLabel={accesLabel}
                accessibilityRole={accessibilityRole}
                disabled={disabledChk}
                onPress={onButtonPress}>
                <Text style={[styles.buttonText, {
                    color: textColor,
                    fontSize: textFontSize,
                    fontFamily: textFontFamily,
                    fontWeight:textFontWeight,
                    textDecorationLine:textDecorationLine
        }]}>{buttonTitle}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});
