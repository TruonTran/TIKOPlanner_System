import { useEffect } from "react";

const footerStyles = `
/* ===== FOOTER ADVANCED ===== */
.footer {
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  padding: 60px 80px 30px;
}

.footerTop {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
}

.footerBrand h3 {
  font-size: 26px;
  margin-bottom: 12px;
}

.footerBrand p {
  color: #64748b;
  line-height: 1.6;
  max-width: 360px;
}

.footerTitle {
  font-weight: 600;
  margin-bottom: 14px;
}

.footerList {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footerList li {
  margin-bottom: 10px;
}

.footerList a {
  text-decoration: none;
  color: #475569;
  transition: color .2s;
}

.footerList a:hover {
  color: #22c55e;
}

.footerBottom {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
  text-align: center;
  color: #94a3b8;
  font-size: 14px;
}
`;

export default function Footer() {
    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = footerStyles;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    return (
        <footer className="footer">
            <div className="footerTop">
                {/* BRAND */}
                <div className="footerBrand">
                    <h3>TIKO Planner</h3>
                    <p>
                        TIKO Planner là nền tảng kết nối sinh viên với mentor trong ngành,
                        giúp đặt lịch học 1–1 nhanh chóng, linh hoạt và hiệu quả.
                    </p>
                </div>

                {/* POLICY */}
                <div>
                    <div className="footerTitle">Chính sách</div>
                    <ul className="footerList">
                        <li><a href="/privacy">Chính sách bảo mật</a></li>
                        <li><a href="/terms">Điều khoản sử dụng</a></li>
                        <li><a href="/refund">Chính sách hoàn tiền</a></li>
                        <li><a href="/contact">Liên hệ hỗ trợ</a></li>
                    </ul>
                </div>

                {/* MENTOR */}
                <div>
                    <div className="footerTitle">Dành cho Mentor</div>
                    <ul className="footerList">
                        <li><a href="/mentor/register">Đăng ký mentor</a></li>
                        <li><a href="/mentor/dashboard">Quản lý lịch dạy</a></li>
                        <li><a href="/mentor/reviews">Đánh giá & phản hồi</a></li>
                    </ul>
                </div>

                {/* MENU */}
                <div>
                    <div className="footerTitle">Menu</div>
                    <ul className="footerList">
                        <li><a href="/">Trang chủ</a></li>
                        <li><a href="/mentors">Danh sách mentor</a></li>
                        <li><a href="/about">Giới thiệu</a></li>
                        <li><a href="/login">Đăng nhập</a></li>
                    </ul>
                </div>
            </div>

            <div className="footerBottom">
                © 2026 TIKO Planner. All rights reserved.
            </div>
        </footer>
    );
}
