import { motion } from "framer-motion";

export default function Toast({ message }) {
    return (
        <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[400]
                  bg-charcoal text-cream px-6 py-3 rounded-full
                  font-sans text-sm flex items-center gap-3
                  shadow-2xl pointer-events-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
            <span className="w-2 h-2 rounded-full bg-sage flex-shrink-0" />
            {message}
        </motion.div>
    );
}