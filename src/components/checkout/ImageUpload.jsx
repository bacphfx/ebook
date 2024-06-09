import React, { useState } from "react";
import BookAPI from "../api/bookAPI";
import SubscribeAPI from "../api/subscribeAPI";
import "./imageUpload.css";
import alertify from "alertifyjs";
import { useNavigate } from "react-router-dom";

const ImageUpload = ({ jsonData }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // Hàm để xử lý khi người dùng chọn ảnh
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Hàm để xử lý khi người dùng gửi form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append("image", selectedImage);
    if (jsonData?.type === "B") {
      formData.append("book_id", jsonData?.id);
    }
    if (jsonData?.type === "S") {
      formData.append("subscription_id", jsonData?.id);
    }
    formData.append("code", jsonData.code);

    try {
      let res;
      if (jsonData?.type === "B") {
        res = await BookAPI.postBuyBook(formData, token);
      }
      if (jsonData?.type === "S") {
        res = await SubscribeAPI.postSubscribe(formData, token);
      }
      alertify.set("notifier", "position", "bottom-left");
      alertify.success("Bạn đã gửi yêu cầu thành công");
      navigate(-1);
    } catch (error) {
      alertify.set("notifier", "position", "bottom-left");
      alertify.error(error.response.data.message);
    }
  };

  return (
    <div className="image-upload-container">
      <form onSubmit={handleSubmit} className="image-upload-form">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Gửi yêu cầu</button>
        {preview && (
          <img
            src={preview}
            alt="Image Preview"
            style={{ maxWidth: "300px", marginTop: "10px" }}
          />
        )}
      </form>
    </div>
  );
};

export default ImageUpload;
