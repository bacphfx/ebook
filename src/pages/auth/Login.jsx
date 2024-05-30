import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import axios from "axios";

import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const postLogin = async () => {
      const body = {
        phone,
        password,
      };
      try {
        const res = await axios.post("http://103.186.65.188/api/login", body);
        alertify.set("notifier", "position", "bottom-left");
        alertify.success("Đăng nhập thành công!");
        navigate("/");
        console.log(res.data);
      } catch (error) {
        setError(error.response.data.errors[0].message);
      }
    };
    postLogin();
  };

  return (
    <div className="login-form">
      <h2>Đăng nhập</h2>
      <input
        type="text"
        placeholder="Số điện thoại"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
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
      {error !== "" && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleLogin}>Đăng nhập</button>
      <p>
        Bạn chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
      </p>
    </div>
  );
};

export default Login;
