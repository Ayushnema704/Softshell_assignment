import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated background shapes */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-accent opacity-30 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary opacity-30 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass p-10 md:p-16 rounded-3xl inline-block shadow-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
            Unlock Value from <span className="highlight">Unused Software Licenses</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-10 text-dark/80 dark:text-light/80">
            SoftSell helps you resell your unused software licenses quickly and securely.
          </p>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="btn btn-primary text-lg px-10 py-4"
          >
            Get a Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 