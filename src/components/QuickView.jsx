import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";

export default function QuickView({ product, onClose, onAddToCart }) {
    useEffect(() => {
        const handler = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", handler);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handler);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-5
                  bg-charcoal/55 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="bg-white rounded-3xl max-w-[640px] w-full overflow-hidden
                    grid md:grid-cols-2 max-h-[85vh] overflow-y-auto"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
            >
        // Image pane
                <div className="relative min-h-[280px]">
                    <img src={product.image} alt={product.name}
                        className="w-full h-full object-cover" />
                    <button onClick={onClose}
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream/90
                        flex items-center justify-center text-charcoal/70
                        hover:text-charcoal transition-colors">
                        <X size={16} />
                    </button>
                    {product.badge && (
                        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full
                              font-sans text-xs font-medium uppercase tracking-wide
                              ${product.badge === "Best Seller"
                                ? "bg-gold text-white"
                                : "bg-sage text-white"}`}>
                            {product.badge}
                        </span>
                    )}
                </div>

        // Details pane
                <div className="p-8 flex flex-col">
                    <p className="font-sans text-xs text-sage uppercase tracking-widest mb-2">
                        {product.category}
                    </p>
                    <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4 leading-snug">
                        {product.name}
                    </h2>
                    <p className="font-sans text-sm text-charcoal/65 leading-relaxed flex-1 mb-6">
                        {product.desc}
                    </p>
                    <p className="font-serif text-3xl font-bold text-charcoal mb-6">
                        ${product.price}
                    </p>
                    <div className="flex gap-3">
                        <button className="btn-primary flex-1" onClick={() => onAddToCart(product)}>
                            <ShoppingBag size={16} /> Add to Cart
                        </button>
                        <button className="btn-icon w-12 h-12" onClick={onClose}>
                            <X size={16} />
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}