/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./guest.css";
import Footer from "../layout/Footer";
import { MessageSquare, Award, Users } from "lucide-react";


export default function GuestPage() {
    return (
        <div className="app">
            {/* HEADER */}
            <header className="header">
                <img src="/assets/leftLogo.png" alt="logo" className="logo" />

                <nav className="nav">
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

            {/* STATS */}
            <section className="stats-section">
                <div className="stat-card">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Mentors Chuyên nghiệp</span>
                </div>
                <div className="stat-card">
                    <span className="stat-number">10k+</span>
                    <span className="stat-label">Học viên tin tưởng</span>
                </div>
                <div className="stat-card">
                    <span className="stat-number">98%</span>
                    <span className="stat-label">Hài lòng về chất lượng</span>
                </div>
                <div className="stat-card">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Hỗ trợ học tập</span>
                </div>
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

            {/* PROJECT INTRO */}
            <section className="project-intro">
                <h2>Về Dự Án Của Chúng Tôi</h2>
                <p>MentorHub ra đời với sứ mệnh xóa tan khoảng cách tri thức giữa thế hệ đi trước và người học trẻ, tạo ra môi trường chia sẻ bền vững.</p>

                <div className="cards-container">
                    <div className="card">
                        <MessageSquare className="card-icon" size={32} />
                        <h3>Kết Nối Trực Tiếp</h3>
                        <p>Hệ thống call trực tuyến tích hợp giúp bạn và Mentor tương tác như đang ngồi cạnh nhau.</p>
                    </div>
                    <div className="card">
                        <Award className="card-icon" size={32} />
                        <h3>Chứng Nhận Uy Tín</h3>
                        <p>Hoàn thành các buổi mentoring để nhận được sự bảo chứng từ những chuyên gia có tầm ảnh hưởng.</p>
                    </div>
                    <div className="card">
                        <Users className="card-icon" size={32} />
                        <h3>Cộng Đồng Lớn Mạnh</h3>
                        <p>Không chỉ học 1:1, bạn còn tham gia vào mạng lưới các học viên cùng chí hướng trên toàn quốc.</p>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-box">
                    <h2>Sẵn sàng bứt phá sự nghiệp?</h2>
                    <button className="cta-btn">Tạo tài khoản miễn phí</button>
                </div>
            </section>

            {/* INFO
            <section className="infoSection">
                <div className="infoContainer">
                    <div className="infoImage">
                        <img src="/assets/favicon.png" />
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
            </section> */}

            <Footer />
        </div>
    );
}
