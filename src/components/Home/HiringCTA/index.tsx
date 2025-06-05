"use client"
import Link from "next/link";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const HiringCTA = () => {
    const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.3 });

    return (
        <section className="py-16" style={{ backgroundColor: '#e6e2c0' }}>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div 
                    ref={ctaRef}
                    className={`bg-white pl-12 pt-12 pb-12 rounded-lg shadow-lg text-center max-w-4xl mx-auto transform transition-all duration-1000 ease-out ${
                        ctaVisible 
                            ? 'translate-y-0 opacity-100 scale-100' 
                            : 'translate-y-12 opacity-0 scale-95'
                    }`}
                >
                    <h2 className={`text-3xl lg:text-4xl font-semibold font-roboto-slab text-black mb-4 transition-all duration-800 ease-out ${
                        ctaVisible 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: ctaVisible ? '200ms' : '0ms' }}>
                        Join the Hilltop Team!
                    </h2>
                    <p className={`text-gray-600 text-lg mb-8 max-w-2xl mx-auto transition-all duration-800 ease-out ${
                        ctaVisible 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: ctaVisible ? '400ms' : '0ms' }}>
                        We're hiring for multiple positions as we prepare to reopen this historic Hanover landmark. 
                        Ready to be part of something special?
                    </p>
                    <Link 
                        href="/hiring" 
                        className={`inline-flex items-center text-xl font-medium rounded-full text-white py-4 px-8 lg:px-12 border transition-all duration-500 hover:scale-105 ${
                            ctaVisible 
                                ? 'translate-y-0 opacity-100' 
                                : 'translate-y-8 opacity-0'
                        }`}
                        style={{ 
                            backgroundColor: '#9B2323', 
                            borderColor: '#9B2323',
                            transitionDelay: ctaVisible ? '600ms' : '0ms'
                        }}
                    >
                        Click Here to Fill Out Application
                        <svg 
                            className="ml-3 w-5 h-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HiringCTA; 