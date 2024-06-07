import React, { useState, useEffect } from "react";
import "./test.css";

const slides = [
  { id: 1, content: "Slide 1" },
  { id: 2, content: "Slide 2" },
  { id: 3, content: "Slide 3" },
  { id: 4, content: "Slide 4" },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${
              index === currentSlide
                ? "active"
                : index === (currentSlide - 1 + slides.length) % slides.length
                ? "prev"
                : index === (currentSlide + 1) % slides.length
                ? "next"
                : "hidden"
            }`}
          >
            {slide.content}
          </div>
        ))}
      </div>
      <div className="navigation">
        <button onClick={prevSlide}>&lt;</button>
        <button onClick={nextSlide}>&gt;</button>
      </div>
      <div className="indicators">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
