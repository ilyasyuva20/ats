import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

export default function Hero() {
    const [searchParams, setSearchParams] = useState({
        destination: '',
        date: '',
        guests: '2'
    });

    return (
        <div className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 min-h-[80vh] flex items-center justify-center -mt-[84px] overflow-hidden">
            {/* Background Image Loading (Placeholder) */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=2600&h=1400")',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
                <div className="max-w-3xl space-y-6">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary/90 text-white text-sm font-semibold tracking-wider uppercase mb-2 shadow-lg">
                        Explore God's Own Country
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
                        Premium Travel Experiences <span className="text-brand-secondary">Across Kerala</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light drop-shadow max-w-2xl">
                        From serene backwater houseboats to highly reliable taxi rentals. Book your journey with Arookutty's finest travel service.
                    </p>

                    <div className="pt-4 flex flex-wrap gap-4">
                        <Link
                            to="/packages"
                            className="px-8 py-3.5 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary/90 transition-all shadow-lg hover:shadow-brand-primary/20 hover:-translate-y-1 inline-flex items-center gap-2"
                        >
                            Tour Packages
                        </Link>
                        <Link
                            to="/rentals"
                            className="px-8 py-3.5 bg-white text-brand-text font-semibold rounded-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2"
                        >
                            Book a Taxi
                        </Link>
                    </div>
                </div>

                {/* Quick Search Widget */}
                {/* <div className="mt-16 sm:mt-24 lg:mt-32 backdrop-blur-md bg-white/20 p-2 md:p-3 rounded-2xl shadow-xl max-w-4xl border border-white/30 transition-transform">
                    <form
                        className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden divide-y md:divide-y-0 md:divide-x border border-gray-100"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="flex-1 px-6 py-4 flex items-center gap-3">
                            <MapPin className="text-brand-primary" size={24} />
                            <div className="flex-1">
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Where to?</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Munnar, Alleppey"
                                    className="w-full focus:outline-none text-brand-text font-medium bg-transparent placeholder-gray-400"
                                    value={searchParams.destination}
                                    onChange={(e) => setSearchParams({ ...searchParams, destination: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="flex-1 px-6 py-4 flex items-center gap-3">
                            <Calendar className="text-brand-primary" size={24} />
                            <div className="flex-1">
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">When?</label>
                                <input
                                    type="date"
                                    className="w-full focus:outline-none text-brand-text font-medium bg-transparent text-gray-600 focus:text-brand-text"
                                    value={searchParams.date}
                                    onChange={(e) => setSearchParams({ ...searchParams, date: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="flex-1 px-6 py-4 flex items-center gap-3">
                            <Users className="text-brand-primary" size={24} />
                            <div className="flex-1">
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Guests</label>
                                <select
                                    className="w-full focus:outline-none text-brand-text font-medium bg-transparent cursor-pointer"
                                    value={searchParams.guests}
                                    onChange={(e) => setSearchParams({ ...searchParams, guests: e.target.value })}
                                >
                                    <option value="1">1 Person</option>
                                    <option value="2">2 People</option>
                                    <option value="3">3 People</option>
                                    <option value="4">4 People</option>
                                    <option value="5+">5+ People</option>
                                </select>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="bg-brand-secondary hover:bg-brand-secondary/90 transition-colors text-white px-8 py-4 font-bold flex items-center justify-center gap-2 m-2 md:m-0 rounded-lg md:rounded-none md:rounded-r-xl"
                        >
                            <Search size={20} />
                            <span>Search</span>
                        </button>
                    </form>
                </div> */}
            </div>
        </div>
    );
}
