import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import cards from "../data/csr";

const CsrSlider = () => {
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
        {cards.map((card) => {
          return (
            <motion.div className="slider__items" key={card}>
              <div className="slider__item--csr">
                <h6 className="slider__title">{card.title}</h6>
                <p className="slider__info">{card.info}</p>
                <p className="slider__hashtag text-gradient">{card.hash}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default CsrSlider;
