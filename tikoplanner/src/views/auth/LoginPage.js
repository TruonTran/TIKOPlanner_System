import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    IoMailOutline,
    IoLockClosedOutline,
    IoEyeOutline,
    IoEyeOffOutline,
} from "react-icons/io5";

import { login } from "../../controllers/authController";
import "../style.css";

export default function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const result = await login(email, password);

        if (!result.success) {
            alert(result.message);
            return;
        }

        const user = result.user;
        localStorage.setItem("user", JSON.stringify(user));

        if (user.role === "admin") navigate("/admin");
        else if (user.role === "mentor") navigate("/mentor");
        else navigate("/home");
    };

    return (
        <div className="container">
            <div className="header">
                <div className="logoWrapper">
                    <img src="/assets/leftLogo.png" alt="logo" className="logo" />
                </div>
            </div>

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
                        <span
                            className="eye"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <IoEyeOffOutline size={18} color="#7baea6" />
                            ) : (
                                <IoEyeOutline size={18} color="#7baea6" />
                            )}
                        </span>
                    </div>

                    {/* 👉 Forgot password */}
                    <div
                        className="forgotLink"
                        onClick={() => navigate("/forgot")}
                    >
                        Forgot password?
                    </div>


                    <button className="nextBtn" onClick={handleLogin}>
                        Login ✨
                    </button>

                    <p className="footerText">
                        New here?{" "}
                        <span
                            className="loginLink"
                            onClick={() => navigate("/signup")}
                        >
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
