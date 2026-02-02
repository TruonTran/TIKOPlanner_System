import React from "react";
import { Image, View } from "react-native";

export default function GuestPage() {
    return (
        <div style={styles.app}>
            {/* ===== HEADER ===== */}
            <header style={styles.header}>
                <View style={styles.logoRow}>
                    <Image
                        source={require("../../assets/leftLogo.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>

                <nav style={styles.nav}>
                    <a style={styles.navItem} href="#">Home</a>
                    <a style={styles.navItem} href="#">Mentors</a>
                    <a style={styles.navItem} href="#">About</a>
                    <button style={styles.signupBtn}>Sign Up</button>
                </nav>
            </header>

            {/* ===== HERO ===== */}
            <section style={styles.hero}>
                <h1 style={styles.heroTitle}>
                    Book Your Next Learning Session <br />
                    <span style={styles.green}>in Under 1 Minute</span>
                </h1>

                <p style={styles.heroDesc}>
                    Connect with industry experts. Choose your stack.
                    Schedule instantly. Accelerate your tech career with
                    TIKO Planner.
                </p>

                <div style={styles.searchBox}>
                    <input
                        style={styles.searchInput}
                        placeholder="Search by tech stack (e.g. React Native, MongoDB)"
                    />
                    <button style={styles.searchBtn}>Find Mentor</button>
                </div>

                <div style={styles.popular}>
                    Popular:
                    <span style={styles.tag}>React Native</span>
                    <span style={styles.tag}>Postman</span>
                    <span style={styles.tag}>MongoDB</span>
                </div>
            </section>

            {/* ===== FEATURES ===== */}
            <section style={styles.features}>
                <Feature
                    title="Unified Search"
                    desc="Find the perfect mentor across diverse technology stacks with our advanced filtering system."
                />
                <Feature
                    title="Real-time Scheduling"
                    desc="View live availability and book slots immediately without back-and-forth emails."
                />
                <Feature
                    title="Instant Notifications"
                    desc="Get reminders and updates so you never miss a learning opportunity."
                />
            </section>

            {/* ===== MENTORS ===== */}
            <section style={styles.mentors}>
                <div style={styles.mentorHeader}>
                    <h2>Top Rated Mentors</h2>
                    <a href="#" style={styles.link}>View All Mentors →</a>
                </div>

                <div style={styles.mentorList}>
                    <Mentor name="Alex Johnson" role="Senior Frontend Engineer" />
                    <Mentor name="Sarah Chen" role="Backend Specialist" />
                    <Mentor name="Marcus Wright" role="Mobile Architect" />
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer style={styles.footer}>
                © 2026 TIKO Planner. All rights reserved.
            </footer>
        </div>
    );
}

/* ===== COMPONENTS ===== */

const Feature = ({ title, desc }) => (
    <div style={styles.featureCard}>
        <h3>{title}</h3>
        <p style={styles.muted}>{desc}</p>
    </div>
);

const Mentor = ({ name, role }) => (
    <div style={styles.mentorCard}>
        <div style={styles.avatarPlaceholder} />
        <h4>{name}</h4>
        <p style={styles.muted}>{role}</p>
        <button style={styles.viewBtn}>View Availability</button>
    </div>
);

/* ===== STYLES ===== */

const styles = {
    app: {
        fontFamily: "Segoe UI, sans-serif",
        background: "#f8fffc",
        color: "#0f172a",
    },

    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 80px",
        // background: "#fff",
    },

    logo: {
        width: 150,
        height: 100,
    },

    green: {
        color: "#22c55e",
    },

    nav: {
        display: "flex",
        alignItems: "center",
        gap: 24,
    },

    navItem: {
        textDecoration: "none",
        color: "#0f172a",
        fontWeight: 500,
    },

    signupBtn: {
        background: "#22c55e",
        border: "none",
        padding: "8px 18px",
        borderRadius: 20,
        color: "#fff",
        fontWeight: 600,
        cursor: "pointer",
    },

    hero: {
        textAlign: "center",
        padding: "90px 20px",
    },

    heroTitle: {
        fontSize: 44,
        lineHeight: 1.3,
    },

    heroDesc: {
        maxWidth: 700,
        margin: "16px auto",
        color: "#475569",
    },

    searchBox: {
        display: "flex",
        justifyContent: "center",
        marginTop: 30,
    },

    searchInput: {
        width: 400,
        padding: 14,
        border: "1px solid #e5e7eb",
        borderRadius: "14px 0 0 14px",
        outline: "none",
    },

    searchBtn: {
        padding: "14px 24px",
        border: "none",
        background: "#22c55e",
        color: "#fff",
        borderRadius: "0 14px 14px 0",
        cursor: "pointer",
    },

    popular: {
        marginTop: 14,
        fontSize: 14,
    },

    tag: {
        background: "#dcfce7",
        padding: "4px 10px",
        borderRadius: 10,
        marginLeft: 8,
    },

    features: {
        display: "flex",
        justifyContent: "center",
        gap: 24,
        padding: "60px 40px",
    },

    featureCard: {
        background: "#fff",
        padding: 28,
        borderRadius: 18,
        width: 280,
    },

    mentors: {
        padding: "60px 80px",
    },

    mentorHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    link: {
        color: "#22c55e",
        fontWeight: 600,
        textDecoration: "none",
    },

    mentorList: {
        display: "flex",
        gap: 24,
        marginTop: 30,
    },

    mentorCard: {
        background: "#fff",
        borderRadius: 20,
        padding: 20,
        width: 260,
        textAlign: "center",
    },

    avatarPlaceholder: {
        width: "100%",
        height: 160,
        borderRadius: 16,
        background: "#e5e7eb",
        marginBottom: 12,
    },

    viewBtn: {
        marginTop: 14,
        width: "100%",
        padding: 10,
        borderRadius: 12,
        border: "none",
        background: "#f1f5f9",
        cursor: "pointer",
    },

    muted: {
        color: "#475569",
        fontSize: 14,
    },

    footer: {
        textAlign: "center",
        padding: 30,
        color: "#64748b",
    },
};
