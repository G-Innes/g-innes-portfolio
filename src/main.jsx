import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import emailjs from 'emailjs-com';

// Initialize EmailJS with public key
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
if (publicKey) {
  emailjs.init(publicKey);
} else {
  console.error(
    'EmailJS public key not found. Please check your environment variables.'
  );
}

// Console banner (always visible on load)
try {
  // eslint-disable-next-line no-console
  console.log(
    `\n%c\n ██████╗ ██████╗  █████╗ ███╗   ██╗████████╗\n██╔════╝ ██╔══██╗██╔══██╗████╗  ██║╚══██╔══╝\n██║  ███╗██████╔╝███████║██╔██╗ ██║   ██║   \n██║   ██║██╔══██╗██╔══██║██║╚██╗██║   ██║   \n╚██████╔╝██║  ██║██║  ██║██║ ╚████║   ██║   \n ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   \n\n%cHey there 👀\nI see you poking around the console — have fun exploring!\n%c\n🌐 Website:  https://www.grantinnes.com\n💼 LinkedIn: https://www.linkedin.com/in/grant-innes-0621781a5/\n🐙 GitHub:   https://github.com/G-Innes\n`,
    'color:#00ffff; font-family:monospace; font-size:12px; text-shadow:0 0 2px #0ff, 0 0 10px #00ffff, 0 0 20px #00ccff;',
    'color:#ffffff; background:#111; font-family:monospace; padding:4px 6px; border-radius:4px; text-shadow:0 0 2px #fff, 0 0 6px #0ff;',
    'color:#0ff; font-family:monospace; font-size:11px; text-shadow:0 0 3px #0ff, 0 0 10px #00ffff;'
  );
} catch (err) {
  // eslint-disable-next-line no-console
  console.log('');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
