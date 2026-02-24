import PackageCard from '../components/ui/PackageCard';
import { packagesData } from '../data/packagesData';

export default function Packages() {
    const packages = packagesData;

    return (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
            <div className="mb-12 text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6">Our Tour Packages</h1>
                <p className="text-lg text-gray-600">
                    Discover Kerala with our handcrafted itineraries. From tranquil backwaters to misty hills, we have the perfect package for your getaway.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {packages.map(pkg => (
                    <PackageCard
                        key={pkg.id}
                        id={pkg.id}
                        slug={pkg.slug}
                        image={pkg.image}
                        title={pkg.title}
                        location={pkg.location}
                        duration={pkg.duration}
                        price={pkg.price}
                        featured={pkg.featured}
                    />
                ))}
            </div>
        </div>
    );
}