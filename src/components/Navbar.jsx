import { useEffect, useState } from 'react';
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

const navItems = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
];

// Link of whichever section currently crosses the middle of the viewport
const useActiveLink = () => {
  const [activeLink, setActiveLink] = useState(navItems[0].link);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveLink(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    navItems.forEach(({ link }) => {
      const section = document.querySelector(link);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return activeLink;
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeLink = useActiveLink();

  return (
    <ResizableNavbar>
      {/* Desktop Navbar */}
      <NavBody>
        <a
          href="#home"
          className="relative z-20 flex items-center space-x-2 text-xl font-bold text-white"
        >
          <img src={logo} alt="" width="32" height="32" className="w-8 h-8" />
          <span className="font-display">
            Grant
            <span className="text-cyan-400">.dev</span>
          </span>
        </a>
        <NavItems items={navItems} activeLink={activeLink} />
      </NavBody>

      {/* Mobile Navbar */}
      <MobileNav>
        <MobileNavHeader>
          <a
            href="#home"
            className="relative z-20 flex items-center space-x-2 text-xl font-bold text-white"
          >
            <img src={logo} alt="" width="32" height="32" className="w-8 h-8" />
            <span className="font-display">
              Grant
              <span className="text-cyan-400">.dev</span>
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
              <span
                className={`inline-block transition-colors duration-300 hover:text-white ${
                  activeLink === item.link ? 'text-white' : 'text-gray-400'
                }`}
              >
                {item.name}
              </span>
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
};
