import { View, Text, Modal, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, forwardRef, useImperativeHandle } from 'react'
import PickerItem from './PickerItem'

const MyPicker = ({
    title, titleStyle, txtFontFamily, options, itemTxtColor, onItemSelected,
    cancelBtnColor
}, ref) => {

    const [selectedItem, setSelectedItem] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    function showModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    useImperativeHandle(ref, () => ({
        showModal, closeModal
    }))

    return (
        <Modal
            visible={isOpen}
            transparent
            onRequestClose={() => { setIsOpen(false) }}
        >
            <View style={{ flex: 1, justifyContent: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>

                <View style={{
                    backgroundColor: "#fff", padding: 15, borderRadius: 20,
                    borderWidth: 0.75, borderColor: "#ccc", margin: 10
                }}>

                    <Text style={{
                        color: "#000", fontSize: 18, fontWeight: "bold", marginBottom: 10,
                        textAlign: "center", ...txtFontFamily, ...titleStyle
                    }}>
                        {title}
                    </Text>

                    <FlatList
                        data={options}
                        keyExtractor={(item, index) => item.value}
                        renderItem={({ item, index }) => {
                            const isItemSelected = (selectedItem && (item.value == selectedItem.value))
                            return (
                                <PickerItem
                                    isSelected={isItemSelected}
                                    txtFontFamily={txtFontFamily}
                                    itemTxtColor={itemTxtColor}
                                    title={item.key} onPress={() => {
                                        handleOnSelectItem(item)
                                    }}
                                />
                            )
                        }}
                    />

                    <TouchableOpacity style={{
                        width: 100, paddingVertical: 10,
                        alignSelf: "flex-end", alignItems: "flex-end"
                    }} onPress={() => closeModal()}>
                        <Text style={{
                            color: cancelBtnColor ? cancelBtnColor : "red", fontSize: 14,
                            ...txtFontFamily,
                        }}>
                            {"Cancel"}
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>
        </Modal>
    )

    function handleOnSelectItem(item) {
        setSelectedItem(item)
        setIsOpen(false)
        onItemSelected && onItemSelected(item)
    }
}

export default forwardRef(MyPicker);