import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2 } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, removeFromCart }) {
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal-900/40 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-cream-200">
              <h2 className="font-serif text-2xl text-charcoal-900">Your Cart</h2>
              <button 
                onClick={onClose}
                className="p-2 text-charcoal-500 hover:text-rose-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {cart.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-charcoal-500">
                  <p className="text-lg">Your cart is empty.</p>
                  <button 
                    onClick={onClose}
                    className="mt-4 text-rose-500 underline uppercase tracking-widest text-sm font-medium hover:text-rose-600"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 border-b border-cream-200 pb-6 last:border-0 last:pb-0">
                    <img 
                      src={item.image_url} 
                      alt={item.name} 
                      className="w-20 h-24 object-cover"
                    />
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h3 className="font-serif text-lg text-charcoal-900 leading-tight mb-1">{item.name}</h3>
                        <p className="text-charcoal-500 text-sm">Qty: {item.quantity}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-medium text-charcoal-900">${(item.price * item.quantity).toFixed(2)}</span>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-charcoal-400 hover:text-rose-500 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-cream-200 bg-cream-100">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-charcoal-800 font-medium tracking-wide uppercase text-sm">Subtotal</span>
                  <span className="font-serif text-2xl font-medium text-charcoal-900">${cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-charcoal-900 text-white py-4 font-medium tracking-widest uppercase text-sm hover:bg-charcoal-800 transition-colors">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
