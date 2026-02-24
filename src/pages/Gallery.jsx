export default function Gallery() {
    const images = [
        { id: 1, src: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800', alt: 'Munnar Tea Gardens', size: 'large' },
        { id: 2, src: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=800', alt: 'Alleppey Houseboat', size: 'small' },
        { id: 3, src: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=80&w=800', alt: 'Wayanad Nature', size: 'small' },
        { id: 4, src: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800', alt: 'Kochi Chinese Nets', size: 'medium' },
        { id: 5, src: 'https://images.unsplash.com/photo-1588880625902-690a6a382e7e?auto=format&fit=crop&q=80&w=800', alt: 'Thekkady Safari', size: 'small' },
        { id: 6, src: 'https://images.unsplash.com/photo-1592667362846-5be81a30f14d?auto=format&fit=crop&q=80&w=800', alt: 'Kumarakom Resort', size: 'medium' },
    ];

    return (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
            <div className="mb-12 text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6">Travel Gallery</h1>
                <p className="text-lg text-gray-600">
                    A glimpse into the beautiful locations across Kerala that our travelers have explored and cherished.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                {images.map((img) => (
                    <div
                        key={img.id}
                        className={`relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 ${img.size === 'large' ? 'col-span-2 row-span-2' :
                                img.size === 'medium' ? 'col-span-2 row-span-1' :
                                    'col-span-1 row-span-1'
                            }`}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 text-white font-medium drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                {img.alt}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}