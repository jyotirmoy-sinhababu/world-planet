import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <AnimatePresence>
      <div>
        <motion.img
          key={count}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          src={backgroundPhoto[count]}
          alt=''
        />
      </div>
    </AnimatePresence>
  );
};

export default HeroSection;
