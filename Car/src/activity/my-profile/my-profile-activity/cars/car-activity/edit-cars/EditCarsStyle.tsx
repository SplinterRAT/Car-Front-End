import { StyleSheet } from "react-native";

const EditCarsStyle = StyleSheet.create({
    wrapper: {
        flex: 1,
    },

    carAvatarContainer: {
        height: 200,
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },

    carButtonUpload: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        alignItems: "center",
        borderWidth: 2,
        marginRight: 24,
        marginBottom: 19
    },

    carButtonUploadText: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 20
    },

    inputsContainer: {
        marginRight: 24,
        marginLeft: 24
    },

    dropDownContainer: {
        marginVertical: 24
    },

    dropDownPicker: {
        marginBottom: 16
    },

    saveButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    carButtonSave: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },

    carButtonSaveText: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 20
    },

    carAvatar: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderWidth: 2,
        position: "absolute"
    },

    spinner: {
        marginLeft: 5
    }
});

export default EditCarsStyle;
