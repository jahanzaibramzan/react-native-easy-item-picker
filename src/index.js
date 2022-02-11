import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, createRef } from 'react'
import MyPicker from './components/MyPicker'

const SELECTED_CLR = "#000"
const UNSELECTED_CLR = "#999"
const ARROW_CLR = "#000"
const ITEM_TXT_CLR = "#000"

const index = ({
    title, noSelectionTxt, selectedColor, unSelectedColor, txtFontFamily, bgContainerStyle,
    arrowColor, itemTxtColor, onSelectChange, options, titleStyle, cancelBtnColor
}) => {

    const mNoSelectionTxt = noSelectionTxt ? noSelectionTxt : "Select an item"
    const mSelectedClr = selectedColor ? selectedColor : SELECTED_CLR
    const mUnSelectedClr = unSelectedColor ? unSelectedColor : UNSELECTED_CLR
    const mArrowClr = arrowColor ? arrowColor : ARROW_CLR
    const mItemTxtClr = itemTxtColor ? itemTxtColor : ITEM_TXT_CLR

    const mypickerModal = createRef()
    const [selectedItem, setSelectedItem] = useState(null)

    return (
        <View>

            <MyPicker
                ref={mypickerModal}
                title={title}
                options={options}
                txtFontFamily={txtFontFamily}
                itemTxtColor={mItemTxtClr}
                cancelBtnColor={cancelBtnColor}
                titleStyle={titleStyle}
                onItemSelected={(item) => {
                    setSelectedItem(item)
                    onSelectChange && onSelectChange(item)
                }}
            />

            <TouchableOpacity
                style={{
                    borderRadius: 10, padding: 10, borderWidth: 1, borderColor: mSelectedClr,
                    flexDirection: "row", alignItems: "center", ...bgContainerStyle
                }}
                onPress={() => { mypickerModal.current.showModal() }}>

                <Text style={{
                    color: selectedItem ? mSelectedClr : mUnSelectedClr,
                    flex: 1, fontSize: 14, ...txtFontFamily
                }}>
                    {selectedItem ? selectedItem.key : mNoSelectionTxt}
                </Text>

                <Image style={{ width: 14, height: 14, tintColor: mArrowClr }} resizeMode="contain"
                    source={require("./images/arrow.png")}
                />

            </TouchableOpacity>

        </View>
    )

}

export default index