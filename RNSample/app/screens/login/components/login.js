import React, { Component } from 'react';
import { StyleSheet, View, NetInfo, Text } from 'react-native';
import CustomHeader from '../../../common/Header';
import imagePath from '../../../common/imagePath';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loader from "../../../common/activityLoader";
import { checkConnection } from "../../../common/utils";
import { userLogin, clearData } from "../actions";
import { LocaleConfig } from 'react-native-calendars';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

let isChecked = false;

LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';

const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
const workout = { key: 'workout', color: 'green' };

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pwd: '',
            emailInputValue: '',
            firstName: '',
            lastName: '',
            dob: '',
            password: {
                value: '',
                isValid: false
            },
            checked: true,
            userLoginData: null,
        }
    }

    static getDerivedStateFromProps(props, state) {

        if (props.userLoginData.data && isChecked == true) {
            if (props.userLoginData.data) {

                isChecked = false;
                props.clearData();
                return ({
                    checkNavigation: true,
                    isCheckedAlert: true,
                    okBtnTitle: I18n.t('ok_key'),
                    cancelBtnTitle: '',
                    alertTitle: I18n.t('registration_successMsg_title'),
                    alertMessage: I18n.t('registration_successMsg'),
                });
            }
            else if (props.error) {
                isChecked = false;
                let message1 = props.error.message;
                let title1 = props.error.title;
                props.clearData();
                return ({
                    checkNavigation: false,
                    isCheckedAlert: true,
                    alertTitle: title1,
                    alertMessage: message1,
                    okBtnTitle: I18n.t('ok_key'),
                    cancelBtnTitle: '',
                });
            }
            return null;
        }
    }


    onSubmitButtonPress = () => {

        let input = {

            email: 'test@gmail.com',
            password: '123456',
        };

        this.props.userLogin(input);

        // checkConnection().then((connected) => {
        //     if (connected) {
        //         isChecked = true;
        //         if (this.props.isLoading) return;
        //         this.props.userLogin(input);
        //     }
        //     else {
        //         this.setState({
        //             checkNavigation: false,
        //             isCheckedAlert: true,
        //             okBtnTitle: I18n.t('ok_key'),
        //             cancelBtnTitle: '',
        //             alertTitle: I18n.t('error_key'),
        //             alertMessage: I18n.t('no_internet_connection'),
        //         });
        //     }
        // });


        // NetInfo.getConnectionInfo().then((connectionInfo) => {
        //     console.log(
        //       'Initial, type: ' +
        //         connectionInfo.type +
        //         ', effectiveType: ' +
        //         connectionInfo.effectiveType,
        //     );
        //   });
        //   function handleFirstConnectivityChange(connectionInfo) {
        //     console.log(
        //       'First change, type: ' +
        //         connectionInfo.type +
        //         ', effectiveType: ' +
        //         connectionInfo.effectiveType,
        //     );
        //     NetInfo.removeEventListener(
        //       'connectionChange',
        //       handleFirstConnectivityChange,
        //     );
        //   }
        //   NetInfo.addEventListener('connectionChange', handleFirstConnectivityChange);
    }

    render() {
        return (

            <View style={styles.screen}>
                <CustomHeader
                    headerTitle={'Login'}
                    leftText={'Back'}
                    leftImage={imagePath.backArrow}
                    rightText={'Next'}
                    rightImage={imagePath.backArrow}
                    //onLeftButtonPress={this.onBackButtonPress.bind(this)}
                    onRightButtonPress={this.onSubmitButtonPress.bind(this)}
                />

                {/* <Loader loading={this.props.isLoading} /> */}

                {/* <Calendar
                    // Initially visible month. Default = Date()
                    current={'2012-03-01'}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'2012-05-10'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2012-05-30'}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => { console.log('selected day', day) }}
                    // Handler which gets executed on day long press. Default = undefined
                    onDayLongPress={(day) => { console.log('selected day', day) }}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy MM'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month) => { console.log('month changed', month) }}
                    // Hide month navigation arrows. Default = false
                    hideArrows={true}
                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                    renderArrow={(direction) => (<Arrow />)}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={true}
                    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    disableMonthChange={true}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={1}
                    // Hide day names. Default = false
                    hideDayNames={true}
                    // Show week numbers to the left. Default = false
                    showWeekNumbers={true}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={substractMonth => substractMonth()}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                    onPressArrowRight={addMonth => addMonth()}
                /> */}

                {/* <Calendar
                    // Collection of dates that have to be marked. Default = {}
                    markedDates={{
                        '2012-05-16': { selected: true, marked: true, selectedColor: 'blue' },
                        '2012-05-17': { marked: true },
                        '2012-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
                        '2012-05-19': { disabled: true, disableTouchEvent: true }
                    }}
                /> */}

                {/* <Calendar
                    markedDates={{
                        '2019-10-25': { dots: [vacation, massage, workout], selected: true, selectedColor: 'red' },
                        '2019-10-26': { dots: [massage, workout], disabled: true }
                    }}
                    markingType={'multi-dot'}
                /> */}

                {/* <Calendar
                    // Collection of dates that have to be colored in a special way. Default = {}
                    markedDates={{
                        '2019-10-20': { textColor: 'green' },
                        '2019-10-22': { startingDay: true, color: 'green' },
                        '2019-10-23': { selected: true, endingDay: true, color: 'green', textColor: 'gray' },
                        '2019-10-04': { disabled: true, startingDay: true, color: 'green', endingDay: true }
                    }}
                    // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
                    markingType={'period'}
                /> */}

                {/* <Calendar
                    markedDates={{
                        '2019-12-14': {
                            periods: [
                                { startingDay: false, endingDay: true, color: '#5f9ea0' },
                                { startingDay: false, endingDay: true, color: '#ffa500' },
                                { startingDay: true, endingDay: false, color: '#f0e68c' },
                            ]
                        },
                        '2019-12-15': {
                            periods: [
                                { startingDay: true, endingDay: false, color: '#ffa500' },
                                { color: 'transparent' },
                                { startingDay: false, endingDay: false, color: '#f0e68c' },
                            ]
                        },
                    }}
                    // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
                    markingType='multi-period'
                /> */}

                {/* <Calendar
                    // Date marking style [simple/period/multi-dot/single]. Default = 'simple'
                    markingType={'custom'}
                    markedDates={{
                        '2019-10-28': {
                            customStyles: {
                                container: {
                                    backgroundColor: 'green'
                                },
                                text: {
                                    color: 'black',
                                    fontWeight: 'bold'
                                },
                            },
                        },
                        '2019-10-29': {
                            customStyles: {
                                container: {
                                    backgroundColor: 'white',
                                    elevation: 2
                                },
                                text: {
                                    color: 'blue'
                                },
                            }
                        }
                    }}
                /> */}

                {/* <Calendar
                    // Specify style for calendar container element. Default = {}
                    style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        height: 350
                    }}
                    // Specify theme properties to override specific styles for calendar parts. Default = {}
                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#b6c1cd',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: 'orange',
                        monthTextColor: 'blue',
                        indicatorColor: 'blue',
                        // textDayFontFamily: 'monospace',
                        // textMonthFontFamily: 'monospace',
                        // textDayHeaderFontFamily: 'monospace',
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16
                    }}
                /> */}

                {/* <Calendar
                    style={[styles.calendar, { height: 300 }]}
                    dayComponent={({ date, state }) => {
                        return (<View style={{ flex: 1 }}><Text style={{ textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black' }}>{date.day}</Text></View>);
                    }}
                /> */}

                {/* <CalendarList
                    // Callback which gets executed when visible months change in scroll view. Default = undefined
                    onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    pastScrollRange={50}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={50}
                    // Enable or disable scrolling of calendar list
                    scrollEnabled={true}
                    // Enable or disable vertical scroll indicator. Default = false
                    showScrollIndicator={true}
                //...calendarParams
                /> */}

                {/* <CalendarList
                    // Enable horizontal scrolling, default = false
                    horizontal={true}
                    // Enable paging on horizontal, default = false
                    pagingEnabled={true}
                    // Set custom calendarWidth.
                    calendarWidth={320}
                //...calendarListParams
                //...calendarParams
                /> */}

                <Agenda
                    // the list of items that have to be displayed in agenda. If you want to render item as empty date
                    // the value of date key kas to be an empty array []. If there exists no value for date key it is
                    // considered that the date in question is not yet loaded
                    items={{
                        '2019-12-22': [{ text: 'item 1 - any js object' }],
                        '2019-12-23': [{ text: 'item 2 - any js object' }],
                        '2019-12-24': [],
                        '2019-12-25': [{ text: 'item 3 - any js object' }, { text: 'any js object' }]
                    }}
                    // callback that gets called when items for a certain month should be loaded (month became visible)
                    loadItemsForMonth={(month) => { console.log('trigger items loading') }}
                    // callback that fires when the calendar is opened or closed
                    onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
                    // callback that gets called on day press
                    onDayPress={(day) => { console.log('day pressed') }}
                    // callback that gets called when day changes while scrolling agenda list
                    onDayChange={(day) => { console.log('day changed') }}
                    // initially selected day
                    selected={'2012-05-16'}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'2012-05-10'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2012-05-30'}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    pastScrollRange={50}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={50}
                    // specify how each item should be rendered in agenda
                    renderItem={(item, firstItemInDay) => { return (<View />); }}
                    // specify how each date should be rendered. day can be undefined if the item is not first in that day.
                    renderDay={(day, item) => { return (<View />); }}
                    // specify how empty date content with no items should be rendered
                    renderEmptyDate={() => { return (<View />); }}
                    // specify how agenda knob should look like
                    renderKnob={() => { return (<View />); }}
                    // specify what should be rendered instead of ActivityIndicator
                    renderEmptyData={() => { return (<View />); }}
                    // specify your item comparison function for increased performance
                    rowHasChanged={(r1, r2) => { return r1.text !== r2.text }}
                    // Hide knob button. Default = false
                    hideKnob={true}
                    // By default, agenda dates are marked if they have at least one item, but you can override this if needed
                    markedDates={{
                        '2019-12-16': { selected: true, marked: true },
                        '2019-12-17': { marked: true },
                        '2019-12-18': { disabled: true }
                    }}
                    // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
                    onRefresh={() => console.log('refreshing...')}
                    // Set this true while waiting for new data from a refresh
                    refreshing={false}
                    // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
                    refreshControl={null}
                    // agenda theme
                    theme={{
                        // ...calendarTheme,
                        agendaDayTextColor: 'yellow',
                        agendaDayNumColor: 'green',
                        agendaTodayColor: 'red',
                        agendaKnobColor: 'blue'
                    }}
                    // agenda container style
                    style={{}}
                />

            </View>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        userLogin,
        clearData
    }, dispatch);
};

const mapStateToProps = state => ({
    isLoading: state.loginCombineReducer.loginReducers.isLoading,
    userLoginData: state.loginCombineReducer.loginReducers,
    error: state.loginCombineReducer.loginReducers.error,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});