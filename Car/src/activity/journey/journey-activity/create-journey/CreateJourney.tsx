import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FreeButtonChoiceAlert from "../segment-control-activities/touchable/alerts/FreeButtonChoiceAlert";
import PaidButtonChoiceAlert from "../segment-control-activities/touchable/alerts/PaidButtonChoiceAlert";
import TouchableDateTimePicker from "../segment-control-activities/touchable/datetime-picker/TouchableDateTimePicker";
import JourneyCreationDropDownPicker from "../segment-control-activities/touchable/dropdown-picker/JourneyCreationDropDownPicker";
import SeatsInputSpinner from "../segment-control-activities/touchable/input-spinner/SeatsInputSpinner";
import TouchableMapBar from "../segment-control-activities/touchable/map-bar/TouchableMapBar";
import { CreateJourneyStyle } from "./CreateJourneyStyle";

export default function CreateJourney () {
    const [isVisibleJourneyTypeDropDown, setIsVisibleJourneyTypeDropDown] = useState(false);
    const [isVisibleCarDropDown, setIsVisibleCarDropDown] = useState(false);
    const [state, setState] = useState();

    console.log(state);

    function changeJourneyTypeDropDownVisibility (){
        setIsVisibleJourneyTypeDropDown(true);
        setIsVisibleCarDropDown(false);
    }
    function changeCarDropDownVisibility (){
        setIsVisibleJourneyTypeDropDown(false);
        setIsVisibleCarDropDown(true);
    }
    function closeAllDropDowns (){
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
                    { label: "Own Car", value: "own car" },
                    { label: "Taxi", value: "taxi" },
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
                    { label: "Volkswagen Jetta", value: "volkswagen jetta" },
                    { label: "Ford Fiesta", value: "ford fiesta" },
                    { label: "Toyota Camry", value: "toyota camry" },
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
    );
}
