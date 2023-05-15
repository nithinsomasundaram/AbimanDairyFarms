import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('UserList')} style={styles.btn1}><Text>USER LIST</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn1}><Text>ADD/DELETE USER</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn1}><Text>ADD DATA</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn1}><Text>VIEW DATA</Text></TouchableOpacity>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn1: {
        margin: 15,
        borderColor: "#000000",
        backgroundColor: '#DDBBA8',
        borderWidth: 1,
        width: screenWidth / 2.5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }
})