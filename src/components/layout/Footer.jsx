import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-text text-white/90">
            {/* Upper Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand Info */}
                    <div className="space-y-4">
                        <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="text-brand-secondary">Arookutty</span> Taxi
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-300">
                            Your trusted travel partner in Kerala. We offer premium taxi rentals, curated tour packages, and unforgettable experiences across God's Own Country.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Tour Packages', path: '/packages' },
                                { name: 'Our Fleet', path: '/rentals' },
                                { name: 'Destinations', path: '/destinations' },
                                { name: 'Travel Gallery', path: '/gallery' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-300 hover:text-brand-secondary transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-brand-primary group-hover:text-brand-secondary transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300">
                                <MapPin size={20} className="text-brand-primary shrink-0 mt-1" />
                                <span>Naval Base, Ernakulam<br />Kerala, India 682004</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Phone size={20} className="text-brand-primary shrink-0" />
                                <a href="tel:+919876543210" className="hover:text-brand-secondary transition-colors">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Mail size={20} className="text-brand-primary shrink-0" />
                                <a href="mailto:info@arookuttytaxi.com" className="hover:text-brand-secondary transition-colors">info@arookuttytaxi.com</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Legal */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">
                        &copy; {currentYear} Arookutty Taxi Service. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
                        <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}