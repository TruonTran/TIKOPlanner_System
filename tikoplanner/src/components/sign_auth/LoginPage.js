import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IoMailOutline,
  IoLockClosedOutline,
  IoEyeOutline,
  IoEyeOffOutline,
} from "react-icons/io5";

/* ===================== CSS ===================== */
const styles = `
.container {
  max-width : 100%;
  background-color: #eaf8f6;
  display: flex;
  flex-direction: column;
}

/* ===== HEADER ===== */
.header {
  height: 88px;
  display: flex;
  align-items: flex-end;
  padding: 0 24px 8px;
}

.logoWrapper {
  width: 40px;
  height: 40px;
  margin-left: 400px;
}

.logo {
  width: 40px;
  height: 40px;
  margin-top: 0px;
  object-fit: contain;
  transform: scale(6);
}

/* ===== CENTER ===== */
.center {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 80px;
  justify-content: center;
}

/* ===== CARD ===== */
.card {
  width: 420px;
  max-width: 90%;
  background: #fff;
  border-radius: 28px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
}

.label {
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 6px;
  color: #374151;
}

/* ===== INPUT ===== */
.inputWrapper {
  display: flex;
  align-items: center;
  border: 1px solid #d1f0eb;
  border-radius: 14px;
  padding: 0 12px;
  margin-bottom: 16px;
  background-color: #f9fefe;
}

.inputWrapper input {
  flex: 1;
  border: none;
  outline: none;
  padding: 12px 8px;
  background: transparent;
}

.eye {
  cursor: pointer;
}

/* ===== BUTTON ===== */
.nextBtn {
  width: 100%;
  background-color: #5ac88f;
  padding: 16px;
  border-radius: 999px;
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  margin-top: 8px;
  cursor: pointer;

  box-shadow: 0 8px 20px rgba(90, 200, 143, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.nextBtn:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 26px rgba(90, 200, 143, 0.45);
}

.nextBtn:active {
  transform: translateY(0);
  box-shadow: 0 6px 14px rgba(90, 200, 143, 0.3);
}

/* ===== TEXT ===== */
.footerText {
  text-align: center;
  margin-top: 16px;
  color: #6b7280;
}

.loginLink {
  color: #5ac88f;
  font-weight: 600;
  cursor: pointer;
}

.orText {
  text-align: center;
  margin: 16px 0;
  color: #9ca3af;
  font-size: 12px;
}

.socialRow {
  display: flex;
  gap: 12px;
}

.socialBtn {
  flex: 1;
  border: 1px solid #e5e7eb;
  padding: 12px 0;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  font-weight: 500;
}


`;

/* ===================== COMPONENT ===================== */
export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3001/users?email=${email}`
      );
      const data = await res.json();

      if (data.length === 0) {
        alert("Email does not exist");
        return;
      }

      const user = data[0];
      if (user.password !== password) {
        alert("Wrong password");
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "admin") navigate("/admin");
      else if (user.role === "mentor") navigate("/mentor");
      else navigate("/home");
    } catch {
      alert("Server error");
    }
  };

  return (
    <div className="container">
      {/* HEADER */}
      <div className="header">
        <div className="logoWrapper">
          <img src="/assets/leftLogo.png" alt="logo" className="logo" />
        </div>
      </div>

      {/* CENTER */}
      <div className="center">
        <div className="card">
          <h2 className="title">Welcome back 👋</h2>

          <label className="label">Your Email</label>
          <div className="inputWrapper">
            <IoMailOutline size={18} color="#7baea6" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <label className="label">Password</label>
          <div className="inputWrapper">
            <IoLockClosedOutline size={18} color="#7baea6" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
            <span className="eye" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <IoEyeOffOutline size={18} color="#7baea6" />
              ) : (
                <IoEyeOutline size={18} color="#7baea6" />
              )}
            </span>
          </div>

          <button className="nextBtn" onClick={handleLogin}>
            Login ✨
          </button>

          <p className="footerText">
            New here?{" "}
            <span className="loginLink" onClick={() => navigate("/register")}>
              Create an account 💫
            </span>
          </p>

          <p className="orText">OR LOGIN WITH</p>

          <div className="socialRow">
            <div className="socialBtn">Google</div>
          </div>
        </div>
      </div>
    </div>
  );
}
