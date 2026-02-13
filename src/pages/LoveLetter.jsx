import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const letterContent = `My Love,

You are the most beautiful part of my life. Your smile is my favorite sight, and your love is my greatest blessing.

Every moment with you feels magical. I can’t wait to build our forever together.

Forever yours,  
Your Future Husband 💕`;



const LoveLetter = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!showEnvelope) {
      setIsTyping(true);
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex < letterContent.length) {
          setDisplayedText(letterContent.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, 30);

      return () => clearInterval(typingInterval);
    }
  }, [showEnvelope]);

  const handleEnvelopeClick = () => {
    setShowEnvelope(false);
  };

  return (
    <div className="min-h-screen py-20 px-4 flex items-center justify-center relative">
      {/* Ink Splatter Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 text-8xl transform rotate-12">💧</div>
        <div className="absolute bottom-20 right-10 text-6xl transform -rotate-12">💧</div>
        <div className="absolute top-1/2 right-20 text-7xl transform rotate-45">💧</div>
      </div>

      {showEnvelope ? (
        <motion.div
          className="relative z-10 cursor-pointer"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          onClick={handleEnvelopeClick}
        >
          <motion.div
            className="text-center"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="text-9xl mb-6">💌</div>
            <motion.p
              className="text-2xl md:text-3xl font-display text-crimson"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Click to open
            </motion.p>
          </motion.div>

          {/* Envelope Opening Animation */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ rotateY: 0 }}
            animate={showEnvelope ? {} : { rotateY: 180, opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      ) : (
        <motion.div
          className="max-w-3xl mx-auto relative z-10 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass rounded-2xl p-6 md:p-12 shadow-2xl border-2 border-soft-pink relative">
            {/* Handwritten Style Paper */}
            <div className="relative">
              {/* Paper Texture */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-soft-pink/20 to-white rounded-lg" />

              {/* Letter Content */}
              <div className="relative z-10">
                <motion.div
                  className="text-xl md:text-3xl font-display text-crimson mb-6 md:mb-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  A Letter From My Heart
                </motion.div>

                <motion.pre
                  className="font-body text-base md:text-xl text-gray-800 whitespace-pre-wrap leading-relaxed"
                  style={{
                    fontFamily: "'Quicksand', 'Outfit', sans-serif",
                  }}
                >
                  {displayedText}
                  {isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      |
                    </motion.span>
                  )}
                </motion.pre>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-4 left-4 text-crimson text-2xl opacity-30">❦</div>
              <div className="absolute top-4 right-4 text-crimson text-2xl opacity-30">❦</div>
              <div className="absolute bottom-4 left-4 text-crimson text-2xl opacity-30">❦</div>
              <div className="absolute bottom-4 right-4 text-crimson text-2xl opacity-30">❦</div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LoveLetter;
