import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Console banner (always visible on load)
try {
  console.log(
    `\n%c\n ██████╗ ██████╗  █████╗ ███╗   ██╗████████╗\n██╔════╝ ██╔══██╗██╔══██╗████╗  ██║╚══██╔══╝\n██║  ███╗██████╔╝███████║██╔██╗ ██║   ██║   \n██║   ██║██╔══██╗██╔══██║██║╚██╗██║   ██║   \n╚██████╔╝██║  ██║██║  ██║██║ ╚████║   ██║   \n ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   \n\n%cHey there 👀\nI see you poking around the console — have fun exploring!\n%c\n🌐 Website:  https://www.grantinnes.com\n💼 LinkedIn: https://www.linkedin.com/in/grant-innes-0621781a5/\n🐙 GitHub:   https://github.com/G-Innes\n`,
    'color:#00ffff; font-family:monospace; font-size:12px; text-shadow:0 0 2px #0ff, 0 0 10px #00ffff, 0 0 20px #00ccff;',
    'color:#ffffff; background:#111; font-family:monospace; padding:4px 6px; border-radius:4px; text-shadow:0 0 2px #fff, 0 0 6px #0ff;',
    'color:#0ff; font-family:monospace; font-size:11px; text-shadow:0 0 3px #0ff, 0 0 10px #00ffff;'
  );
} catch (err) {
  console.log('');
}

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Production builds ship prerendered HTML (scripts/prerender.mjs) to hydrate;
// the dev server serves an empty root
if (root.firstElementChild) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
