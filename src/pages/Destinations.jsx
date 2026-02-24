import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { destinationsData } from '../data/destinationsData';

export default function Destinations() {
    const destinations = destinationsData;

    return (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
            <div className="mb-12 text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6">Popular Destinations</h1>
                <p className="text-lg text-gray-600">
                    Explore the diverse landscapes and cultural hubs of Kerala that we cover in our taxi and tour services.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {destinations.map(dest => (
                    <Link to={`/destinations/${dest.slug}`} key={dest.id} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block">
                        <div className="aspect-w-16 aspect-[4/5] relative">
                            <img
                                src={dest.image}
                                alt={dest.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                    <MapPin className="text-brand-primary" size={24} />
                                    {dest.name}
                                </h3>
                                <p className="text-gray-200 text-sm line-clamp-2">{dest.desc}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}