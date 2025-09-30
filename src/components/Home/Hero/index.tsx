"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from '@/components/Layout/Header/Logo';

const HILLTOP_RED = '#9B2323';

const Hero = () => {
    const [titleAnimated, setTitleAnimated] = useState(false);

    useEffect(() => {
        // Start title animation after a short delay
        const titleTimer = setTimeout(() => {
            setTitleAnimated(true);
        }, 300);
        return () => clearTimeout(titleTimer);
    }, []);

    const titleWords = ["Welcome", "to", "Hilltop", "Bar"];

    return (
        <section 
            id="home-section" 
            className="relative overflow-hidden"
        >
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/Videos/HilltopVideoHeader2_SM.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 opacity-70 z-10" style={{ backgroundColor: '#e6e2c0' }}></div>
            
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-8 lg:pt-12 relative z-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-4 lg:gap-8'>
                    <div className='col-span-6 order-2 lg:order-1'>
                        <h1 className="text-4xl lg:text-7xl font-semibold mb-5 md:4px lg:text-start text-center font-roboto-slab overflow-hidden" style={{ color: '#000000' }}>
                            {titleWords.map((word, index) => (
                                <span
                                    key={index}
                                    className={`inline-block mr-4 transform transition-all duration-700 ease-out ${
                                        titleAnimated 
                                            ? 'translate-y-0 opacity-100' 
                                            : 'translate-y-full opacity-0'
                                    }`}
                                    style={{
                                        transitionDelay: `${index * 200}ms`,
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    {word}
                                </span>
                            ))}
                        </h1>
                        <p className={`text-black lg:text-lg font-normal mb-10 lg:text-start text-center transform transition-all duration-800 ease-out ${
                            titleAnimated 
                                ? 'translate-y-0 opacity-100' 
                                : 'translate-y-8 opacity-0'
                        }`}
                        style={{ transitionDelay: '1000ms' }}>
                            Re-Established 2025 in Historic Hanover<br />
                            A gathering place for the community since the 1880s
                        </p>
                        <div className={`flex flex-row align-middle justify-center lg:justify-start gap-4 transform transition-all duration-800 ease-out ${
                            titleAnimated 
                                ? 'translate-y-0 opacity-100' 
                                : 'translate-y-8 opacity-0'
                        }`}
                        style={{ transitionDelay: '1200ms' }}>
                            <Link
                                href='#menu-section'
                                className='text-xl font-medium rounded-full text-black py-5 px-6 lg:px-14 border border-white bg-white hover:bg-gray-100 transform hover:scale-105 transition-transform duration-200'
                            >
                                View Our Menu
                            </Link>
                            <Link
                                href='#history-section'
                                className='flex items-center text-xl font-medium rounded-full text-white py-5 px-6 lg:px-10 border bg-black hover:bg-gray-800 transform hover:scale-105 transition-transform duration-200'
                            >
                                History
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center col-span-6 order-1 lg:order-2">
                        <div className={`transform transition-all duration-800 ease-out ${
                            titleAnimated 
                                ? 'translate-y-0 opacity-100 scale-100' 
                                : 'translate-y-8 opacity-0 scale-95'
                        }`}
                        style={{ transitionDelay: '800ms' }}>
                            <Image
                                src="/images/logo/HT-Long-Logo.png"
                                alt="Hilltop Bar &amp; Grill Logo"
                                width={400}
                                height={200}
                                style={{ objectFit: 'contain' }}
                                className="w-full h-auto max-w-[400px]"
                                quality={100}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
