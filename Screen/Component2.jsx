import React from "react";
import { SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function Component1() {
    const navigate = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Image
                    source={require('../Images/image2.png')}
                    style={styles.image}
                />
            </View>
            <Text style={styles.htext} >Empower Your Workforce</Text>
            <Text style={styles.ptext}>With TexlaCulture's Employee Management System, unleash the true potential.</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigate.push('Stage3')}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0E3F7',
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 315,
        height: 316.26,
        top: 100,
        left: 58,
        position: 'absolute',
    },
    htext: {
        fontSize: 28,
        textAlign: "center",
        fontFamily: "Nunito Sans",
        color: "black",
        fontWeight: "700",
        bottom: 90,
    },
    ptext: {
        bottom: 70,
        fontSize: 16,
        textAlign: "center",
        fontWeight: "700"
    },
    button: {
        backgroundColor: "#7B2CBF",
        width: 264,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 57,
        bottom: 50,
        borderRadius: 7
    },
    buttonText: {
        color: 'white', // Customize the text color
        fontSize: 18,
        fontWeight: 'bold',
    },
});

