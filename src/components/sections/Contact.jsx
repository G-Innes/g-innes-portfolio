import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from 'emailjs-com';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { BackgroundGradient } from '../ui/background-gradient';
import { ToastContainer } from '../ui/toast';

// Rate limiting constants
const RATE_LIMIT_KEY = 'contact_form_last_submit';
const RATE_LIMIT_COOLDOWN = 60000; // 1 minute cooldown between submissions

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const formVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

// Loading spinner component
const LoadingSpinner = () => (
  <svg
    className="animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

// Check if rate limited
const isRateLimited = () => {
  try {
    const lastSubmit = localStorage.getItem(RATE_LIMIT_KEY);
    if (!lastSubmit) return false;
    return Date.now() - parseInt(lastSubmit, 10) < RATE_LIMIT_COOLDOWN;
  } catch {
    return false;
  }
};

// Get remaining cooldown time in seconds
const getRemainingCooldown = () => {
  try {
    const lastSubmit = localStorage.getItem(RATE_LIMIT_KEY);
    if (!lastSubmit) return 0;
    const remaining = RATE_LIMIT_COOLDOWN - (Date.now() - parseInt(lastSubmit, 10));
    return Math.max(0, Math.ceil(remaining / 1000));
  } catch {
    return 0;
  }
};

// Set rate limit timestamp
const setRateLimitTimestamp = () => {
  try {
    localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
  } catch {
    // localStorage not available
  }
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Honeypot field for bot detection
  const [honeypot, setHoneypot] = useState('');

  const [toasts, setToasts] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  // Check rate limit on mount and update cooldown timer
  useEffect(() => {
    const updateCooldown = () => {
      const remaining = getRemainingCooldown();
      setCooldownRemaining(remaining);
    };

    updateCooldown();
    const interval = setInterval(updateCooldown, 1000);
    return () => clearInterval(interval);
  }, []);

  const addToast = (message, type = 'success') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, type, duration: 5000 }]);
  };

  const removeToast = id => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      // Silently "succeed" to not tip off the bot
      addToast("Message sent successfully! I'll get back to you soon.", 'success');
      setFormData({ name: '', email: '', message: '' });
      return;
    }

    // Rate limit check
    if (isRateLimited()) {
      addToast(
        `Please wait ${cooldownRemaining} seconds before sending another message.`,
        'error'
      );
      return;
    }

    // Basic validation
    if (formData.name.trim().length < 2) {
      addToast('Please enter a valid name.', 'error');
      return;
    }

    if (formData.message.trim().length < 10) {
      addToast('Please enter a message with at least 10 characters.', 'error');
      return;
    }

    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      console.error(
        'EmailJS configuration missing. Please check environment variables.'
      );
      addToast('Email service is not configured properly.', 'error');
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, e.target);

      // Set rate limit timestamp on successful submission
      setRateLimitTimestamp();
      setCooldownRemaining(RATE_LIMIT_COOLDOWN / 1000);

      addToast(
        "Message sent successfully! I'll get back to you soon.",
        'success'
      );
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error details:', error);
      addToast('Failed to send message. Please try again later.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDisabled = isSubmitting || cooldownRemaining > 0;

  return (
    <>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center py-20 px-4"
      >
        <motion.div
          className="w-[360px] sm:w-[600px] lg:w-[800px] mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text text-transparent text-center"
            variants={headerVariants}
          >
            Get In Touch
          </motion.h2>
          <motion.div variants={formVariants}>
            <BackgroundGradient className="p-8 rounded-[22px] bg-zinc-900">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Honeypot field - hidden from users, visible to bots */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={e => setHoneypot(e.target.value)}
                  className="absolute -left-[9999px] opacity-0 pointer-events-none"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <motion.div
                  className="space-y-2"
                  variants={fieldVariants}
                >
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    id="name"
                    name="name"
                    required
                    minLength={2}
                    maxLength={100}
                    value={formData.name}
                    onChange={e =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    disabled={isDisabled}
                  />
                </motion.div>
                <motion.div
                  className="space-y-2"
                  variants={fieldVariants}
                >
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    id="email"
                    name="email"
                    required
                    maxLength={254}
                    value={formData.email}
                    onChange={e =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    disabled={isDisabled}
                  />
                </motion.div>
                <motion.div
                  className="space-y-2"
                  variants={fieldVariants}
                >
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    placeholder="Your message..."
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={2000}
                    value={formData.message}
                    rows={5}
                    onChange={e =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    disabled={isDisabled}
                  />
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <motion.button
                    type="submit"
                    disabled={isDisabled}
                    className="w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 text-white font-medium py-3 px-6 rounded-[20px] transition relative overflow-hidden hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={isDisabled ? {} : { scale: 1.01, y: -2 }}
                    whileTap={isDisabled ? {} : { scale: 0.99 }}
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.span
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <LoadingSpinner />
                          Sending...
                        </motion.span>
                      ) : cooldownRemaining > 0 ? (
                        <motion.span
                          key="cooldown"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Wait {cooldownRemaining}s
                        </motion.span>
                      ) : (
                        <motion.span
                          key="send"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Send Message
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              </form>
            </BackgroundGradient>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
