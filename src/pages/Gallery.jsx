import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = [
  '/IMG_9654.PNG',
  '/IMG_9655.PNG',
  '/IMG_9657.PNG',
  '/IMG_9658.PNG',
  '/IMG_9659.PNG',
  '/IMG_9660.PNG',
];

const Gallery = () => {
  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden bg-[#0a0506]">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0d] via-[#4a0e1c] to-[#0a0506] opacity-80" />

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display text-white mb-6">Our Memories</h1>
          <p className="text-xl text-soft-pink font-body italic">
            "Every picture tells a story of the love we share."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 glass shadow-2xl flex items-center justify-center bg-black/20"
            >
              <img
                src={src}
                alt={`Memory ${index + 1}`}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-body text-lg italic">Forever & Always ❤️</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
