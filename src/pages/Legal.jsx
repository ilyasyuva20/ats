export default function Legal() {
    return (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen bg-brand-bg">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 prose prose-brand max-w-none">
                <h1 className="text-3xl font-extrabold text-brand-text mb-8">Terms & Privacy Policy</h1>

                <div className="space-y-8 text-gray-600 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-brand-text mb-4">1. Introduction</h2>
                        <p>
                            Welcome to Arookutty Taxi Service. These Terms & Conditions and Privacy Policy govern your use of our website and services. By booking a taxi or tour package with us, you agree to these terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-brand-text mb-4">2. Booking & Cancellation Policy</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Bookings are confirmed only upon receipt of an advance payment.</li>
                            <li>Cancellations made 48 hours prior to the journey will receive a full refund of the advance.</li>
                            <li>Cancellations made within 48 hours are subject to a cancellation fee.</li>
                            <li>During peak seasons (Dec-Jan), cancellation policies may vary.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-brand-text mb-4">3. Privacy Policy</h2>
                        <p className="mb-4">
                            We respect your privacy. Any personal information collected during the booking process (such as name, contact details, email) is used solely for the purpose of fulfilling your travel requests and improving our service.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>We do not sell or share your personal information with third parties for marketing purposes.</li>
                            <li>Financial information (if collected) is processed securely via trusted payment gateways; we do not store credit/debit card details on our servers.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-brand-text mb-4">4. Luggage & Responsibility</h2>
                        <p>
                            While our drivers take utmost care, passengers are responsible for their precious belongings. Arookutty Taxi Service is not liable for any loss or damage to personal items left in the vehicles.
                        </p>
                    </section>

                    <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50 p-6 rounded-xl">
                        <p className="font-medium text-brand-text">Still have questions regarding our policies?</p>
                        <a href="mailto:info@arookuttytaxi.com" className="px-6 py-2 bg-brand-primary text-white font-medium rounded-lg hover:bg-brand-primary/90 transition-colors">
                            Contact us
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}