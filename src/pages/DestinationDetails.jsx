import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { destinationsData } from '../data/destinationsData';
import {
    MapPin,
    Plane,
    Train,
    Car,
    ArrowRight,
    Send,
    Phone
} from 'lucide-react';

export default function DestinationDetails() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [destination, setDestination] = useState(null);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    useEffect(() => {
        // Find the destination by slug
        const found = destinationsData.find(d => d.slug === slug);
        if (found) {
            setDestination(found);
        } else {
            navigate('/destinations');
        }
    }, [slug, navigate]);

    if (!destination) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your enquiry about ${destination.name}! Our expert will contact you shortly.`);
        setFormData({ name: '', phone: '', message: '' });
    };

    return (
        <div className="bg-brand-bg min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative h-[55vh] min-h-[450px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
                    <div className="flex items-center justify-center gap-2 mb-4 text-brand-secondary">
                        <MapPin size={32} />
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
                        {destination.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-2xl mx-auto">
                        {destination.desc}
                    </p>
                </div>
            </div>

            {/* Breadcrumbs */}
            <div className="bg-white border-b border-gray-200 sticky top-[72px] z-30 shadow-sm hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm">
                    <Link to="/" className="text-gray-500 hover:text-brand-primary">Home</Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <Link to="/destinations" className="text-gray-500 hover:text-brand-primary">Destinations</Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-brand-text font-medium">{destination.name}</span>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* Left Column (Content) */}
                    <div className="w-full lg:w-2/3 space-y-12">

                        {/* Overview Section */}
                        <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6">About {destination.name}</h2>
                            <p className="text-gray-600 text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-brand-primary first-letter:mr-1 first-letter:float-left">
                                {destination.overview}
                            </p>
                        </section>

                        {/* Top Attractions Section */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8">Top Attractions</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {destination.attractions.map((spot, idx) => (
                                    <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                                        {spot.image && (
                                            <div className="h-48 w-full overflow-hidden relative group">
                                                <img
                                                    src={spot.image}
                                                    alt={spot.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                            </div>
                                        )}
                                        <div className="p-6 flex-grow">
                                            <div className="flex items-start gap-3 mb-4">
                                                <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0 text-brand-primary">
                                                    <MapPin size={20} />
                                                </div>
                                                <h3 className="text-lg md:text-xl font-bold text-brand-text pt-1">{spot.name}</h3>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">{spot.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* How to Reach Section */}
                        <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8">How to Reach</h2>
                            <div className="space-y-8">
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                        <Plane size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">By Air</h3>
                                        <p className="text-gray-600 leading-relaxed">{destination.howToReach.air}</p>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-gray-100 ml-16"></div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                        <Train size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">By Rail</h3>
                                        <p className="text-gray-600 leading-relaxed">{destination.howToReach.rail}</p>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-gray-100 ml-16"></div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                                        <Car size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">By Road</h3>
                                        <p className="text-gray-600 leading-relaxed">{destination.howToReach.road}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Right Column (Sticky Sidebar) */}
                    <div className="w-full lg:w-1/3 lg:sticky top-[100px] z-20 space-y-6">

                        {/* Enquiry Form */}
                        <div className="bg-white rounded-3xl shadow-xl shadow-brand-primary/5 border border-brand-primary/10 p-8">
                            <div className="border-b border-gray-100 pb-6 mb-6">
                                <h3 className="text-xl font-bold text-brand-text mb-2">Plan Your Trip to {destination.name}</h3>
                                <p className="text-sm text-gray-500">Need a cab or a customized tour package? Let us know!</p>
                            </div>

                            <form onSubmit={handleFormSubmit} className="space-y-5">
                                <div>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 bg-brand-bg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors text-sm"
                                        placeholder="Your Full Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-3 bg-brand-bg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors text-sm"
                                        placeholder="Phone Number (+91...)"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <textarea
                                        className="w-full px-4 py-3 bg-brand-bg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors h-24 resize-none text-sm"
                                        placeholder="What are your travel plans?"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-brand-text hover:bg-black text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-brand-text/10"
                                >
                                    <span>Get Free Quote</span>
                                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                        {/* Call to Action Banner */}
                        <div className="bg-brand-primary rounded-3xl p-8 text-white relative overflow-hidden group">
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                            <h4 className="text-xl font-bold mb-4">Looking for Packages?</h4>
                            <p className="text-white/80 text-sm mb-6 leading-relaxed">
                                Explore our carefully crafted tour packages spanning across {destination.name} and beyond.
                            </p>
                            <Link
                                to="/packages"
                                className="inline-flex items-center gap-2 bg-white text-brand-primary px-6 py-3 rounded-full text-sm font-bold hover:bg-brand-bg transition-colors"
                            >
                                View Packages
                                <ArrowRight size={16} />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
