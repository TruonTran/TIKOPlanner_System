import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";

/* ===================== CSS ===================== */
const styles = `
.container {
  max-width : 100%;
  padding : 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #eaf8f6;
}

.logo {
 width: 40px;
  height: 40px;
  object-fit: contain;
}

.card {
  width: 75%;
  max-width: 400px;
  background: #fff;
  border-radius: 20px;
  padding: 22px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
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
  display: block;
  text-align: left;
  margin-bottom: 6px;
  font-weight: 500;
}

.inputBox {
  display: flex;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 0 12px;
  height: 48px;
  margin-bottom: 20px;
}

.input {
  flex: 1;
  border: none;
  outline: none;
  margin-left: 8px;
  font-size: 14px;
}

.button {
  width: 100%;
  height: 48px;
  border-radius: 12px;
  background-color: #a7e9c0;
  border: none;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 16px;
}

.button:hover {
  opacity: 0.9;
}

.back {
  color: #6b7280;
  cursor: pointer;
}

.footer {
  margin-top: 20px;
  color: #6b7280;
}

.link {
  color: #2563eb;
  font-weight: 500;
  cursor: pointer;
}
`;

/* ===================== COMPONENT ===================== */
export default function ForgotPassword() {
  const navigate = useNavigate();

  // Inject CSS vào head
  React.useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div className="container">
      {/* Logo */}     
      <img src="/assets/leftLogo.png" alt="logo" className="logo" />

      {/* Card */}
      <div className="card">
        <h2 className="title">Forgot Password?</h2>

        <p className="desc">
          It’s okay, we all forget sometimes 🤍
          <br />
          Just enter your email and we’ll send you a reset link right away.
        </p>

        <label className="label">Email Address</label>

        <div className="inputBox">
          <IoMailOutline size={18} color="#999" />
          <input
            type="email"
            placeholder="name@email.com"
            className="input"
          />
        </div>

        <button className="button">
          Send Reset Link →
        </button>

        <div className="back" onClick={() => navigate("/login")}>
          ← Back to Login
        </div>
      </div>

      {/* Footer */}
      <p className="footer">
        Need help? <span className="link">We’re here to help 💬</span>
      </p>
    </div>
  );
}
