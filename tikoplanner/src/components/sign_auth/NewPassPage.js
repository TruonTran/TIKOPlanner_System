import React, { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";

export default function NewPassPage() {
    const navigation = useNavigation();
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <LinearGradient
            colors={["#f3fdf9", "#ffffff", "#fef4ee"]}
            style={styles.container}
        >
            {/* Logo góc trái */}
            <View style={styles.logoWrapper}>
                <Image
                    source={require("../../assets/leftLogo.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            {/* Card */}
            <View style={styles.card}>
                <Text style={styles.title}>Create New Password</Text>

                <Text style={styles.desc}>
                    Your new password must be different from previously used passwords.
                </Text>

                {/* New Password */}
                <Text style={styles.label}>New Password</Text>
                <View style={styles.inputBox}>
                    <Ionicons name="lock-closed-outline" size={18} color="#999" />
                    <TextInput
                        placeholder="Enter new password"
                        style={styles.input}
                        secureTextEntry={!showPass}
                    />
                    <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                        <Ionicons
                            name={showPass ? "eye-off-outline" : "eye-outline"}
                            size={18}
                            color="#999"
                        />
                    </TouchableOpacity>
                </View>

                {/* Confirm Password */}
                <Text style={styles.label}>Confirm Password</Text>
                <View style={styles.inputBox}>
                    <Ionicons name="lock-closed-outline" size={18} color="#999" />
                    <TextInput
                        placeholder="Confirm new password"
                        style={styles.input}
                        secureTextEntry={!showConfirm}
                    />
                    <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
                        <Ionicons
                            name={showConfirm ? "eye-off-outline" : "eye-outline"}
                            size={18}
                            color="#999"
                        />
                    </TouchableOpacity>
                </View>

                {/* Button */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>

                {/* Back */}
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.back}>← Back to Login</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    /* ===== LOGO (GIỐNG FORGOT PAGE) ===== */

    logoWrapper: {
        position: "absolute",
        top: 0,
        left: 500,
        zIndex: 90,
    },

    logo: {
        width: 250,
        height: 200,
    },

    /* ===== CARD (GIỐNG FORGOT PAGE) ===== */
    card: {
        width: "75%",
        maxWidth: 400,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 22,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 5,
    },

    title: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 10,
        textAlign: "center",
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
});
