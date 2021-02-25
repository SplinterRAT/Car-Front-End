import React, { useState } from 'react';
import { Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Divider } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import JourneyCreationDropDownPickerStyle from './JourneyCreationDropDownPickerStyle';

function JourneyCreationDropDownPicker(props: any) {
    const [state, setState] = useState();
    return (
        <View>
            <Text style={[JourneyCreationDropDownPickerStyle.staticPlaceholder]}>
                 {props.placeholder}
            </Text>
            <DropDownPicker
                items={props?.items}
                customArrowDown={() => (
                    <Ionicons name="caret-down-outline" size={18} />
                )}
                customArrowUp={() => (
                    <Ionicons name="caret-up-outline" size={18} />
                )}
                arrowStyle={JourneyCreationDropDownPickerStyle.arrow}
                searchable={props.searchable}
                placeholder={''}
                searchablePlaceholder={'Manual input'}
                searchableStyle={JourneyCreationDropDownPickerStyle.searchable}
                renderSeperator={() => (
                    <Divider style={JourneyCreationDropDownPickerStyle.divider} />
                )}
                zIndex={props.zIndex}
                style={JourneyCreationDropDownPickerStyle.style}
                dropDownStyle={JourneyCreationDropDownPickerStyle.dropDownStyle}
                selectedLabelStyle={[JourneyCreationDropDownPickerStyle.selectedLabelStyle, {paddingLeft: props.paddingLeft}]}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                onChangeItem={props.onChangeItem}
                isVisible={props.isVisible}
                onOpen={props.onOpen}
                onClose={props.onClose}
            />
        </View>

    )
}

export default JourneyCreationDropDownPicker;
