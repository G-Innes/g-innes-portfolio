import { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  const handleSubmit = e => {
    e.preventDefault();
    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
      .then(() => {
        alert('Message sent successfully');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch(error => {
        console.error('Error details:', error);
        alert('Failed to send message');
      });
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
        text-transparent text-center"
          >
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                placeholder="Name..."
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={e =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="example@email.com"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>
            <div className="relative">
              <textarea
                placeholder="Your Message..."
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                onChange={e =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium py-3 px-6 rounded transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
