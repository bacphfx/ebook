import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import axios from "axios";

import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePhone(phone) {
    const phoneNumberRegex = /^[0-9]{10}$/; // Kiểm tra xem chuỗi có 10 chữ số hay không
    return phoneNumberRegex.test(phone);
  }

  const handleRegister = () => {
    // Handle registration logic here (e.g., API calls, validation)
    if (name.length == 0) {
      setError("Vui lòng nhập tên");
    } else if (!validatePhone(phone)) {
      setError("Số điện thoại không đúng");
    } else if (!validateEmail(email) || email === "") {
      setError("Email không đúng");
    } else if (password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự");
    } else if (password !== confirmPassword) {
      setError("Mật khẩu nhập lại không chính xác");
    } else {
      setError("");
      const postRegister = async () => {
        const body = {
          name: name,
          phone: phone,
          email: email,
          password: password,
          password_confirmation: confirmPassword,
        };
        try {
          const res = await axios.post(
            "http://103.186.65.188/api/register",
            body
          );
          // alert("Đăng ký thành công, bạn sẽ được chuyển đến trang chủ");
          alertify.set("notifier", "position", "bottom-left");
          alertify.success("Đăng ký tài khoản thành công!");
          console.log(res.data);
          navigate("/login");
        } catch (error) {
          setError(error.response.data.errors[0].message);
        }
      };
      postRegister();
    }
  };

  return (
    <div className="registration-form">
      <h2>Đăng ký tài khoản</h2>
      <h3>Đăng ký để mua và theo dõi quá trình đọc sách</h3>
      <input
        type="text"
        placeholder="Họ và tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Số điện thoại"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="input-with-eye">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          className="eye-icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <VisibilityOffOutlinedIcon style={{ color: "black" }} />
          ) : (
            <VisibilityOutlinedIcon style={{ color: "black" }} />
          )}
        </span>
      </div>
      <div className="input-with-eye">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Nhập lại mật khẩu"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <span
          className="eye-icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <VisibilityOffOutlinedIcon style={{ color: "black" }} />
          ) : (
            <VisibilityOutlinedIcon style={{ color: "black" }} />
          )}
        </span>
      </div>
      {error !== "" && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleRegister}>Đăng ký</button>
      <p>
        Bạn đã có tài khoản? <a href="/login">Đăng nhập ngay</a>
      </p>
    </div>
  );
};

export default Register;
