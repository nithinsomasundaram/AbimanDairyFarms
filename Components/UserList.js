import { StyleSheet, Text, View, Dimensions, TextInput, ScrollView } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react'
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-web';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const UserList = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Weekly', value: 'apple' },
        { label: 'Monthly', value: 'banana' }
    ]);
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <View style={{ width: '60%' }}> <TextInput style={styles.nameBox} placeholder='Enter the name' /></View>
                <DropDownPicker
                    style={styles.selectFilter}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
            </View>
            <ScrollView style={{ width: '100%', marginTop: 20 }}>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
                <TouchableOpacity style={styles.userView}> User 1</TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default UserList

const styles = StyleSheet.create({
    container: {
        height: screenHeight,
        width: screenWidth
    },
    box1: {
        width: screenWidth,
        height: screenHeight / 15,
        flexDirection: 'row',
        marginTop: 10
    },
    nameBox: {
        height: '100%',
        width: '50%',
        alignItems: 'center',
        fontSize: 15,
        borderColor: '#000000',
        borderWidth: 2
    },
    selectFilter: {
        width: '40%',
        marginEnd: 20
    },
    userView: {
        width: screenWidth,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        justifyContent: 'center'
    }
})