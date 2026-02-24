import { Shield, Target, Users } from 'lucide-react';

export default function About() {
    return (
        <div className="pt-24 pb-20 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-brand-secondary font-semibold uppercase tracking-wider text-sm mb-2 block">Our Story</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6">About Arookutty Taxi</h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Founded with a passion for travel and a commitment to exceptional service, Arookutty Taxi Service has grown to become Kerala's premier travel partner.
                    </p>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                        <img
                            src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=80&w=1200"
                            alt="Kerala Landscape"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-brand-text">Your Journey, Our Priority</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We specialize in providing comfortable, safe, and reliable transportation across the beautiful landscapes of God's Own Country. From pristine beaches in the south to the misty hills of the north, our experienced drivers ensure you reach your destination with ease and comfort.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Whether you are looking for a simple airport transfer or a multi-day customized tour package, our modern fleet of well-maintained vehicles is ready to serve your every need.
                        </p>
                    </div>
                </div>

                {/* Values Section */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 mt-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-brand-text mb-4">Why Choose Us?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            {
                                icon: <Shield className="w-10 h-10 text-brand-primary" />,
                                title: "Safety First",
                                desc: "All our vehicles undergo regular maintenance and deep cleaning. Our drivers are thoroughly verified."
                            },
                            {
                                icon: <Target className="w-10 h-10 text-brand-secondary" />,
                                title: "Reliability",
                                desc: "Punctuality is our hallmark. We value your time and ensure prompt pickups and drops."
                            },
                            {
                                icon: <Users className="w-10 h-10 text-brand-accent" />,
                                title: "Customer Focus",
                                desc: "We tailor our services to meet your specific travel needs, ensuring 100% satisfaction."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center space-y-4">
                                <div className="w-20 h-20 bg-brand-bg rounded-full flex items-center justify-center mb-2">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-brand-text">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}