import { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import emailjs from 'emailjs-com';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { BackgroundGradient } from '../ui/background-gradient';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
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
  );
};
