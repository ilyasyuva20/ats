import { MapPin, Phone, Mail, Send, Star } from 'lucide-react';

export default function Contact() {
    return (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
            <div className="mb-16 text-center max-w-3xl mx-auto">
                <span className="text-brand-secondary font-semibold uppercase tracking-wider text-sm mb-2 block">Reach Out</span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6">Contact Us</h1>
                <p className="text-lg text-gray-600">
                    Have a question about our tours or need to book a taxi? We're here to help you plan your perfect Kerala itinerary.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

                {/* Contact Information & Map */}
                <div className="bg-brand-primary p-8 md:p-12 text-white flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                        <ul className="space-y-8">
                            <li className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-full shrink-0">
                                    <MapPin size={24} className="text-brand-secondary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-1">Office Location</h4>
                                    <p className="text-white/80 leading-relaxed">V85P+W29, Kombanamuri - Kattupuram Road<br />Arookutty,Alappuzha<br />Kerala 688535</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-full shrink-0">
                                    <Phone size={24} className="text-brand-secondary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-1">Phone Number</h4>
                                    <a href="tel:+918075618500" className="text-white/80 hover:text-brand-secondary transition-colors block">+91 8075618500</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-full shrink-0">
                                    <Mail size={24} className="text-brand-secondary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-1">Email Address</h4>
                                    <a href="mailto:info@arookuttytaxi.com" className="text-white/80 hover:text-brand-secondary transition-colors">info@arookuttytaxi.com</a>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className="mt-12 rounded-xl overflow-hidden shadow-inner h-64 relative ring-4 ring-white/10">
                        {/* Embedded Google Maps iframe pointing to Arookutty Taxi Service */}
                        <iframe
                            src="https://maps.google.com/maps?q=Arookutty+Taxi+Service,+Kombanamuri,+Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            className="absolute inset-0 w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Arookutty Taxi Service Location"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="p-8 md:p-12 bg-white">
                    <h2 className="text-3xl font-bold text-brand-text mb-8">Send a Message</h2>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    placeholder="John"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all text-brand-text"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all text-brand-text"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all text-brand-text"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Subject</label>
                            <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all text-brand-text cursor-pointer">
                                <option value="taxi">Taxi Booking Inquiry</option>
                                <option value="tour">Tour Package Inquiry</option>
                                <option value="support">Customer Support</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Your Message</label>
                            <textarea
                                rows="5"
                                placeholder="Tell us about your travel plans..."
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all text-brand-text resize-none"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 shadow-md hover:shadow-xl"
                        >
                            <Send size={20} />
                            <span>Send Message</span>
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}