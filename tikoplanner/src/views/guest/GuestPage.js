/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./guest.css";   // 👈 CHỈ THÊM DÒNG NÀY
import Footer from "../../components/layout/Footer";

export default function GuestPage() {
    return (
        <div className="app">
            {/* HEADER */}
            <header className="header">
                <img src="/assets/leftLogo.png" alt="logo" className="logo" />

                <nav className="nav">
                    <a className="navItem" href="/mentors">Mentors</a>
                    <a className="navItem" href="/about">About</a>
                    <button
                        className="signupBtn"
                        onClick={() => window.location.href = "/signup"}
                    >
                        Sign Up
                    </button>
                </nav>
            </header>

            {/* CAROUSEL */}
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

            {/* INFO */}
            <section className="infoSection">
                <div className="infoContainer">
                    <div className="infoImage">
                        <img src="https://via.placeholder.com/160?text=Favicon" />
                    </div>

                    <div className="infoContent">
                        <h2>Nền tảng đặt lịch học cùng Mentor chuyên nghiệp</h2>
                        <p>
                            Website của chúng tôi được xây dựng xoay quanh trải nghiệm người học.
                        </p>
                        <ul>
                            <li>Đặt lịch nhanh chóng</li>
                            <li>Giao diện dễ dùng</li>
                            <li>Lịch học linh hoạt</li>
                            <li>Tối ưu trải nghiệm</li>
                            <li>Tăng độ tin cậy</li>
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
                    Connect with industry experts.
                </p>
            </section>

            {/* SLIDER */}
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
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="item" style={{ "--position": i }}>
                                <img src={`/assets/guest_page/slide/mentor${i}.png`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
