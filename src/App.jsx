import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import { products } from './data/products';
import { motion } from 'framer-motion';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('blossom_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    localStorage.setItem('blossom_cart', JSON.stringify(cart));
  }, [cart]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;
    return products.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="font-sans text-charcoal-900 bg-cream-50 min-h-screen">
      <Navbar cartCount={cartCount} onOpenCart={() => setCartDrawerOpen(true)} />
      
      <main>
        <Hero />
        
        <section id="products" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal-900 mb-4">Our Floral Collection</h2>
            <p className="text-charcoal-600 max-w-2xl mx-auto font-light">
              Explore our handcrafted arrangements designed to bring natural beauty into every space.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-colors ${
                  selectedCategory === category 
                    ? 'bg-charcoal-900 text-white' 
                    : 'bg-white text-charcoal-600 hover:bg-cream-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
          >
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onQuickView={setQuickViewProduct} 
              />
            ))}
          </motion.div>
        </section>
      </main>

      <footer className="bg-charcoal-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-serif text-3xl mb-6">Blossom & Bloom</h2>
          <p className="text-charcoal-400 font-light text-sm tracking-wide">
            © {new Date().getFullYear()} Blossom & Bloom. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Overlays */}
      <CartDrawer 
        isOpen={cartDrawerOpen} 
        onClose={() => setCartDrawerOpen(false)} 
        cart={cart}
        removeFromCart={removeFromCart}
      />
      
      {quickViewProduct && (
        <QuickViewModal 
          product={quickViewProduct} 
          onClose={() => setQuickViewProduct(null)} 
          onAddToCart={addToCart}
        />
      )}
    </div>
  );
}

export default App;
