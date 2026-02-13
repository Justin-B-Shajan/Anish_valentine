import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeartBackground from '../components/HeartBackground';

const Welcome = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <HeartBackground count={30} />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-soft-pink to-white opacity-60" />

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-5xl md:text-8xl font-display text-crimson mb-4 text-shadow leading-tight"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Happy Valentine's Day,
        </motion.h1>

        <motion.h2
          className="text-4xl md:text-7xl font-display text-bright-red mb-8 text-shadow"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          EDO
        </motion.h2>

        <motion.p
          className="text-lg md:text-2xl text-gray-700 mb-10 font-body px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          A special journey awaits you...
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Link to="/reasons">
            <motion.button
              className="px-8 md:px-12 py-5 md:py-6 bg-crimson text-white text-lg md:text-2xl font-display rounded-full shadow-2xl hover:bg-bright-red transition-colors relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 20px 40px rgba(220, 20, 60, 0.4)',
                  '0 25px 50px rgba(220, 20, 60, 0.6)',
                  '0 20px 40px rgba(220, 20, 60, 0.4)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="relative z-10">Begin Your Journey ❤️</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-bright-red to-crimson"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.button>
          </Link>

        </motion.div>
      </motion.div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-crimson text-2xl md:text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, -60],
              opacity: [0.3, 0.6, 0],
              scale: [1, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          >
            💕
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
