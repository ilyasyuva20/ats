import { useState } from 'react';
import { CheckCircle2, Info, ChevronLeft, ChevronRight } from 'lucide-react';

const VehicleCard = ({ vehicle, idx }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === vehicle.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? vehicle.images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={`flex flex-col lg:flex-row gap-8 items-center bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

            <div className="w-full lg:w-1/2 aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 relative group">
                <img
                    src={vehicle.images[currentImageIndex]}
                    alt={`${vehicle.name} - View ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />

                {/* Navigation Arrows */}
                {vehicle.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/80 text-white rounded-full p-2 backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100 z-10"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/80 text-white rounded-full p-2 backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100 z-10"
                            aria-label="Next image"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Dots Indicator */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                            {vehicle.images.map((_, dotIdx) => (
                                <button
                                    key={dotIdx}
                                    onClick={() => setCurrentImageIndex(dotIdx)}
                                    className={`h-2 rounded-full transition-all duration-300 shadow-sm ${dotIdx === currentImageIndex
                                            ? 'bg-white w-5'
                                            : 'bg-white/60 w-2 hover:bg-white/90'
                                        }`}
                                    aria-label={`Go to image ${dotIdx + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}

                <div className="absolute top-4 left-4 z-10 bg-brand-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase shadow-md">
                    {vehicle.type}
                </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
                <div>
                    <h2 className="text-3xl font-bold text-brand-text mb-2">{vehicle.name}</h2>
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium border border-gray-200">
                        Capacity: {vehicle.capacity} Passengers
                    </span>
                </div>

                <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-3">
                        {vehicle.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                                <CheckCircle2 size={16} className="text-brand-accent shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Starting Rate</p>
                        <p className="text-2xl font-bold text-brand-primary">
                            {vehicle.pricePerKm} <span className="text-base font-normal text-gray-500">/ km</span>
                        </p>
                    </div>
                    <a
                        href="tel:+919876543210"
                        className="px-6 py-3 bg-brand-secondary text-white font-bold rounded-lg hover:bg-brand-secondary/90 transition-colors shadow-md hover:shadow-lg"
                    >
                        Book Now
                    </a>
                </div>

                <div className="flex items-start gap-2 bg-blue-50 text-blue-800 p-3 rounded-lg text-xs leading-relaxed mt-4">
                    <Info size={16} className="shrink-0 mt-0.5" />
                    <p>Rates are indicative and subject to change based on exact itinerary, fuel prices, and season.</p>
                </div>
            </div>
        </div>
    );
};

export default function Rentals() {
    const fleet = [
        {
            id: 1,
            name: 'Toyota Innova Crysta',
            type: 'Premium SUV',
            capacity: '6+1',
            features: ['AC', 'Leather Seats', 'Extra Luggage Space'],
            pricePerKm: '₹18',
            images: [
                'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800'
            ]
        },
        {
            id: 2,
            name: 'Maruti Suzuki Ertiga',
            type: 'MUV',
            capacity: '6+1',
            features: ['AC', 'Comfortable Seating', 'Economical'],
            pricePerKm: '₹14',
            images: [
                'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1550508682-1dd242e2b342?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800'
            ]
        },
        {
            id: 3,
            name: 'Swift Dzire',
            type: 'Sedan',
            capacity: '4+1',
            features: ['AC', 'City Rides', 'Couple Friendly'],
            pricePerKm: '₹12',
            images: [
                'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1502877338535-34cb0a174092?auto=format&fit=crop&q=80&w=800'
            ]
        },
        {
            id: 4,
            name: 'Tempo Traveller',
            type: 'Van',
            capacity: '12-17 Seats',
            features: ['AC/Non-AC', 'Pushback Seats', 'Group Travel'],
            pricePerKm: '₹22',
            images: [
                'https://images.unsplash.com/photo-1527018601619-cedfd8ebdd87?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1519643444256-11f8fdc8b725?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800'
            ]
        }
    ];

    return (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
            <div className="mb-16 text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6">Our Taxi Fleet</h1>
                <p className="text-lg text-gray-600">
                    Choose from our wide range of well-maintained vehicles for comfortable, safe, and reliable transportation across Kerala.
                </p>
            </div>

            <div className="space-y-12">
                {fleet.map((vehicle, idx) => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} idx={idx} />
                ))}
            </div>
        </div>
    );
}