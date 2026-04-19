import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-cream-100">
      {/* Background Image Area */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src="/hero.png" 
          alt="Elegantly arranged flowers" 
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream-50/80 via-cream-50/40 to-transparent"></div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-start">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-rose-500 font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
              Premium Floral Arrangements
            </h2>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-charcoal-900 leading-tight mb-6">
              Where Beauty <br/> Blooms.
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-charcoal-800 mb-10 max-w-lg font-light leading-relaxed"
          >
            Curated, fresh, and meticulously designed floral pieces for every unforgettable moment.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            onClick={scrollToProducts}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-charcoal-900 text-white font-medium text-sm md:text-base tracking-widest uppercase transition-colors hover:bg-charcoal-800 w-full md:w-auto"
          >
            Shop Now
          </motion.button>
        </div>
      </div>
    </section>
  );
}