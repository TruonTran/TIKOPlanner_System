import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


export default function ForgotPasswordScreen() {
    const navigation = useNavigation();

    return (
        <LinearGradient
            colors={["#f3fdf9", "#ffffff", "#fef4ee"]}
            style={styles.container}
        >

            {/* Logo góc trái */}
            <View style={styles.logoWrapper}>
                <Image
                    source={require('../../assets/leftLogo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            {/* Card */}
            <View style={styles.card}>

                {/* Title */}
                <Text style={styles.title}>Forgot Password?</Text>

                {/* Description */}
                <Text style={styles.desc}>
                    It’s okay, we all forget sometimes 🤍
                    Just enter your email and we’ll send you a reset link right away.
                </Text>

                {/* Email */}
                <Text style={styles.label}>Email Address</Text>
                <View style={styles.inputBox}>
                    <Ionicons name="mail-outline" size={18} color="#999" />
                    <TextInput
                        placeholder="name@email.com"
                        style={styles.input}
                        keyboardType="Your email"
                    />
                </View>

                {/* Button */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Send Reset Link →</Text>
                </TouchableOpacity>

                {/* Back */}
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.back}>← Back to Login</Text>
                </TouchableOpacity>
            </View>

            {/* Footer */}
            <Text style={styles.footer}>
                Need help? <Text style={styles.link}>We’re here to help 💬</Text>
            </Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    moonIcon: {
        position: "absolute",
        top: 50,
        right: 30,
    },

    logoWrapper: {
        position: "absolute",
        top: 30,
        left: 500,
        zIndex: 100,
    },

    logo: {
        width: 200,
        height: 200,
    },


    card: {
        width: "75%",        // nhỏ lại
        maxWidth: 400,       // đẹp trên màn hình lớn
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 22,         // gọn hơn chút
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 5,
    },


    avatarWrapper: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: "#e9fdf3",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
    },

    avatar: {
        width: 50,
        height: 50,
    },

    searchIcon: {
        position: "absolute",
        bottom: 8,
        right: 8,
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 4,
    },

    title: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 10,
    },

    desc: {
        fontSize: 14,
        color: "#6b7280",
        textAlign: "center",
        marginBottom: 20,
    },

    label: {
        alignSelf: "flex-start",
        marginBottom: 6,
        fontWeight: "500",
    },

    inputBox: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#e5e7eb",
        borderRadius: 12,
        paddingHorizontal: 12,
        height: 48,
        width: "100%",
        marginBottom: 20,
    },

    input: {
        flex: 1,
        marginLeft: 8,
    },

    button: {
        backgroundColor: "#a7e9c0",
        width: "100%",
        height: 48,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
    },

    buttonText: {
        fontWeight: "600",
    },

    back: {
        color: "#6b7280",
    },

    footer: {
        marginTop: 20,
        color: "#6b7280",
    },

    link: {
        color: "#2563eb",
        fontWeight: "500",
    },
});
