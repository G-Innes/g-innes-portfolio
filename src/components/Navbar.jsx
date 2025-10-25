/* eslint-disable react/prop-types */
import { useState } from 'react';
import logo from '/assets/og-image.svg';
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from './ui/resizable-navbar';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ];

  return (
    <ResizableNavbar>
      {/* Desktop Navbar */}
      <NavBody>
        <a
          href="#home"
          className="relative z-20 flex items-center space-x-2 text-xl font-bold text-white"
        >
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <span className="font-sans">
            Grant
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text text-transparent">
              .dev
            </span>
          </span>
        </a>
        <NavItems items={navItems} />
      </NavBody>

      {/* Mobile Navbar */}
      <MobileNav>
        <MobileNavHeader>
          <a
            href="#home"
            className="relative z-20 flex items-center space-x-2 text-xl font-bold text-white"
          >
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <span className="font-sans">
              Grant
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text text-transparent">
                .dev
              </span>
            </span>
          </a>
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen}>
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold w-full"
            >
              <span className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-400 hover:to-green-500 hover:bg-clip-text transition-all duration-300 inline-block">
                {item.name}
              </span>
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
};
