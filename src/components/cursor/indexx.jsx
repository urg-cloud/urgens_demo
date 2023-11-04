import React, { useState, useEffect } from 'react';
import './cursor.css';
// import { motion } from "framer-motion";
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

const CircleCursor = () => {
  // const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  const [largecircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [smallcircle, setSmallCircle] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // setCursorPos({ x: e.clientX, y: e.clientY });
    setLargeCircle({ x: e.clientX, y: e.clientY });
    setSmallCircle({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="circle-cursor-container"
      // style={{
      //   left: `${cursorPos.x}px`,
      //   top: `${cursorPos.y}px`,
      // }}
    >

      <motion.div
        animate={{ x: largecircle.x, y:largecircle.y}}
        className="big-circle">

        </motion.div>
      <motion.div
         animate={{ x: smallcircle.x, y:smallcircle.y}}
        className="small-circle"></motion.div>
    </div>
  );
};

export default CircleCursor;
