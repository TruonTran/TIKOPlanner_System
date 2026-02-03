/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import Footer from "../screen/Footer";

/* ===================== CSS ===================== */
const styles = `
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(6px); }
  100% { transform: translateY(0); }
}

/* ===== SLIDER CORE ===== */
.slider{
  width: 100%;
  height: var(--height);
  overflow: hidden;
  margin-top: 30px;
  mask-image: linear-gradient(
    to right,
    transparent,
    #000 10% 90%,
    transparent
  );
}

.slider .list{
  width: 100%;
  min-width: calc(var(--width) * var(--quantity));
  position: relative;
  height: var(--height);
}

.slider .item{
  width: var(--width);
  height: var(--height);
  position: absolute;
  left: 100%;
  animation: autoRun 12s linear infinite;
  animation-delay: calc(
    (12s / var(--quantity)) * (var(--position) - 1) - 12s
  );
  transition: filter .4s;
}

.slider .item img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,.15);
}

@keyframes autoRun{
  from { left: 100%; }
  to { left: calc(var(--width) * -1); }
}

.slider:hover .item{
  animation-play-state: paused;
  filter: grayscale(1);
}

.slider .item:hover{
  filter: grayscale(0);
}

/* ===== GLOBAL ===== */
body {
  margin: 0;
  font-family: Segoe UI, sans-serif;
}

.app {
  background: #f8fffc;
  color: #0f172a;
}

/* ===== HEADER ===== */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px;
  animation: fadeDown .6s ease;
}

.logo {
  width: 250px;
  height: 100px;
  object-fit: contain;
}

.nav {
  display: flex;
  gap: 24px;
}

.navItem {
  text-decoration: none;
  color: #0f172a;
  font-weight: 500;
}

.signupBtn {
  background: #22c55e;
  border: none;
  padding: 8px 18px;
  border-radius: 20px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}

/* ===== CAROUSEL WRAPPER ===== */
.carousel-wrapper {
  max-width: 1800px;     /* chỉnh nhỏ / lớn tại đây */
  margin: 0 auto 60px;   /* canh giữa + cách dưới */
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,.12);
}

/* ép chiều cao đồng đều */
.carousel-item {
  height: 800px;
}

.carousel-item img {
  height: 100%;
  object-fit: cover;
}

/* ===== INFO SECTION ===== */
.infoSection {
  padding: 80px 80px;
  background: #ffffff;
}

.infoContainer {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  gap: 60px;
  align-items: center;
}

.infoImage {
  display: flex;
  justify-content: center;
}

.infoImage img {
  width: 160px; 
  height: auto;
  animation: float 4s ease-in-out infinite;
  filter: drop-shadow(0 10px 15px rgba(34, 197, 94, 0.2));
}

.infoContent h2 {
  font-size: 32px;
  margin-bottom: 24px;
  color: #0f172a;
}

.infoContent p {
  color: #475569;
  margin-bottom: 24px;
  font-size: 17px;
  line-height: 1.6;
}

.infoContent ul {
  padding-left: 0;
  list-style: none;
}

.infoContent li {
  margin-bottom: 14px;
  color: #334155;
  display: flex;
  align-items: center;
  gap: 12px;
}

.infoContent li::before {
  content: "✓";
  color: #22c55e;
  font-weight: bold;
  background: #f0fdf4;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 12px;
  flex-shrink: 0;
}


/* ===== HERO ===== */
.hero {
  text-align: center;
  padding: 90px 20px;
  animation: fadeUp .8s ease;
}

.heroTitle {
  font-size: 44px;
}

.green {
  color: #22c55e;
}

.heroDesc {
  max-width: 700px;
  margin: 16px auto;
  color: #475569;
}

/* ===== FEATURES ===== */
.features {
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 60px 40px;
}

.featureCard {
  background: #fff;
  padding: 28px;
  border-radius: 18px;
  width: 280px;
  animation: scaleIn .6s ease;
}

/* ===== MENTORS ===== */
.mentors {
  padding: 60px 80px;
}

.mentorHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link {
  color: #22c55e;
  font-weight: 600;
  text-decoration: none;
}
`;

/* ================= COMPONENT ================= */
export default function GuestPage() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = styles;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <img src="/assets/leftLogo.png" alt="logo" className="logo" />

        <nav className="nav">
          <a className="navItem" href="/mentors">Mentors</a>
          <a className="navItem" href="/about">About</a>
          <button className="signupBtn" onClick={() => window.location.href = "/register"}>
            Sign Up
          </button>
        </nav>
      </header>

      <div className="carousel-wrapper">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/assets/guest_page/banner/banner1.png" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src="/assets/guest_page/banner/banner2.png" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src="/assets/guest_page/banner/banner3.png" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src="/assets/guest_page/banner/banner4.png" className="d-block w-100" />
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      {/* INFO SECTION */}
      <section className="infoSection">
        <div className="infoContainer">
          {/* LEFT IMAGE - REDUCED SIZE */}
          <div className="infoImage">
            <img
              src="https://via.placeholder.com/160?text=Favicon"
              alt="favicon illustration"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="infoContent">
            <h2>Nền tảng đặt lịch học cùng Mentor chuyên nghiệp</h2>

            <p>
              Website của chúng tôi được xây dựng xoay quanh trải nghiệm người học:
              nhanh, đơn giản và tập trung vào việc đặt lịch với mentor phù hợp nhất.
            </p>

            <ul>
              <li>Người học có thể tìm mentor và đặt lịch chỉ trong vài bước</li>
              <li>Giao diện trực quan, dễ sử dụng ngay từ lần truy cập đầu tiên</li>
              <li>Lịch học rõ ràng, linh hoạt theo thời gian của người dùng</li>
              <li>Tối ưu trải nghiệm để giảm thao tác và tiết kiệm thời gian</li>
              <li>Xây dựng độ tin cậy giữa mentor và người học</li>
            </ul>
          </div>
        </div>
      </section>



      {/* HERO */}
      <section className="hero">
        <h1 className="heroTitle">
          Book Your Next Learning Session <br />
          <span className="green">in Under 1 Minute</span>
        </h1>

        <p className="heroDesc">
          Connect with industry experts. Choose your stack. Schedule instantly.
        </p>
      </section>

      {/* TOP MENTORS WITH SLIDER */}
      <section className="mentors">
        <div className="mentorHeader">
          <h2>Top Rated Mentors</h2>
        </div>

        <div
          className="slider"
          style={{
            "--width": "220px",
            "--height": "260px",
            "--quantity": 6
          }}
        >
          <div className="list">
            <div className="item" style={{ "--position": 1 }}>
              <img src="/assets/guest_page/slide/mentor1.png" />
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <img src="/assets/guest_page/slide/mentor2.png" />
            </div>
            <div className="item" style={{ "--position": 3 }}>
              <img src="/assets/guest_page/slide/mentor3.png" />
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <img src="/assets/guest_page/slide/mentor4.png" />
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <img src="/assets/guest_page/slide/mentor5.png" />
            </div>
            <div className="item" style={{ "--position": 6 }}>
              <img src="/assets/guest_page/slide/mentor6.png" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ===== SUB COMPONENT ===== */
// eslint-disable-next-line no-unused-vars
const Feature = ({ title, desc }) => (
  <div className="featureCard">
    <h3>{title}</h3>
    <p style={{ color: "#475569" }}>{desc}</p>
  </div>
);
