import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import myImage from "/myImage.png";
const PeepingHuman = () => {
  const [direction, setDirection] = useState("left");
  const [key, setKey] = useState(0);

  useEffect(() => {
    const sides = ["left", "right", "top", "bottom"];
    const interval = setInterval(() => {
      setDirection(sides[Math.floor(Math.random() * sides.length)]);
      setKey((prev) => prev + 1); // re-trigger animation
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const variants = {
    hidden: {
      x:
        direction === "left"
          ? "-120%"
          : direction === "right"
          ? "120%"
          : 0,
      y:
        direction === "top"
          ? "-120%"
          : direction === "bottom"
          ? "120%"
          : 0,
      rotate: direction === "top" ? 180 : 0,
      opacity: 1,
    },
    peek: {
      x:
        direction === "left"
          ? "-15%"
          : direction === "right"
          ? "15%"
          : 0,
      y:
        direction === "top"
          ? "-15%"
          : direction === "bottom"
          ? "15%"
          : 0,
      rotate: direction === "top" ? 180 : 0,
      opacity: 1,
      transition: {
        duration: 2.5, // smooth slow entry
        ease: "easeInOut",
      },
    },
    back: {
      x:
        direction === "left"
          ? "-120%"
          : direction === "right"
          ? "120%"
          : 0,
      y:
        direction === "top"
          ? "-120%"
          : direction === "bottom"
          ? "120%"
          : 0,
      rotate: direction === "top" ? 180 : 0,
      opacity: 1,
      transition: {
        duration: 2.5, // smooth slow exit
        ease: "easeInOut",
        delay: 1, // stays visible for a bit
      },
    },
  };

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
      <motion.div
        key={key}
        className="absolute w-64 h-64"
        initial="hidden"
        animate={["peek", "back"]}
        variants={variants}
      >
        <img
          src={myImage}
          alt="Human peeping"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
};

export default PeepingHuman;
