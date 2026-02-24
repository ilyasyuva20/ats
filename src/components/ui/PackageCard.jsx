import { Link } from 'react-router-dom';
import { MapPin, Clock, Star, ArrowRight } from 'lucide-react';

export default function PackageCard({
    id,
    slug,
    title,
    location,
    duration,
    price,
    image,
    rating = 4.8,
    featured = false
}) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full">
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={image || "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=800"}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-60"></div>

                {featured && (
                    <div className="absolute top-4 left-4 bg-brand-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                        Best Seller
                    </div>
                )}

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-brand-secondary text-brand-secondary" />
                    <span className="text-sm font-bold text-gray-800">{rating}</span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-3">
                    <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                        <Clock size={14} className="text-brand-primary" />
                        {duration}
                    </span>
                    <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                        <MapPin size={14} className="text-brand-primary" />
                        {location}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-brand-text mb-2 line-clamp-2 leading-tight group-hover:text-brand-primary transition-colors">
                    {title}
                </h3>

                <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-grow">
                    Experience the beauty of {location} with our curated {duration} travel experience designed just for you.
                </p>

                <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-100">
                    <div>
                        <p className="text-xs text-gray-500 font-medium">Starting from</p>
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-brand-primary">₹{price}</span>
                            <span className="text-sm text-gray-500">/person</span>
                        </div>
                    </div>

                    <Link
                        to={`/packages/${slug || id || '1'}`}
                        className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors"
                    >
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
