
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
  const links = [
    { href: '#home', label: 'Home', icon: 'fa-home' },
    { href: '#about', label: 'About', icon: 'fa-user' },
    { href: '#services', label: 'Services', icon: 'fa-list' },
    { href: '#portfolio', label: 'Projects', icon: 'fa-briefcase' },
    { href: '#contact', label: 'Contact', icon: 'fa-comments' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 h-16 bg-[var(--dim-white)] shadow-md flex items-center justify-between px-6 z-50"
      style={{ color: 'var(--black)' }}
    >
      {/* Logo */}
      <div className="text-2xl font-bold" style={{ color: 'var(--orange)' }}>
       
      </div>

      {/* Nav Links - Hidden on mobile */}
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

      {/* Social Icons - Always visible */}
      <div className="flex items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/md-rehman-toufique-ifti-3a1133284"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--black)] hover:text-[var(--orange)] text-xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/mdtoufique"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--black)] hover:text-[var(--orange)] text-xl"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}

