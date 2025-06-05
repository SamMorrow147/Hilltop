"use client"
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const About = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
    const { ref: imagesRef, isVisible: imagesVisible } = useScrollAnimation({ threshold: 0.2 });
    const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <section id="history-section" className="py-16 bg-white dark:bg-gray-800">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div 
                    ref={headerRef}
                    className={`text-center mb-12 transition-all duration-1000 ease-out ${
                        headerVisible 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-12 opacity-0'
                    }`}
                >
                    <p className="text-lg font-normal mb-3 tracking-widest uppercase font-roboto-slab text-black">OUR STORY</p>
                    <h2 className="text-3xl lg:text-5xl font-semibold font-roboto-slab text-black">
                        Hilltop Bar & Grill – Re-Established 2025
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div 
                        ref={imagesRef}
                        className={`space-y-6 transition-all duration-1000 ease-out ${
                            imagesVisible 
                                ? 'translate-x-0 opacity-100' 
                                : '-translate-x-12 opacity-0'
                        }`}
                        style={{ transitionDelay: imagesVisible ? '200ms' : '0ms' }}
                    >
                        <div className="relative h-[400px] rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                            <Image
                                src="/images/Hero-Img.jpg"
                                alt="Hilltop Bar Hero Image"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative h-[200px] rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <Image
                                    src="/images/600CC36B-12DE-4E33-93DA-6888D9405C02.png"
                                    alt="Historic Hilltop Bar - Vintage Photo"
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-[200px] rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <Image
                                    src="/images/481208284_949490890668538_7680302639975027232_n.jpg"
                                    alt="Historic Hilltop Bar - Community Photo"
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div 
                        ref={contentRef}
                        className={`space-y-6 transition-all duration-1000 ease-out ${
                            contentVisible 
                                ? 'translate-x-0 opacity-100' 
                                : 'translate-x-12 opacity-0'
                        }`}
                        style={{ transitionDelay: contentVisible ? '400ms' : '0ms' }}
                    >
                        <h3 className="text-2xl font-semibold text-black dark:text-white">
                            A Hanover Legend Returns
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Originally built in 1916, the Hilltop Bar & Grill was a beloved Hanover landmark for over 
                            a century — known for its legendary burgers, small-town charm, and even the 
                            occasional Bob Dylan sighting. When it shut its doors in 2017, its absence left a 
                            noticeable void in the community.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            We are so excited to bring The Hilltop back to life — fully renovated, thoughtfully 
                            reimagined, and ready to write its next chapter! Keeping the same heart but updating it 
                            with a fresh new look, updated classics, cold tap beer and specialty cocktails, pull tabs, 
                            and that same Hilltop Spirit you remember—or have always heard about.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            This isn't just a reopening. It's a revival. A celebration of the past with big sights for the 
                            future. We can't wait to reopen the doors in August and raise a glass to what was—and 
                            what's next!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 