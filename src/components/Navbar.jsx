import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cream-50/90 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-1">
          <a href="#" className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-charcoal-900">
            Blossom & Bloom
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center flex-1 justify-center">
          {['Home', 'Shop', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={item === 'Shop' ? '#products' : '#'}
              className="text-sm font-medium text-charcoal-800 hover:text-rose-500 transition-colors uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Nav (Cart + Mobile Toggle) */}
        <div className="flex-1 flex justify-end items-center space-x-4">
          <button 
            onClick={onOpenCart}
            className=" relative p-2 text-charcoal-800 hover:text-rose-500 transition-colors group"
          >
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <motion.span 
                key={cartCount}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center pointer-events-none group-hover:bg-rose-600 transition-colors"
                style={{ y: -2, x: 2 }}
              >
                {cartCount}
              </motion.span>
            )}
          </button>
          
          <button 
            className="md:hidden p-2 text-charcoal-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-cream-50 px-6 py-4 border-t border-cream-200"
        >
          <div className="flex flex-col space-y-4">
            {['Home', 'Shop', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={item === 'Shop' ? '#products' : '#'}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-charcoal-800"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
