/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { IoSunnyOutline, IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Footer from "../screen/Footer";

/* ===================== CSS ===================== */
const styles = `
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-16px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(6px); }
  100% { transform: translateY(0); }
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont;
}

.page {
  background-color: #f6fffb;
}

/* ================= HEADER ================= */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 0 20px;
  animation: fadeDown .5s ease;
}

.logo {
  width: 150px;
  height: 100px;
  object-fit: contain;
}

.navRow {
  display: flex;
  gap: 20px;
}

.navItem {
  font-weight: 500;
  color: #374151;
  cursor: pointer;
}

.navActive {
  color: #34d399;
  font-weight: 700;
  border-bottom: 2px solid #34d399;
  padding-bottom: 4px;
}

.profileRow {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
}

/* ================= HERO ================= */
.hero {
  background-color: #ecfdf5;
  margin: 20px;
  border-radius: 28px;
  padding: 28px;
  display: flex;
  gap: 20px;
  animation: fadeUp .6s ease;
}

.heroTitle {
  font-size: 30px;
  font-weight: 900;
  color: #04281f;
}

.heroHighlight {
  color: #34d399;
}

.heroDesc {
  color: #4b7f76;
  margin-top: 10px;
  max-width: 500px;
}

.searchBox {
  margin-top: 18px;
  background: #fff;
  border-radius: 14px;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #7aa7a0;
}

.mascotWrap {
  display: flex;
  align-items: center;
}

.mascotCircle {
  width: 160px;
  height: 160px;
  border-radius: 80px;
  background: #fff;
  border: 3px solid #34d399;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: float 4s ease-in-out infinite;
}

.mascotText {
  font-size: 11px;
  font-weight: 700;
  color: #34d399;
  margin-top: 6px;
}
`;

/* ================= COMPONENT ================= */
export default function HomePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = styles;
    document.head.appendChild(style);

    // ✅ LẤY USER ĐÃ LOGIN
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }

    return () => document.head.removeChild(style);
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="page">
      {/* ================= HEADER ================= */}
      <div className="header">
        <img src="/assets/leftLogo.png" className="logo" />

        <div className="navRow">
          <div className="navActive">Dashboard</div>
          <div className="navItem">Mentors</div>
          <div className="navItem">Resources</div>
          <div className="navItem">Schedule</div>
        </div>

        <div className="profileRow">
          <IoSunnyOutline size={20} color="#6b7280" />
          <img src={user.avatar} className="avatar" />
          <strong>{user.name}</strong>
        </div>
      </div>

      {/* ================= HERO ================= */}
      <div className="hero">
        <div style={{ flex: 1 }}>
          <div className="heroTitle">
            Welcome back,{" "}
            <span className="heroHighlight">{user.name}</span> 👋
          </div>

          <div className="heroDesc">
            Ready to achieve your goals? Search for your next lesson or browse
            your mentors.
          </div>

          <div className="searchBox">
            <IoSearchOutline size={18} color="#7aa7a0" />
            Search for mentors, topics, or resources...
          </div>
        </div>

        <div className="mascotWrap">
          <div className="mascotCircle">
            <img src="/assets/favicon.png" width="80" />
            <div className="mascotText">TIKO MASCOT</div>
          </div>
        </div>
      </div>

     <Footer />
    </div>
  );
}
