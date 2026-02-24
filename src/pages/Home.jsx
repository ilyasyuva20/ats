import Hero from '../components/ui/Hero';
import PackageCard from '../components/ui/PackageCard';
import { ShieldCheck, Clock, Map, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { packagesData } from '../data/packagesData';

export default function Home() {
    const featuredPackages = packagesData.filter(pkg => pkg.featured).slice(0, 3);

    const reviews = [
        {
            id: 1,
            name: "Rahul Sharma",
            role: "Family Traveler from Delhi",
            content: "Exceptional service! The driver was extremely polite and knew all the local spots in Munnar. The Innova we booked was spotlessly clean.",
            rating: 5,
            image: "https://i.pravatar.cc/150?img=11"
        },
        {
            id: 2,
            name: "Sarah Jenkins",
            role: "Solo Backpacker from UK",
            content: "I felt completely safe traveling across Kerala by myself thanks to Arookutty Taxi. They helped me plan my itinerary and the rates were very transparent.",
            rating: 5,
            image: "https://i.pravatar.cc/150?img=5"
        },
        {
            id: 3,
            name: "Mr. & Mrs. Menon",
            role: "Couple from Mumbai",
            content: "Booked them for our honeymoon trip to Alleppey. Everything was flawless from the airport pickup to the houseboat drop-off. Highly recommend!",
            rating: 4,
            image: "https://i.pravatar.cc/150?img=68"
        }
    ];

    return (
        <div className="bg-brand-bg relative min-h-screen pb-20">
            <Hero />

            {/* Why Choose Us Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-16 sm:-mt-24 lg:-mt-32 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {[
                        { icon: <ShieldCheck size={32} className="text-brand-primary" />, title: 'Safe Rides', desc: 'Verified drivers and sanitized vehicles' },
                        { icon: <Clock size={32} className="text-brand-secondary" />, title: '24/7 Service', desc: 'Always available when you need us' },
                        { icon: <Map size={32} className="text-brand-accent" />, title: 'Local Experts', desc: 'Drivers who know every route' },
                        { icon: <Star size={32} className="text-brand-primary" />, title: 'Top Rated', desc: 'Loved by thousands of travelers' }
                    ].map((feature, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center border border-gray-100 flex flex-col items-center">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold text-brand-text mb-3">{feature.title}</h3>
                            <p className="text-gray-500 text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Us Preview Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-bg relative z-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                            <img
                                src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=80&w=1200"
                                alt="Kerala Landscape"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <span className="font-bold text-2xl md:text-3xl pb-2 block">10+ Years</span>
                                <p className="text-white/80 font-medium">of Excellence</p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <span className="text-brand-secondary font-semibold uppercase tracking-wider text-sm mb-2 block">Who We Are</span>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text mb-6">Your Trusted Travel Partner in Kerala</h2>
                                <p className="text-gray-600 leading-relaxed text-lg pb-4 border-b border-gray-100">
                                    Founded with a passion for travel and a commitment to exceptional service, Arookutty Taxi Service has grown to become Kerala's premier travel partner.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    We specialize in providing comfortable, safe, and reliable transportation across the beautiful landscapes of God's Own Country. From pristine beaches in the south to the misty hills of the north, our experienced drivers ensure you reach your destination with ease and comfort.
                                </p>
                            </div>
                            <div className="pt-4">
                                <Link to="/about" className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    <span>Discover Our Story</span>
                                    <span className="text-xl leading-none">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Packages Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white mt-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-brand-secondary font-semibold uppercase tracking-wider text-sm mb-2 block">Our Best Offerings</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text mb-4">Popular Tour Packages</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Discover the magic of Kerala with our carefully crafted tour packages spanning hill stations, backwaters, and pristine beaches.
                            </p>
                        </div>
                        <Link to="/packages" className="shrink-0 group flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-secondary transition-colors">
                            <span>View All Packages</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredPackages.map(pkg => (
                            <PackageCard key={pkg.id} {...pkg} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-brand-secondary font-semibold uppercase tracking-wider text-sm mb-2 block">Real Reviews</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text mb-4">What Our Travelers Say</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Don't just take our word for it. Read about the experiences of our happy customers from around the world.
                            </p>
                        </div>
                        <Link to="/testimonials" className="shrink-0 group flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-secondary transition-colors">
                            <span>View All Testimonials</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((review) => (
                            <div key={review.id} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
                                <Quote className="absolute top-6 right-6 w-12 h-12 text-brand-bg group-hover:text-brand-primary/10 transition-colors" />

                                <div className="flex items-center gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={18}
                                            className={i < review.rating ? "fill-brand-secondary text-brand-secondary" : "text-gray-200"}
                                        />
                                    ))}
                                </div>

                                <p className="text-gray-600 mb-8 italic relative z-10 leading-relaxed">
                                    "{review.content}"
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-brand-primary/20"
                                    />
                                    <div>
                                        <h4 className="font-bold text-brand-text">{review.name}</h4>
                                        <p className="text-sm text-gray-500">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}