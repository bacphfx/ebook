import React from "react";
import QRCode from "qrcode.react";

const QRCodeComponent = ({ accountNumber, bankCode, amount, message }) => {
  // Tạo chuỗi nội dung QR code theo định dạng VietQR
  const qrContent =
    "069704070114190359467980110208QRIBFTTA5204601153037045802VN5903TCB6005Hanoi6304064d";

  return (
    <div>
      <h3>Quét mã QR để chuyển khoản</h3>
      <QRCode value={qrContent} size={200} />
    </div>
  );
};

export default QRCodeComponent;
