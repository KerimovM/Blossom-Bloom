import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';

export default function QuickViewModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-cream-50 w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full text-charcoal-900 hover:bg-rose-100 hover:text-rose-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Image */}
          <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-[600px] relative">
            <img 
              src={product.image_url} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Details */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
             <div className="mb-2">
                <span className="text-xs font-medium text-sage-500 uppercase tracking-widest">{product.category}</span>
             </div>
            <h2 className="font-serif text-3xl md:text-5xl text-charcoal-900 mb-4">{product.name}</h2>
            <p className="text-2xl text-charcoal-800 mb-6 font-light">${product.price.toFixed(2)}</p>
            
            <div className="w-16 h-px bg-cream-300 mb-6"></div>
            
            <p className="text-charcoal-600 leading-relaxed mb-10 font-light">
              {product.description || "Beautifully arranged fresh flowers carefully selected for maximum bloom life and visual impact."}
            </p>

            <button 
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="w-full bg-charcoal-900 text-white py-4 font-medium tracking-widest uppercase text-sm flex items-center justify-center gap-3 hover:bg-charcoal-800 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" /> Add to Cart
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
