import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export default function ProductCard({ product, onQuickView }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-cream-200 cursor-pointer overflow-hidden">
        <img 
          src={product.image_url} 
          alt={product.name}
          className="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-rose-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
              New
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-charcoal-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
              Best Seller
            </span>
          )}
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-charcoal-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={() => onQuickView(product)}
            className="bg-white/90 backdrop-blur-sm text-charcoal-900 px-6 py-3 font-medium text-sm tracking-wider uppercase inline-flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-charcoal-900 hover:text-white"
          >
            <Eye className="w-4 h-4" /> Quick View
          </button>
        </div>
      </div>

      {/* Details Container */}
      <div className="pt-5 pb-2 text-center">
        <h3 className="text-sm font-medium text-sage-500 uppercase tracking-widest mb-1">{product.category}</h3>
        <p className="font-serif text-xl font-medium text-charcoal-900 mb-2">{product.name}</p>
        <p className="text-charcoal-800">${product.price.toFixed(2)}</p>
      </div>
    </motion.div>
  );
}
