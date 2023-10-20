import React from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Image, Text, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Component3() {
    const navigate = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigate.push('Stage2')}>
                    <Ionicons name="search-sharp" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <Image
                    source={require('../Images/logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.htext}>Mobile Number</Text>
                <Text>We'll send you a one-time verification code.</Text>
                <View style={styles.phoneNumberInputContainer}>
                    <TextInput
                        style={styles.phoneNumberInput}
                        placeholder="Enter your phone number"
                        keyboardType='phone-pad'
                    />
                </View>
                <Text style={styles.ptext}>
                    By Continuing, I agree to the
                    <Text style={styles.linkText}> Terms of Use & Privacy Policy</Text>
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => navigate.push('Stage4')}>
                    <Text style={styles.buttonText}>Get OTP</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ensure the container takes up the entire screen
        backgroundColor: "#FFFFFF",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    contentContainer: {
        flex: 1, // This will ensure the content takes up the available space
        paddingTop: 20,
        paddingLeft: 20,
    },
    linkText: {
        color: '#7B2CBF', // Change the color to your desired text color
    },
    htext: {
        fontWeight: "700",
        fontSize: 28,
        fontFamily: "Nunito Sans",
        color: "#212B36",
    },
    ptext: {
        paddingTop: 5,
        paddingLeft: 20,
        fontWeight: "600",
        marginEnd: 10,
        fontSize: 12,
    },
    phoneNumberInputContainer: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        marginVertical: 10,
        width: 273,
        height: 54,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 110,
        borderCurve: 12,
    },
    phoneNumberInput: {
        height: 40,
        fontSize: 16,
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
