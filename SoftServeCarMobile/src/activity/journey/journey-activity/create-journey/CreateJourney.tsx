import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TouchableDateTimePicker from "../segment-control-activities/touchable/datetime-picker/TouchableDateTimePicker";
import TouchableMapBar from "../segment-control-activities/touchable/map-bar/TouchableMapBar";
import { CreateJourneyStyle } from "./CreateJourneyStyle";
import JourneyCreationDropDownPicker from "../segment-control-activities/dropdown-picker/JourneyCreationDropDownPicker";
import PaidButtonChoiceAlert from "../segment-control-activities/alerts/PaidButtonChoiceAlert";
import FreeButtonChoiceAlert from "../segment-control-activities/alerts/FreeButtonChoiceAlert";
import SeatsInputSpinner from "../segment-control-activities/input-spinner/SeatsInputSpinner";
import { onChange } from "react-native-reanimated";

export default function CreateJourney () {
    const [isVisibleJourneyTypeDropDown, setIsVisibleJourneyTypeDropDown] = useState(false);
    const [isVisibleCarDropDown, setIsVisibleCarDropDown] = useState(false);
    const [isVisibleDropDown, setIsVisibleDroDown] = useState(false);
    const [state, setState] = useState();

    function changeJourneyTypeDropDownVisibility(){
        setIsVisibleJourneyTypeDropDown(true);
        setIsVisibleCarDropDown(false);
    }
    function changeCarDropDownVisibility(){
        setIsVisibleJourneyTypeDropDown(false);
        setIsVisibleCarDropDown(true);
    }
    function closeAllDropDowns(){
        setIsVisibleJourneyTypeDropDown(false);
        setIsVisibleCarDropDown(false);
    }

    const [freeButtonStyle, setFreeButtonStyle] = useState(
        CreateJourneyStyle.activeButton
    );
    const [paidButtonStyle, setPaidButtonStyle] = useState(
        CreateJourneyStyle.unactiveButton
    );

    return (
        <ScrollView style={CreateJourneyStyle.container}>
            <TouchableMapBar
                directionType="From"
                iconName="disc-outline"
                defaultInputValue="Home"
                marB="5"
                marT="23"
            />
            <TouchableMapBar
                directionType="To"
                iconName="map"
                defaultInputValue="Work"
                marB="5"
                marT="10"
            />
            <TouchableMapBar
                directionType="Via"
                iconName="close"
                defaultInputValue="Bld. 'Bulgaria' 1"
                marB="10"
                marT="10"
            />
            <TouchableDateTimePicker
                iconName="time"
            />
            <JourneyCreationDropDownPicker
                items={[
                    { label: 'Own Car', value: 'own car' },
                    { label: 'Taxi', value: 'taxi' },
                ]}
                paddingLeft={100}
                placeholder='Journey type:' 
                isVisible={isVisibleJourneyTypeDropDown}
                onOpen={() => changeJourneyTypeDropDownVisibility()}
                onChangeItem={(item: { value: React.SetStateAction<undefined>; }) => 
                    {
                        setState(item.value);
                        closeAllDropDowns();
                    }
                }/>
            <JourneyCreationDropDownPicker
                items={[
                    { label: 'Volkswagen Jetta', value: 'volkswagen jetta' },
                    { label: 'Ford Fiesta', value: 'ford fiesta' },
                    { label: 'Toyota Camry', value: 'toyota camry' },
                ]}
                paddingLeft={105}
                searchable={true}
                placeholder='Choose a Car:' 
                isVisible={isVisibleCarDropDown}
                onOpen={() => changeCarDropDownVisibility()}
                onChangeItem={(item: { value: React.SetStateAction<undefined>; }) => 
                {
                    setState(item.value);
                    closeAllDropDowns();
                }
                }/>
            <SeatsInputSpinner/>
            <View style={CreateJourneyStyle.feeContainer}>
                <Text style={CreateJourneyStyle.text}>
                    Fee
                    </Text>
                <TouchableOpacity
                    style={[CreateJourneyStyle.feeButtonFree, freeButtonStyle]}
                    onPress={() => {
                        FreeButtonChoiceAlert();
                        setFreeButtonStyle(CreateJourneyStyle.activeButton);
                        setPaidButtonStyle(CreateJourneyStyle.unactiveButton);
                    }}>
                    <Text style={[CreateJourneyStyle.feeButtonText, freeButtonStyle]}>Free</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[CreateJourneyStyle.feeButtonPaid, paidButtonStyle]}
                    onPress={() => {
                        PaidButtonChoiceAlert();
                        setFreeButtonStyle(CreateJourneyStyle.unactiveButton);
                        setPaidButtonStyle(CreateJourneyStyle.activeButton);
                    }}>
                    <Text style={[CreateJourneyStyle.feeButtonText, paidButtonStyle]}>Paid</Text>
                </TouchableOpacity>
            </View>
            <View style={CreateJourneyStyle.commentsView}>
                <Text style={CreateJourneyStyle.commentsCaption}>Comments</Text>
                <TextInput
                    style={CreateJourneyStyle.TextInputStyle}
                    multiline={true}
                    maxLength={100}
                    numberOfLines={10}
                />
                <Text>Up to 100 symbols</Text>
            </View>

            <TouchableOpacity
                style={[CreateJourneyStyle.publishButton]}>
                <Text style={CreateJourneyStyle.publishButtonText}>Publish</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
