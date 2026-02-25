import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { packagesData } from '../data/packagesData';
import {
    Clock,
    MapPin,
    Check,
    X,
    Info,
    ChevronDown,
    ChevronUp,
    Send,
    Phone
} from 'lucide-react';

export default function PackageDetails() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [pkg, setPkg] = useState(null);
    const [activeDay, setActiveDay] = useState(1);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '2',
        message: ''
    });

    useEffect(() => {
        // Find the package by slug. If not found, redirect to packages list
        const foundPkg = packagesData.find(p => p.slug === slug);
        if (foundPkg) {
            setPkg(foundPkg);
        } else {
            navigate('/packages');
        }
    }, [slug, navigate]);

    if (!pkg) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send an API request or email
        alert("Thank you for your enquiry! Our travel expert will contact you shortly.");
        setFormData({ name: '', email: '', phone: '', date: '', guests: '2', message: '' });
    };

    return (
        <div className="bg-brand-bg min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
                    <div className="flex items-center justify-center gap-4 text-white/90 text-sm font-semibold uppercase tracking-wider mb-6">
                        <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full">
                            <Clock size={16} className="text-brand-secondary" />
                            {pkg.duration}
                        </span>
                        <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full">
                            <MapPin size={16} className="text-brand-secondary" />
                            {pkg.location}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                        {pkg.title}
                    </h1>
                </div>
            </div>

            {/* Breadcrumbs */}
            <div className="bg-white border-b border-gray-200 sticky top-[72px] z-30 shadow-sm hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm">
                    <Link to="/" className="text-gray-500 hover:text-brand-primary">Home</Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <Link to="/packages" className="text-gray-500 hover:text-brand-primary">Packages</Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-brand-text font-medium">{pkg.title}</span>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* Left Column (Content) */}
                    <div className="w-full lg:w-2/3 space-y-12">

                        {/* Overview Section */}
                        <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6">Tour Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {pkg.overview}
                            </p>
                        </section>

                        {/* Itinerary Section */}
                        <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8">Detailed Itinerary</h2>

                            <div className="space-y-4">
                                {pkg.itinerary.map((day) => (
                                    <div
                                        key={day.day}
                                        className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${activeDay === day.day ? 'shadow-md border-brand-primary/20' : ''}`}
                                    >
                                        <button
                                            onClick={() => setActiveDay(activeDay === day.day ? null : day.day)}
                                            className={`w-full text-left px-6 py-5 flex items-center justify-between transition-colors ${activeDay === day.day ? 'bg-brand-bg' : 'bg-white hover:bg-gray-50'}`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl shrink-0 font-bold ${activeDay === day.day ? 'bg-brand-primary text-white' : 'bg-brand-bg text-brand-text'}`}>
                                                    <span className="text-xs uppercase tracking-wider block opacity-80">Day</span>
                                                    <span className="text-lg leading-none">{day.day}</span>
                                                </div>
                                                <h3 className="text-lg md:text-xl font-bold text-brand-text break-words pr-4">
                                                    {day.title}
                                                </h3>
                                            </div>
                                            <div className={`shrink-0 transition-transform duration-300 ${activeDay === day.day ? 'rotate-180 text-brand-primary' : 'text-gray-400'}`}>
                                                <ChevronDown size={24} />
                                            </div>
                                        </button>

                                        <div
                                            className={`transition-all duration-300 ease-in-out ${activeDay === day.day ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                                        >
                                            <div className="px-6 pb-6 pt-2 pl-[88px] text-gray-600 leading-relaxed text-lg">
                                                <div className="w-full h-px bg-gray-200/50 mb-6 absolute left-0 right-0"></div>
                                                {day.description}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Inclusions & Exclusions */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <section className="bg-emerald-50/50 rounded-3xl p-8 border border-emerald-100 h-full">
                                <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                                    <Check className="text-emerald-500" /> What's Included
                                </h3>
                                <ul className="space-y-4">
                                    {pkg.inclusions.map((inc, i) => (
                                        <li key={i} className="flex items-start gap-3 text-emerald-800/80">
                                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></div>
                                            <span>{inc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="bg-red-50/50 rounded-3xl p-8 border border-red-100 h-full">
                                <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
                                    <X className="text-red-500" /> What's Excluded
                                </h3>
                                <ul className="space-y-4">
                                    {pkg.exclusions.map((exc, i) => (
                                        <li key={i} className="flex items-start gap-3 text-red-800/80">
                                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0"></div>
                                            <span>{exc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        {/* Important Notes */}
                        <section className="bg-[#FFFDF4] rounded-3xl p-8 border border-amber-100">
                            <h3 className="text-xl font-bold text-amber-900 mb-6 flex items-center gap-2">
                                <Info className="text-amber-500" /> Important Notes
                            </h3>
                            <ul className="space-y-3">
                                {pkg.notes.map((note, i) => (
                                    <li key={i} className="flex items-start gap-3 text-amber-800/80">
                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></div>
                                        <span>{note}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                    </div>

                    {/* Right Column (Sticky Booking Sidebar) */}
                    <div className="w-full lg:w-1/3 lg:sticky top-[100px] z-20">
                        <div className="bg-white rounded-3xl shadow-xl shadow-brand-primary/5 border border-brand-primary/10 overflow-hidden">
                            {/* Price Header */}
                            <div className="bg-brand-primary p-6 text-white flex justify-between items-end">
                                <div>
                                    <p className="text-white/80 text-sm font-medium mb-1">Starting from</p>
                                    <h3 className="text-3xl font-extrabold">₹{pkg.price}</h3>
                                </div>
                                <span className="text-white/70 text-sm">per person</span>
                            </div>

                            {/* Booking Form */}
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-brand-text mb-6">Book This Package</h3>

                                <form onSubmit={handleFormSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 bg-brand-bg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full px-4 py-3 bg-brand-bg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                            <input
                                                type="tel"
                                                required
                                                className="w-full px-4 py-3 bg-brand-bg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors"
                                                placeholder="+91..."
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
                                            <input
                                                type="date"
                                                required
                                                className="w-full px-4 py-3 bg-brand-bg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors"
                                                value={formData.date}
                                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                                            <select
                                                className="w-full px-4 py-3 bg-brand-bg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors"
                                                value={formData.guests}
                                                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                            >
                                                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                                    <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
                                        <textarea
                                            className="w-full px-4 py-3 bg-brand-bg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors h-24 resize-none"
                                            placeholder="Any specific requests or requirements?"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-brand-text hover:bg-black text-white px-8 py-4 rounded-xl font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl shadow-brand-text/20"
                                    >
                                        <span>Send Enquiry</span>
                                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>

                                {/* Direct Contact Line */}
                                <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                                    <p className="text-gray-500 text-sm mb-3">Need immediate assistance?</p>
                                    <a
                                        href="tel:+918075618500"
                                        className="inline-flex items-center gap-2 text-brand-primary font-bold hover:text-brand-secondary transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center border border-brand-primary/10">
                                            <Phone size={18} />
                                        </div>
                                        <span className="text-lg">+91 8075618500</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Extra trust badges below booking form */}
                        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                            <span className="flex items-center gap-1.5"><Check size={14} className="text-emerald-500" /> Secured Booking</span>
                            <span className="flex items-center gap-1.5"><Check size={14} className="text-emerald-500" /> Local Experts</span>
                            <span className="flex items-center gap-1.5"><Check size={14} className="text-emerald-500" /> 24/7 Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
