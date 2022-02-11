import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const PickerItem = ({ title, txtFontFamily, isSelected, itemTxtColor, onPress }) => {
    return (
        <TouchableOpacity style={{
            paddingHorizontal: 7, paddingVertical: 12, borderBottomColor: "#999",
            borderBottomWidth: 0.75, flexDirection: "row"
        }} onPress={() => { onPress && onPress() }}>
            <Text style={{ flex: 1, fontSize: 16, ...txtFontFamily, color: itemTxtColor }}
                numberOfLines={2}
            >
                {title}
            </Text>

            {isSelected &&
                <Image style={{ width: 24, height: 24, tintColor: itemTxtColor }}
                    source={require("../images/check.png")}
                    resizeMode="contain"
                />
            }

        </TouchableOpacity>
    )
}

export default PickerItem