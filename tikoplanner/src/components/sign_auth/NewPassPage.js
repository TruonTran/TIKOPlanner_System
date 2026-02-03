import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IoLockClosedOutline,
  IoEyeOutline,
  IoEyeOffOutline,
} from "react-icons/io5";

/* ===================== CSS ===================== */
const styles = `
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(6px); }
  100% { transform: translateY(0); }
}

.container {
  max-width : 100%;
  padding : 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eaf8f6;
  position: relative;
}

.logoWrapper {
  position: absolute;
  top: 0;
  left: 500px;
  z-index: 90;
  animation: float 4s ease-in-out infinite;
}

.logo {
  width: 250px;
  height: 200px;
  object-fit: contain;
}

.card {
  width: 75%;
  max-width: 400px;
  background: #fff;
  border-radius: 20px;
  padding: 22px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  animation: fadeUp 0.6s ease forwards;
}

.title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
}

.desc {
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 20px;
}

.label {
  text-align: left;
  font-weight: 500;
  margin-bottom: 6px;
}

.inputBox {
  display: flex;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 0 12px;
  height: 48px;
  margin-bottom: 20px;
  transition: all 0.25s ease;
}

.inputBox:focus-within {
  border-color: #a7e9c0;
  box-shadow: 0 0 0 3px rgba(167,233,192,0.35);
}

.inputBox input {
  flex: 1;
  border: none;
  outline: none;
  margin-left: 8px;
  background: transparent;
}

.eye {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.eye:hover {
  transform: rotate(10deg) scale(1.1);
}

.button {
  width: 100%;
  height: 48px;
  background-color: #a7e9c0;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 16px;
  transition: all 0.25s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}

.button:active {
  transform: scale(0.97);
}

.back {
  color: #6b7280;
  cursor: pointer;
  transition: color 0.2s ease;
}

.back:hover {
  color: #111827;
}
`;

/* ===================== COMPONENT ===================== */
export default function NewPassPage() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  return (
    <div className="container">
      {/* LOGO */}
      <div className="logoWrapper">
        <img src="/assets/leftLogo.png" alt="logo" className="logo" />
      </div>

      {/* CARD */}
      <div className="card">
        <h2 className="title">Create New Password</h2>

        <p className="desc">
          Your new password must be different from previously used passwords.
        </p>

        {/* New Password */}
        <div className="label">New Password</div>
        <div className="inputBox">
          <IoLockClosedOutline size={18} color="#999" />
          <input
            type={showPass ? "text" : "password"}
            placeholder="Enter new password"
          />
          <span className="eye" onClick={() => setShowPass(!showPass)}>
            {showPass ? (
              <IoEyeOffOutline size={18} color="#999" />
            ) : (
              <IoEyeOutline size={18} color="#999" />
            )}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="label">Confirm Password</div>
        <div className="inputBox">
          <IoLockClosedOutline size={18} color="#999" />
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm new password"
          />
          <span className="eye" onClick={() => setShowConfirm(!showConfirm)}>
            {showConfirm ? (
              <IoEyeOffOutline size={18} color="#999" />
            ) : (
              <IoEyeOutline size={18} color="#999" />
            )}
          </span>
        </div>

        {/* Button */}
        <button className="button">Continue</button>

        {/* Back */}
        <div className="back" onClick={() => navigate("/login")}>
          ← Back to Login
        </div>
      </div>
    </div>
  );
}
