import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Footer from './Footer';
import logoUrl from '../assets/images/branding/Logo.png';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/spiritual-program', label: 'Spiritual Program' },
  { path: '/spiritual-outing', label: 'Spiritual Outing' },
  { path: '/festival', label: 'Festival' },
  { path: '/talk-to-us', label: 'Talk to Us' },
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-[#0f172a] shadow-md border-b border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center bg-white/10 p-1 rounded-xl backdrop-blur-sm">
              <NavLink to="/">
                <img className="h-14 w-auto object-contain" src={logoUrl} alt="Radha Vrindavan Bihari Logo" />
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-[#ffc107] border-b-2 border-[#ffc107] pb-1'
                        : 'text-gray-300 hover:text-[#ffc107]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="#contact"
                onClick={handleContactClick}
                className="text-sm font-medium text-gray-300 hover:text-[#ffc107] transition-colors duration-200 cursor-pointer"
              >
                Contact Us
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-[#ffc107] focus:outline-none p-2 rounded-md transition-colors"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute w-full bg-[#0f172a] border-b border-[#1e293b] shadow-xl transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'text-[#0f172a] bg-[#ffc107]'
                      : 'text-gray-300 hover:text-[#0f172a] hover:bg-[#ffc107]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="#contact"
              onClick={handleContactClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-[#0f172a] hover:bg-[#ffc107] transition-colors cursor-pointer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
