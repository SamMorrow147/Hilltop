"use client"
import Link from 'next/link';
import useScrollAnimation from "@/hooks/useScrollAnimation";

const OrderCallout = () => {
    const { ref: calloutRef, isVisible: calloutVisible } = useScrollAnimation({ threshold: 0.3 });

    return (
        <section className="py-12" style={{ backgroundColor: '#e6e2c0' }}>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div 
                    ref={calloutRef}
                    className={`flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-all duration-1000 ease-out ${
                        calloutVisible 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-12 opacity-0'
                    }`}
                >
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4 font-roboto-slab">
                            Order Online Now
                        </h2>
                        <p className="text-black text-lg max-w-2xl">
                            Skip the wait! Order your favorite Hilltop dishes online for quick and easy pickup or call{' '}
                            <a 
                                href="tel:7632728140" 
                                className="font-semibold hover:underline transition-all duration-200"
                            >
                                (763) 272-8140
                            </a>
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <Link
                            href="https://www.toasttab.com/hilltophanover"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-12 py-4 bg-black text-white rounded-full font-bold text-xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                            Order Online
                            <svg 
                                className="ml-2 w-5 h-5" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderCallout;
