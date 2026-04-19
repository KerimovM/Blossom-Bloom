import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { PRODUCTS, CATEGORIES } from "../data/products";

export default function ProductSection({ activeCategory, onCategoryChange, onAddToCart, onQuickView }) {
    const filtered = activeCategory === "All"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <section id="products" className="py-24 px-10 lg:px-16 bg-parchment">
            <div className="text-center mb-16">
                <p className="font-sans text-xs tracking-[0.28em] uppercase text-gold mb-4">
                    Our Collection
                </p>
                <h2 className="font-serif text-5xl lg:text-6xl font-normal text-charcoal">
                    Flowers for every <em className="italic text-rose">moment</em>
                </h2>
            </div>

      // Category filter pills
            <div className="flex gap-3 justify-center flex-wrap mb-14">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        onClick={() => onCategoryChange(cat)}
                        className={`px-6 py-2.5 rounded-full font-sans text-xs font-medium
                         tracking-widest uppercase border transition-all duration-250
                         ${activeCategory === cat
                                ? "bg-charcoal text-cream border-charcoal"
                                : "bg-transparent text-charcoal/60 border-mist hover:border-charcoal/40 hover:text-charcoal"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

      // Product grid with layout animation
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                <AnimatePresence mode="popLayout">
                    {filtered.map((product, i) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                            onQuickView={onQuickView}
                            animDelay={i * 0.07}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}