import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
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
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen bg-brand-bg">
            <div className="mb-16 text-center max-w-3xl mx-auto">
                <span className="text-brand-secondary font-semibold uppercase tracking-wider text-sm mb-2 block">Real Reviews</span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6">What Our Travelers Say</h1>
                <p className="text-lg text-gray-600">
                    Don't just take our word for it. Read about the experiences of our happy customers from around the world.
                </p>
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
    );
}