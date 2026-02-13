import { motion } from 'framer-motion';
import { useState } from 'react';

const reasons = [
  { id: 1, front: 'Your Smile', back: 'It lights up my entire world every single day' },
  { id: 2, front: 'Your Laugh', back: 'The most beautiful sound I\'ve ever heard' },
  { id: 3, front: 'Your Kindness', back: 'You make everyone around you feel special' },
  { id: 4, front: 'Your Intelligence', back: 'Your mind amazes me in every conversation' },
  { id: 5, front: 'Your Passion', back: 'The way you care deeply about what matters' },
  { id: 6, front: 'Your Eyes', back: 'I could get lost in them forever' },
  { id: 7, front: 'Your Heart', back: 'So full of love, compassion, and warmth' },
  { id: 8, front: 'Your Presence', back: 'Being with you feels like home' },
];

const ReasonsILoveYou = () => {
  const [flippedCards, setFlippedCards] = useState(new Set());

  const handleCardClick = (id) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen py-20 px-4 relative">
      {/* Rose Petal Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🌹</div>
        <div className="absolute top-32 right-20 text-4xl">🌹</div>
        <div className="absolute bottom-20 left-20 text-5xl">🌹</div>
        <div className="absolute bottom-40 right-10 text-3xl">🌹</div>
        <div className="absolute top-1/2 left-1/4 text-4xl">🌹</div>
        <div className="absolute top-1/3 right-1/3 text-5xl">🌹</div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10 pt-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-7xl font-display text-crimson text-center mb-10 md:mb-16 text-shadow leading-tight px-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Reasons I Love You
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-2">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              variants={cardVariants}
              className="h-48 md:h-64"
              style={{ perspective: '1000px' }}
              onClick={() => handleCardClick(reason.id)}
            >
              <motion.div
                className="relative w-full h-full cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{
                  rotateY: flippedCards.has(reason.id) ? 180 : 0,
                }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Front of Card */}
                <div
                  className="absolute inset-0 glass rounded-2xl shadow-xl border-2 border-soft-pink flex items-center justify-center p-4 md:p-6"
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                  <h3 className="text-xl md:text-3xl font-display text-crimson text-center">
                    {reason.front}
                  </h3>
                </div>

                {/* Back of Card */}
                <div
                  className="absolute inset-0 glass rounded-2xl shadow-xl border-2 border-crimson flex items-center justify-center p-4 md:p-6 bg-gradient-to-br from-soft-pink to-white"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <p className="text-base md:text-xl font-body text-gray-800 text-center">
                    {reason.back}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center mt-10 md:mt-12 text-gray-600 text-base md:text-lg font-body px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Click on any card to reveal why I love you 💕
        </motion.p>
      </motion.div>

    </div>
  );
};

export default ReasonsILoveYou;
