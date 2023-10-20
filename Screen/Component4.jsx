import React from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Image, Text, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Component4() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.contentContainer}>
                <Image
                    source={require('../Images/logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.htext}>Verify Your Mobile Number</Text>
                <Text style={styles.ptext}>Please enter code sent to your mobile number ending with ******3848</Text>
                <View style={styles.rowContainer}>
                    <TextInput
                        style={styles.phoneNumberInput}
                        keyboardType='phone-pad'
                        
                    />
                     <TextInput
                        style={styles.phoneNumberInput}
                        keyboardType='phone-pad'
                    />
                     <TextInput
                        style={styles.phoneNumberInput}
                        keyboardType='phone-pad'
                    />
                     <TextInput
                        style={styles.phoneNumberInput}
                        keyboardType='phone-pad'
                    />
                </View>
                <Text style={styles.pptext}>
                    Didn't receive the code?
                    <Text style={styles.linkText}> Resend OTP 0:10sec</Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    contentContainer: {
        flex: 1,
        paddingTop: 20,
        paddingLeft: 20,
    },
    linkText: {
        color: '#7B2CBF',
    },
    phoneNumberInput: {
        height: 40,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        paddingLeft: 10,
        marginVertical: 10,
    },
    pptext: {
        top: 80,
        color: "#637381",
    },
    htext: {
        fontWeight: "700",
        fontSize: 28,
        fontFamily: "Nunito Sans",
        color: "#212B36",
    },
    ptext: {
        top: 10,
        color: "black"
    },
    rowContainer: {
        top: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    rowText: {
        fontSize: 16,
        color: "black",
        marginEnd: 20,
    },
    logo: {
        width: 190,
        height: 76,
        resizeMode: "contain",
    },
    button: {
        backgroundColor: "#7B2CBF",
        width: 372,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 57,
        top: 20,
        marginEnd: 20,
        borderRadius: 7,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
