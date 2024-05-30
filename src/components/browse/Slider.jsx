import React, { useEffect, useState } from "react";
import "./Slider.css";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import data from "../../data";
const Slider = () => {
  const [banner, setBanner] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = banner.length - 1;
    // console.log(index);
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, banner]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="slide">
          {banner.map((b, i) => {
            let position = "nextSlide";
            if (i === index) {
              position = "activeSlide";
            }
            if (i === index - 1 || (index === 0 && i === banner.length - 1)) {
              position = "lastSlide";
            }
            return (
              <article key={b.id} className={position}>
                <img src={b.image} className="img" />
              </article>
            );
          })}
        </div>
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
