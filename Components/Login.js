import { StyleSheet, Text, View, ImageBackground, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import bckImage from '../assets/LoginBackground.png'
import ph_image from '../assets/ph_img.png'
import pass_image from '../assets/pass_img.png'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Login = ({ navigation }) => {
    const [number, onChangeNumber] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    return (
        <View style={styles.body}>
            <ImageBackground source={bckImage} resizeMode='cover' style={styles.bck}>
                <View style={styles.login_box}>
                    <View style={styles.sectionStyle}>
                        <Image
                            source={ph_image}
                            style={styles.imageStyle}
                        />
                        <TextInput style={styles.ph} placeholder='Phone No' value={number} keyboardType='number-pad' onChangeText={onChangeNumber} maxLength={10} />
                    </View>
                    <View style={styles.sectionStyle2}>
                        <Image
                            source={pass_image}
                            style={styles.imageStyle}
                        />
                        <TextInput style={styles.pas} placeholder='Password' value={password} secureTextEntry={true} onChangeText={onChangePassword} />
                    </View>
                    <TouchableOpacity style={styles.lg_btn} onPress={() => navigation.navigate('Home')}><Text style={styles.btn_txt}>Login</Text></TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    body: {
        height: screenHeight,
        width: screenWidth
    },
    bck: {
        height: screenHeight + 50,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    login_box: {
        marginTop: 20,
        height: screenHeight / 1.8,
        width: screenWidth / 1.3,
        borderColor: "#000000",
        borderRadius: 50,
        borderWidth: 5
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginLeft: screenWidth / 9,
        marginTop: screenHeight / 9,
        width: screenWidth / 1.9,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
    },
    sectionStyle2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginLeft: screenWidth / 9,
        marginTop: screenHeight / 15,
        width: screenWidth / 1.9,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
    },
    ph: {
        flex: 1,
        paddingLeft: 5
    },
    pas: {
        flex: 1,
        paddingLeft: 5
    },
    imageStyle: {
        padding: 10,
        margin: 2,
        height: 30,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    lg_btn: {
        height: 40,
        backgroundColor: '#DDBBA8',
        width: screenWidth / 3,
        marginTop: screenHeight / 20,
        marginLeft: screenWidth / 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    btn_txt: {
        fontSize: 20,
        fontFamily: 'sans-serif',
    }
})