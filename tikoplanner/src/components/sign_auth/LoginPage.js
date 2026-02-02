import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const sliderRef = useRef(null);
    const isDesktop = window.innerWidth >= 768;

    const banners = [
        "/assets/login_page/banner1.png",
        "/assets/login_page/banner2.png",
        "/assets/login_page/banner3.png",
        "/assets/login_page/banner4.png",
    ];
    
    useEffect(() => {
        if (!isDesktop) return;

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % banners.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [isDesktop, banners.length]);


    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
        }
    }, [index]);

    return (
        <>
            <style>{`
        * {
          box-sizing: border-box;
        }

        .login-container {
          display: flex;
          height: 100vh;
          background: #fff;
        }

        /* ===== BANNER ===== */
        .banner-wrapper {
          flex: 1;
          overflow: hidden;
        }

        .banner-slider {
          display: flex;
          height: 100%;
          transition: transform 0.9s ease-in-out;
        }

        .banner-slide {
          min-width: 100%;
          height: 100%;
        }

        .banner-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ===== RIGHT FORM ===== */
        .login-right {
          width: 520px;
          padding: 32px;
          display: flex;
          align-items: center;
        }

        .form-wrapper {
          position: relative;
          width: 100%;
        }

        .logo {
          width: 190px;
          height: 170px;
          position: absolute;
          top: -100px;
          left: -20px;
        }

        h2 {
          font-size: 26px;
          font-weight: 700;
        }

        .sub {
          color: #666;
          margin: 10px 0 24px;
        }

        /* ===== INPUT EMAIL ===== */
        input {
          width: 100%;
          height: 52px;
          padding: 0 16px;
          border-radius: 12px;
          border: 1px solid #ddd;
          margin-bottom: 16px;
          outline: none;
          font-size: 14px;
        }

        input:focus {
          border-color: #5ac88f;
        }

        /* ===== PASSWORD ===== */
        .password-wrapper {
          display: flex;
          align-items: center;
          height: 52px;
          border: 1px solid #ddd;
          border-radius: 12px;
          padding: 0 16px;
          margin-bottom: 10px;
        }

        .password-wrapper:focus-within {
          border-color: #5ac88f;
        }

        .password-wrapper input {
          border: none;
          margin: 0;
          padding: 0;
          height: 100%;
          flex: 1;
          font-size: 14px;
          outline: none;
        }

        .eye {
          cursor: pointer;
          color: #777;
          user-select: none;
          font-size: 18px;
        }

        /* ===== FORGOT ===== */
        .forgot {
          text-align: right;
          margin-bottom: 24px;
        }

        .forgot span {
          font-size: 13px;
          color: #5ac88f;
          font-weight: 500;
          cursor: pointer;
        }

        /* ===== BUTTON ===== */
        .login-btn {
          width: 100%;
          height: 52px;
          border-radius: 999px;
          background: #9ee6b8;
          border: none;
          font-weight: 600;
          margin-bottom: 24px;
          cursor: pointer;
          font-size: 15px;
        }

        .login-btn:hover {
          background: #8fddb0;
        }

        /* ===== SIGN UP ===== */
        .signup {
          text-align: center;
          color: #555;
        }

        .signup span {
          color: #5ac88f;
          font-weight: 600;
          text-decoration: underline;
          cursor: pointer;
        }
      `}</style>

            <div className="login-container">
                {isDesktop && (
                    <div className="banner-wrapper">
                        <div className="banner-slider" ref={sliderRef}>
                            {banners.map((img, i) => (
                                <div className="banner-slide" key={i}>
                                    <img src={img} alt={`banner-${i}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="login-right">
                    <div className="form-wrapper">
                        <img
                            src="/assets/leftLogo.png"
                            className="logo"
                            alt="logo"
                        />

                        <h2>Welcome back 👋</h2>
                        <p className="sub">
                            Let’s get you back to your learning plan
                        </p>

                        <input type="email" placeholder="Email" />

                        <div className="password-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                            />
                            <span
                                className="eye"
                                onClick={() =>
                                    setShowPassword((prev) => !prev)
                                }
                            >
                                {showPassword ? "🙈" : "👁"}
                            </span>
                        </div>

                        <div className="forgot">
                            <span onClick={() => navigate("/forgot")}>
                                Forgot password?
                            </span>
                        </div>

                        <button className="login-btn">Login</button>

                        <p className="signup">
                            New to TIKO?{" "}
                            <span onClick={() => navigate("/register")}>
                                Sign Up
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
