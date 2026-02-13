import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HeartBackground = ({ count = 20 }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const newHearts = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      size: 20 + Math.random() * 30,
    }));
    setHearts(newHearts);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-crimson opacity-30"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            fontSize: `${heart.size}px`,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [-20, -40, -60],
            opacity: [0, 0.5, 0],
            scale: [1, 1.2, 0.8],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default HeartBackground;
