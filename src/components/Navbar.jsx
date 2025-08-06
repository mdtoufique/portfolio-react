import { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const links = [
    { href: '#home', label: 'Home', icon: 'fa-home' },
    { href: '#about', label: 'About', icon: 'fa-user' },
    { href: '#services', label: 'Services', icon: 'fa-list' },
    { href: '#portfolio', label: 'Projects', icon: 'fa-briefcase' },
    { href: '#contact', label: 'Contact', icon: 'fa-comments' },
  ];

  // Close on outside click or touch
  useEffect(() => {
    const handlePointerDown = (event) => {
      if (
        isOpen &&
        !menuRef.current?.contains(event.target) &&
        !toggleRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 h-16 bg-[var(--dim-white)] shadow-md flex items-center justify-between px-4 sm:px-6 md:px-8 z-50"
      style={{ color: 'var(--black)' }}
    >
      {/* Logo */}
      <div className="text-lg sm:text-xl md:text-2xl font-bold" style={{ color: 'var(--orange)' }}>
        TOUFIQUE
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex space-x-6">
        {links.map(({ href, label, icon }) => (
          <li key={href}>
            <a
              href={href}
              className="flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-200 hover:bg-[#7aa9e6] hover:text-[var(--black)] text-[var(--black)]"
            >
              <i className={`fas ${icon} w-5 text-center`}></i>
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Toggle Button for Mobile */}
      <button
          ref={toggleRef}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-[ #332dedff]"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          ref={menuRef} 
          className="absolute top-16 left-0 right-0 bg-[var(--dim-white)] shadow-md px-4 py-4 z-50 md:hidden"
        >
          <ul className="flex flex-col space-y-3 text-sm">
            {links.map(({ href, label, icon }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 px-2 py-1 rounded-md transition-colors duration-200 hover:bg-[#7aa9e6] hover:text-[var(--black)] text-[var(--black)]"
                >
                  <i className={`fas ${icon} w-4 text-center`}></i>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons at Bottom Center */}
          <div className="flex justify-center mt-6 space-x-6 text-lg">
            <a
              href="https://www.linkedin.com/in/md-rehman-toufique-ifti-3a1133284"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--black)] hover:text-[var(--orange)]"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/mdtoufique"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--black)] hover:text-[var(--orange)]"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
