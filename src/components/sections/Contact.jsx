import { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import emailjs from 'emailjs-com';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { BackgroundGradient } from '../ui/background-gradient';
import { ToastContainer } from '../ui/toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, type, duration: 5000 }]);
  };

  const removeToast = id => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      console.error(
        'EmailJS configuration missing. Please check environment variables.'
      );
      addToast('Email service is not configured properly.', 'error');
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, e.target)
      .then(() => {
        addToast(
          "Message sent successfully! I'll get back to you soon.",
          'success'
        );
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch(error => {
        console.error('Error details:', error);
        addToast('Failed to send message. Please try again later.', 'error');
      });
  };
  return (
    <>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="px-4 w-150">
            <h2
              className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text
        text-transparent text-center"
            >
              Get In Touch
            </h2>
            <BackgroundGradient className="p-8 rounded-[22px] bg-zinc-900">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={e =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={e =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    placeholder="Your message..."
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    rows={5}
                    onChange={e =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 text-white font-medium py-3 px-6 rounded-[20px] transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </BackgroundGradient>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};
