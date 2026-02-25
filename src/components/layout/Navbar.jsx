import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    // { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Packages', path: '/packages' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Rentals', path: '/rentals' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-brand-primary flex items-center gap-2">
              <span className="text-brand-secondary">Arookutty</span> Taxi
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors hover:text-brand-secondary ${location.pathname === link.path ? 'text-brand-secondary' : 'text-brand-text'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <a href="tel:+918075618500" className="flex items-center gap-2 bg-brand-primary text-white px-4 py-2 rounded-full font-medium hover:bg-brand-primary/90 transition-all">
              <Phone size={18} />
              <span>Book Now</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-text hover:text-brand-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md font-medium ${location.pathname === link.path ? 'bg-brand-primary/10 text-brand-primary' : 'text-brand-text hover:bg-gray-50'}`}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+918075618500" className="flex items-center justify-center gap-2 bg-brand-primary text-white px-4 py-3 rounded-md font-medium mt-4 mx-2">
              <Phone size={18} />
              <span>Book Now</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}