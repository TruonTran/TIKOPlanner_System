import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoPersonOutline, IoMailOutline, IoLockClosedOutline, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

/* ===================== CSS ===================== */
const styles = `
.container {
  max-width : 100%;
  background-color: #eaf8f6;
  display: flex;
  flex-direction: column;
}

.header {
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 24px;
}

.logo {
  width: 77px;
  height: 40px;
  margin-left: 300px;
  margin-top: 93px;
  object-fit: contain;
  transform: scale(6);
}

.center {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px;
}

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


.footerText {
  line-height: 1.5;
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
  margin: 10px 0;
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
}

`;

/* ===================== COMPONENT ===================== */
export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  return (
    <div className="container">
      {/* HEADER */}
      <div className="header">
        <img src="/assets/leftLogo.png" alt="logo" className="logo" />
      </div>

      {/* CENTER */}
      <div className="center">
        <div className="card">
          <h2 className="title">Create your account</h2>

          <label className="label">Full Name</label>
          <div className="inputWrapper">
            <IoPersonOutline size={18} color="#7baea6" />
            <input placeholder="John Doe" />
          </div>

          <label className="label">Your Email</label>
          <div className="inputWrapper">
            <IoMailOutline size={18} color="#7baea6" />
            <input placeholder="we'll never spam you 💌" />
          </div>

          <label className="label">Password</label>
          <div className="inputWrapper">
            <IoLockClosedOutline size={18} color="#7baea6" />
            <input
              type={showPassword ? "text" : "password"}
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

          <button className="nextBtn">Continue ✨</button>

          <p className="footerText">
            Already part of the family?{" "}
            <span className="loginLink" onClick={() => navigate("/login")}>
              Log in here 💫
            </span>
          </p>

          <p className="orText">OR SIGN UP WITH</p>

          <div className="socialRow">
            <div className="socialBtn">Google</div>
          </div>
        </div>
      </div>
    </div>
  );
}
