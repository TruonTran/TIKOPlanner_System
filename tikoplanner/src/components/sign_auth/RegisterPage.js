import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function RegisterScreen() {
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation(); // ✅ THÊM DÒNG NÀY

    return (
        <View style={styles.container}>
            {/* ===== HEADER ===== */}
            <View style={styles.header}>
                <View style={styles.logoWrapper}>
                    <Image
                        source={require('../../assets/leftLogo.png')}
                        style={styles.logo}
                    />
                </View>
            </View>

            {/* ===== CENTER FORM ===== */}
            <View style={styles.center}>
                <View style={styles.card}>
                    <Text style={styles.title}>Create your account</Text>

                    {/* Full name */}
                    <Text style={styles.label}>Full Name</Text>
                    <View style={styles.inputWrapper}>
                        <Ionicons name="person-outline" size={18} color="#7baea6" />
                        <TextInput
                            placeholder="John Doe"
                            style={styles.input}
                            placeholderTextColor="#9ca3af"
                        />
                    </View>

                    {/* Email */}
                    <Text style={styles.label}>Your Email</Text>
                    <View style={styles.inputWrapper}>
                        <Ionicons name="mail-outline" size={18} color="#7baea6" />
                        <TextInput
                            placeholder="we'll never spam you 💌"
                            style={styles.input}
                            keyboardType="email-address"
                            placeholderTextColor="#9ca3af"
                        />
                    </View>

                    {/* Password */}
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.inputWrapper}>
                        <Ionicons name="lock-closed-outline" size={18} color="#7baea6" />

                        <TextInput
                            placeholder="••••••••"
                            style={styles.input}
                            secureTextEntry={!showPassword}
                            placeholderTextColor="#9ca3af"
                        />

                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Ionicons
                                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                                size={18}
                                color="#7baea6"
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Button */}
                    <TouchableOpacity style={styles.nextBtn}>
                        <Text style={styles.nextText}>Continue ✨</Text>
                    </TouchableOpacity>

                    {/* ✅ SỬA ĐOẠN NÀY */}
                    <Text style={styles.footerText}>
                        Already part of the family?{' '}
                        <Text
                            style={styles.loginLink}
                            onPress={() => navigation.navigate('Login')}
                        >
                            Log in here 💫
                        </Text>
                    </Text>

                    <Text style={styles.orText}>OR SIGN UP WITH</Text>

                    <View style={styles.socialRow}>
                        <TouchableOpacity style={styles.socialBtn}>
                            <Text>Google</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* ===== FOOTER ===== */}
            <Text style={styles.copyright}>
                © 2026 TIKO Planner. Helping mentors and students connect with pincher-perfect timing.
            </Text>
        </View>
    );
}

/* ===== STYLES ===== */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaf8f6',
    },

    header: {
        height: 64,
        justifyContent: 'center',
        paddingHorizontal: 24,
    },

    logoWrapper: {
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 180,
    },

    logo: {
        width: 36,
        height: 36,
        resizeMode: 'contain',
        transform: [{ scale: 6 }],
    },

    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    card: {
        width: width > 520 ? 420 : '90%',
        backgroundColor: '#fff',
        borderRadius: 28,
        padding: 24,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 8,
    },

    title: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 20,
        textAlign: 'center',
    },

    label: {
        fontSize: 13,
        fontWeight: '500',
        marginBottom: 6,
        color: '#374151',
    },

    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#d1f0eb',
        borderRadius: 14,
        paddingHorizontal: 12,
        marginBottom: 16,
        backgroundColor: '#f9fefe',
    },

    input: {
        flex: 1,
        paddingVertical: 12,
        marginHorizontal: 8,
    },

    nextBtn: {
        backgroundColor: '#5ac88f',
        paddingVertical: 16,
        borderRadius: 999,
        alignItems: 'center',
        marginTop: 8,
    },

    nextText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },

    footerText: {
        textAlign: 'center',
        marginTop: 16,
        color: '#6b7280',
    },

    loginLink: {
        color: '#5ac88f',
        fontWeight: '600',
    },

    orText: {
        textAlign: 'center',
        marginVertical: 16,
        color: '#9ca3af',
        fontSize: 12,
    },

    socialRow: {
        flexDirection: 'row',
        gap: 12,
    },

    socialBtn: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#e5e7eb',
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
    },

    copyright: {
        fontSize: 11,
        color: '#6b7280',
        textAlign: 'center',
        paddingVertical: 16,
    },
});
