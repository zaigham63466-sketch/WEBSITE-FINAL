import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '923555427999';
const DEFAULT_MESSAGE = 'Hi! I\'m interested in booking a trek or expedition with K2Adventure. Can you help me plan my trip?';

export default function WhatsAppWidget() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />

      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-card text-foreground text-sm font-medium px-4 py-2 rounded-xl shadow-lg border border-border whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us 💬
      </span>

      {/* Button */}
      <div className="relative w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all">
        <MessageCircle className="w-6 h-6 text-white" />
      </div>
    </motion.a>
  );
}
