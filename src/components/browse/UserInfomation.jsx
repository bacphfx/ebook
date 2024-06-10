import React from "react";
import "./userInformation.css";
import { Link } from "react-router-dom";

const UserInfomation = () => {
  return (
    <div className="user-information-wrapper">
      {/* <div className="user-information-item user-detail">
        Thông tin tài khoản
      </div> */}
      <div className="user-information-item user-subscribe">Gói đã đăng ký</div>
      <div>
        <Link
          to="/purchased-books"
          className="user-information-item user-books"
        >
          Sách đã mua
        </Link>
      </div>
      <div>
        <Link to="/recent" className="user-information-item user-books">
          Lịch sử đọc sách
        </Link>
      </div>
    </div>
  );
};

export default UserInfomation;
