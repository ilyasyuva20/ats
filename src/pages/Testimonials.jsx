import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
    const reviews = [
        {
            id: 1,
            name: "Rajkumar Maurya",
            role: "2 months ago",
            content: "I would highly recommend this taxi service. We travelled with Noufir. He is extremely helpful, kind and well-behaved person. He knows the area very well. As per our five days plan, I hired taxi for our trip starting from airport arrival to...",
            rating: 5,
            image: "https://ui-avatars.com/api/?name=Rajkumar+Maurya&background=random"
        },
        {
            id: 2,
            name: "Akansha Gupta",
            role: "2 months ago",
            content: "I would highly recommend this taxi service, clean and reasonably priced. We travelled with Niyaz. He is extremely helpful, kind and well-behaved person. He knows the area very well. He planned out our itinerary well and adjusted on the go...",
            rating: 5,
            image: "https://ui-avatars.com/api/?name=Akansha+Gupta&background=random"
        },
        {
            id: 3,
            name: "Lufy",
            role: "2 months ago",
            content: "Our Kerala trip was amazing, thanks to our guide Nawas! He’s a fantastic driver super safe and smooth. He knew all the best spots and gave great tips on where to eat, making sure we had authentic local experiences and experience the beauty...",
            rating: 5,
            image: "https://ui-avatars.com/api/?name=Lufy&background=random"
        },
        {
            id: 4,
            name: "Mohit Agrawal",
            role: "2 months ago",
            content: "Highly recommended. We booked 4 days trip for Munnar. NIYAS is very polite, co-operative and soft spoken. He took us to best restaurants for authentic food, he is knowledgeable for local sight seen, timings and planning the day itinerary. ...",
            rating: 5,
            image: "https://ui-avatars.com/api/?name=Mohit+Agrawal&background=random"
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