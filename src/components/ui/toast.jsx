import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, X } from 'lucide-react';

export const Toast = ({ message, type = 'success', onClose, duration = 5000 }) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-green-400" />,
    error: <XCircle className="w-5 h-5 text-red-400" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed top-4 right-4 z-[9999] max-w-md"
    >
      <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500">
        <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>
            <p className="flex-1 text-sm text-gray-200 leading-relaxed">{message}</p>
            <button
              onClick={onClose}
              className="flex-shrink-0 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']),
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
};

export const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <AnimatePresence mode="popLayout">
      {toasts.map((toast, index) => (
        <motion.div
          key={toast.id}
          style={{ top: `${index * 80 + 16}px` }}
          className="fixed right-4 z-[9999]"
        >
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
            duration={toast.duration}
          />
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

ToastContainer.propTypes = {
  toasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['success', 'error']),
      duration: PropTypes.number,
    })
  ).isRequired,
  removeToast: PropTypes.func.isRequired,
};

