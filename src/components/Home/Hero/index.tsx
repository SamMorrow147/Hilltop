"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const HILLTOP_RED = '#9B2323';

const Hero = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [showWatercolor, setShowWatercolor] = useState(true);
    const [titleAnimated, setTitleAnimated] = useState(false);

    useEffect(() => {
        if (imageLoaded) {
            // Delay hiding watercolor to allow smooth fade out
            const timer = setTimeout(() => {
                setShowWatercolor(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [imageLoaded]);

    useEffect(() => {
        // Start title animation after a short delay
        const titleTimer = setTimeout(() => {
            setTitleAnimated(true);
        }, 300);
        return () => clearTimeout(titleTimer);
    }, []);

    const titleWords = ["Welcome", "to", "Hilltop", "Bar"];

    return (
        <section id="home-section" style={{ backgroundColor: '#e6e2c0' }}>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-8 lg:pt-12">
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
                        <p className={`text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center transform transition-all duration-800 ease-out ${
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
                        {/* Watercolor Loading Effect */}
                        {showWatercolor && (
                            <div className={`absolute inset-0 flex items-center justify-center z-10 rounded-lg overflow-hidden transition-opacity duration-1000 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}>
                                <div className="watercolor-loader">
                                    <div className="watercolor-blob blob-1"></div>
                                    <div className="watercolor-blob blob-2"></div>
                                    <div className="watercolor-blob blob-3"></div>
                                    <div className="watercolor-blob blob-4"></div>
                                    <div className="watercolor-blob blob-5"></div>
                                </div>
                            </div>
                        )}
                        
                        <Image
                            src="/images/hero-image-new.png"
                            alt="Historic Hilltop Bar circa 2002"
                            fill
                            className={`object-cover rounded-lg transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            style={{
                                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 96%, transparent 100%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 96%, transparent 100%)',
                                maskComposite: 'intersect',
                                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 96%, transparent 100%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 96%, transparent 100%)',
                                WebkitMaskComposite: 'source-in'
                            }}
                            onLoad={() => setImageLoaded(true)}
                            priority
                        />
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .watercolor-loader {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;
                    overflow: hidden;
                    animation: fadeInWatercolor 0.8s ease-out forwards;
                }
                
                .watercolor-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(25px);
                    animation: watercolor-flow 6s ease-in-out infinite;
                    opacity: 0;
                    will-change: transform, opacity;
                    animation-fill-mode: both;
                }
                
                .blob-1 {
                    width: 220px;
                    height: 220px;
                    background: linear-gradient(135deg, #e6e2c0, #d4c892, #c9b876);
                    top: 15%;
                    left: 8%;
                    animation-delay: 0.2s;
                }
                
                .blob-2 {
                    width: 160px;
                    height: 160px;
                    background: linear-gradient(135deg, #9B2323, #b83a3a, #c44545);
                    top: 45%;
                    right: 12%;
                    animation-delay: 0.6s;
                }
                
                .blob-3 {
                    width: 190px;
                    height: 190px;
                    background: linear-gradient(135deg, #8B4513, #a0522d, #b8653d);
                    bottom: 20%;
                    left: 20%;
                    animation-delay: 1.0s;
                }
                
                .blob-4 {
                    width: 140px;
                    height: 140px;
                    background: linear-gradient(135deg, #2F4F4F, #447070, #5a8080);
                    top: 25%;
                    right: 30%;
                    animation-delay: 1.4s;
                }
                
                .blob-5 {
                    width: 170px;
                    height: 170px;
                    background: linear-gradient(135deg, #8B4513, #CD853F, #daa752);
                    bottom: 35%;
                    right: 25%;
                    animation-delay: 1.8s;
                }
                
                @keyframes fadeInWatercolor {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
                @keyframes watercolor-flow {
                    0% {
                        transform: translate(0, 0) scale(1) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.4;
                    }
                    12.5% {
                        transform: translate(8px, -6px) scale(1.02) rotate(15deg);
                        opacity: 0.5;
                    }
                    25% {
                        transform: translate(12px, -8px) scale(1.05) rotate(30deg);
                        opacity: 0.6;
                    }
                    37.5% {
                        transform: translate(6px, 4px) scale(0.98) rotate(45deg);
                        opacity: 0.7;
                    }
                    50% {
                        transform: translate(-4px, 10px) scale(0.95) rotate(60deg);
                        opacity: 0.8;
                    }
                    62.5% {
                        transform: translate(-8px, 8px) scale(0.97) rotate(75deg);
                        opacity: 0.6;
                    }
                    75% {
                        transform: translate(6px, -4px) scale(1.03) rotate(90deg);
                        opacity: 0.5;
                    }
                    87.5% {
                        transform: translate(4px, -2px) scale(1.01) rotate(105deg);
                        opacity: 0.7;
                    }
                    100% {
                        transform: translate(0, 0) scale(1) rotate(120deg);
                        opacity: 0.6;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
