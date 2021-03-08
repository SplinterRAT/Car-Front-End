import React from "react";
import { Text, View } from "react-native";
import InputSpinner from "react-native-input-spinner";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SeatsInputSpinnerStyle } from "./SeatsInputSpinnerStyle";

function SeatsInputSpinner (){
    const availableSeats = 3;

    return (
        <View style={SeatsInputSpinnerStyle.container}>
            <Text style={SeatsInputSpinnerStyle.descriptionText}>
                Available seats:
            </Text>
            <View>
                <InputSpinner
                    max={10}
                    min={1}
                    step={1}
                    style={SeatsInputSpinnerStyle.spinnerContainer}
                    colorPress={"#65656A"}
                    color={"#D7D7DC"}
                    height={44}
                    buttonLeftImage={
                        <Ionicons name="caret-down-outline" size={18} />
                    }
                    buttonRightImage={
                        <Ionicons name="caret-up-outline" size={18} />
                    }
                    fontSize={16}
                    inputStyle={SeatsInputSpinnerStyle.input}
                    editable={false}
                    rounded={false}
                    showBorder={true}
                    value={availableSeats}
                    onChange={(num: any) => {
                        console.log(num);
                    }} />
            </View>
        </View>
    );
}

export default SeatsInputSpinner;