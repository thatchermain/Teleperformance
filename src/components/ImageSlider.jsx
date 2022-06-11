import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import images from "../data/images";

const ImageSlider = () => {
  const [width, setWidth] = useState(0);
  const slider = useRef();
  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);
  return (
    <motion.div ref={slider} className="slider">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="slider__inner"
      >
        {images.map((image) => {
          return (
            <motion.div className="slider__items" key={image}>
              <div className="slider__item">
                <img src={image.src} alt="" />
                <p className="slider__text">{image.text}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ImageSlider;
