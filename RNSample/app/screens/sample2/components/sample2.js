import React, { Component } from 'react';
import { StyleSheet, View, NetInfo, Text, Picker, Alert, Button } from 'react-native';
import CustomHeader from '../../../common/Header';
import imagePath from '../../../common/imagePath';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { LocaleConfig } from 'react-native-calendars';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import moment from "moment";

LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';

class Sample2 extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    onSubmitButtonPress = () => {

        this.setState({ visible: true });

    }

    onPickerButtonPress = () => {
        console.log('picker')

    };

    render() {
        return (

            <View style={styles.screen}>
                <CustomHeader
                    headerTitle={'Login'}
                    rightImage={imagePath.backArrow}
                    onRightButtonPress={this.onSubmitButtonPress.bind(this)}
                />

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
                    // selected={'2012-05-16'}
                    selected={Date.now()}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'2012-05-10'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    // maxDate={'2012-05-30'}
                    maxDate={moment(new Date()).add(2, 'day').format('YYYY-MM-DD')}
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
    }, dispatch);
};

const mapStateToProps = state => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sample2);


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});