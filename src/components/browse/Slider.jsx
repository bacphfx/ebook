import React, { useEffect, useState } from "react";
import "./Slider.css";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import BannerAPI from "../api/banner";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const getBanners = async () => {
      try {
        const res = await BannerAPI.getAllData();
        setBanners(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBanners();
  }, []);

  useEffect(() => {
    const lastIndex = banners.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="container">
      <div className="wrapper">
        {banners.map((b, i) => {
          let position = "nextSlide";
          if (i === index) {
            position = "activeSlide";
          }
          if (i === index - 1 || (index === 0 && i === banners.length - 1)) {
            position = "lastSlide";
          }
          return (
            <article key={b.id} className={position}>
              <img src={b.image} className="img" alt={`Slide ${b.id}`} />
            </article>
          );
        })}
      </div>
      <div className="arrow arrow-left" onClick={() => setIndex(index - 1)}>
        <ArrowBackIosNew />
      </div>
      <div className="arrow arrow-right" onClick={() => setIndex(index + 1)}>
        <ArrowForwardIos />
      </div>
    </div>
  );
};

export default Slider;
