import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const isDesktop = width >= 900;

export default function HomePage() {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: "#f6fffb" }}
        >
            {/* ================= HEADER ================= */}
            <View style={styles.header}>
                <View style={styles.logoRow}>
                    <Image
                        source={require("../../assets/leftLogo.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.navRow}>
                    <Text style={styles.navActive}>Dashboard</Text>
                    <Text style={styles.navItem}>Mentors</Text>
                    <Text style={styles.navItem}>Resources</Text>
                    <Text style={styles.navItem}>Schedule</Text>
                </View>

                {/* logo của user và tên user */}
                <View style={styles.profileRow}>
                    <Ionicons name="sunny-outline" size={20} color="#6b7280" />
                    <Image
                        source={require("../../assets/logoconen.png")}
                        style={styles.avatar}
                    />
                    <Text style={styles.profileName}>Alex J.</Text>
                </View>
            </View>

            {/* ================= HERO ================= */}
            <View style={styles.hero}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.heroTitle}>
                        Welcome back,{" "}
                        <Text style={styles.heroHighlight}>
                            Master of Your Day!
                        </Text>{" "}
                        👋
                    </Text>

                    <Text style={styles.heroDesc}>
                        Ready to achieve your goals? Search for your next lesson
                        or browse your mentors.
                    </Text>

                    <View style={styles.searchBox}>
                        <Ionicons name="search" size={18} color="#7aa7a0" />
                        <Text style={styles.searchPlaceholder}>
                            Search for mentors, topics, or resources...
                        </Text>
                    </View>
                </View>

                {isDesktop && (
                    <View style={styles.mascotWrap}>
                        <View style={styles.mascotCircle}>
                            <Image
                                source={require("../../assets/favicon.png")}
                                style={{ width: 80, height: 80 }}
                            />
                            <Text style={styles.mascotText}>TIKO MASCOT</Text>
                        </View>
                    </View>
                )}
            </View>

            {/* ================= QUICK ACTION ================= */}
            <View style={styles.quickRow}>
                {quickCard("people-outline", "Find a Mentor", "Browse Mentors →")}
                {quickCard(
                    "calendar-outline",
                    "My Schedule",
                    "View Calendar →"
                )}
                {quickCard(
                    "trending-up-outline",
                    "Learning Path",
                    "View Path →"
                )}
            </View>

            {/* ================= CONTENT ================= */}
            <View
                style={[
                    styles.contentRow,
                    !isDesktop && { flexDirection: "column" },
                ]}
            >
                {/* Recent Progress */}
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>Recent Progress</Text>
                        <Text style={styles.cardLink}>View All</Text>
                    </View>

                    {progressItem("UI/UX Fundamentals", 75)}
                    {progressItem("Advanced React Patterns", 40)}
                </View>

                {/* Next Sessions */}
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>Next Sessions</Text>
                        <Text style={styles.cardLink}>Manage</Text>
                    </View>

                    {sessionItem(
                        "24 OCT",
                        "Mentorship with Sarah Chen",
                        "02:00 PM - 03:00 PM · Zoom",
                        true
                    )}

                    {sessionItem(
                        "26 OCT",
                        "Career Guidance Session",
                        "11:30 AM - 12:30 PM · Google Meet",
                        false
                    )}
                </View>
            </View>

            {/* ================= FOOTER ================= */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    © 2024 TIKO Planner. Effortless Organization for a Productive
                    Life.
                </Text>
            </View>
        </ScrollView>
    );
}

/* ================= HELPERS ================= */

const quickCard = (icon, title, action) => (
    <View style={styles.quickCard} key={title}>
        <Ionicons name={icon} size={26} color="#34d399" />
        <Text style={styles.quickTitle}>{title}</Text>
        <Text style={styles.quickAction}>{action}</Text>
    </View>
);

const progressItem = (label, percent) => (
    <View key={label} style={{ marginBottom: 16 }}>
        <View style={styles.progressRow}>
            <Text style={styles.progressLabel}>{label}</Text>
            <Text style={styles.progressPercent}>{percent}%</Text>
        </View>
        <View style={styles.progressBg}>
            <View
                style={[styles.progressFill, { width: `${percent}%` }]}
            />
        </View>
    </View>
);

const sessionItem = (date, title, time, primary) => (
    <View key={title} style={styles.sessionItem}>
        <View style={styles.sessionDate}>
            <Text style={styles.sessionDay}>{date.split(" ")[0]}</Text>
            <Text style={styles.sessionMonth}>{date.split(" ")[1]}</Text>
        </View>

        <View style={{ flex: 1 }}>
            <Text style={styles.sessionTitle}>{title}</Text>
            <Text style={styles.sessionTime}>{time}</Text>
        </View>

        <TouchableOpacity
            style={[
                styles.sessionBtn,
                primary ? styles.joinBtn : styles.detailBtn,
            ]}
        >
            <Text
                style={[
                    styles.sessionBtnText,
                    !primary && { color: "#374151" },
                ]}
            >
                {primary ? "Join" : "Details"}
            </Text>
        </TouchableOpacity>
    </View>
);

/* ================= STYLES ================= */

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 0,
        backgroundColor: "#fff",
    },

    logo: {
        width: 150,
        height: 100,
    },


    navRow: {
        flexDirection: "row",
        gap: 20,
    },

    navItem: {
        color: "#374151",
        fontWeight: "500",
    },

    navActive: {
        color: "#34d399",
        fontWeight: "700",
        borderBottomWidth: 2,
        borderBottomColor: "#34d399",
        paddingBottom: 4,
    },

    profileRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    avatar: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: "#e5e7eb",
    },

    profileName: {
        fontWeight: "600",
    },

    hero: {
        backgroundColor: "#ecfdf5",
        margin: 20,
        borderRadius: 28,
        padding: 28,
        flexDirection: "row",
        gap: 20,
    },

    heroTitle: {
        fontSize: 30,
        fontWeight: "900",
        color: "#04281f",
    },

    heroHighlight: {
        color: "#34d399",
    },

    heroDesc: {
        color: "#4b7f76",
        marginTop: 10,
        maxWidth: 500,
    },

    searchBox: {
        marginTop: 18,
        backgroundColor: "#fff",
        borderRadius: 14,
        padding: 14,
        flexDirection: "row",
        alignItems: "center",
    },

    searchPlaceholder: {
        marginLeft: 8,
        color: "#7aa7a0",
    },

    mascotWrap: {
        justifyContent: "center",
    },

    mascotCircle: {
        width: 160,
        height: 160,
        borderRadius: 80,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 3,
        borderColor: "#34d399",
    },

    mascotText: {
        marginTop: 6,
        fontSize: 11,
        fontWeight: "700",
        color: "#34d399",
    },

    quickRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        gap: 16,
    },

    quickCard: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 20,
    },

    quickTitle: {
        marginTop: 14,
        fontWeight: "800",
        color: "#04281f",
    },

    quickAction: {
        marginTop: 10,
        color: "#34d399",
        fontWeight: "700",
    },

    contentRow: {
        flexDirection: "row",
        padding: 20,
        gap: 20,
    },

    card: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 20,
    },

    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },

    cardTitle: {
        fontWeight: "900",
        fontSize: 16,
        color: "#04281f",
    },

    cardLink: {
        color: "#34d399",
        fontWeight: "700",
    },

    progressRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    progressLabel: {
        fontWeight: "600",
    },

    progressPercent: {
        color: "#34d399",
        fontWeight: "700",
    },

    progressBg: {
        height: 8,
        backgroundColor: "#e5f4f1",
        borderRadius: 6,
        marginTop: 6,
    },

    progressFill: {
        height: "100%",
        backgroundColor: "#34d399",
        borderRadius: 6,
    },

    sessionItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
        gap: 14,
    },

    sessionDate: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "#ecfdf5",
        alignItems: "center",
        justifyContent: "center",
    },

    sessionDay: {
        fontWeight: "900",
        color: "#34d399",
    },

    sessionMonth: {
        fontSize: 10,
        color: "#4b7f76",
    },

    sessionTitle: {
        fontWeight: "700",
    },

    sessionTime: {
        fontSize: 12,
        color: "#6b7280",
    },

    sessionBtn: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 12,
    },

    joinBtn: {
        backgroundColor: "#34d399",
    },

    detailBtn: {
        backgroundColor: "#f3f4f6",
    },

    sessionBtnText: {
        color: "#fff",
        fontWeight: "700",
    },

    footer: {
        padding: 30,
        alignItems: "center",
    },

    footerText: {
        color: "#6b7280",
        fontSize: 12,
    },
});
