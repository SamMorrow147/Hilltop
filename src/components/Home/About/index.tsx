"use client"
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const About = () => {
    return (
        <section id="history-section" className="py-16 bg-white dark:bg-gray-800">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className="text-center mb-12">
                    <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">OUR STORY</p>
                    <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
                        Re-Established 2025 in Historic Hanover
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="relative h-[400px] rounded-lg overflow-hidden">
                            <Image
                                src="/images/Hilltop-bar-ca-2002.jpg"
                                alt="Historic Hilltop Bar circa 2002"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative h-[200px] rounded-lg overflow-hidden">
                                <Image
                                    src="/images/600CC36B-12DE-4E33-93DA-6888D9405C02.png"
                                    alt="Historic Hilltop Bar - Vintage Photo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-[200px] rounded-lg overflow-hidden">
                                <Image
                                    src="/images/481208284_949490890668538_7680302639975027232_n.jpg"
                                    alt="Historic Hilltop Bar - Community Photo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-black dark:text-white">
                            A Piece of Hanover History
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Since the 1880s, the Hilltop Bar has been a cornerstone of the Hanover community. 
                            Originally established as a gathering place for local farmers and travelers, our 
                            historic building has witnessed the evolution of our town through the decades.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            The bar's location near the historic bridge has made it a landmark in the community, 
                            with stories of famous visitors and local legends becoming part of our rich history. 
                            The bridge itself, a symbol of connection and community, has been a witness to countless 
                            stories and memories.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            In 2025, we're proud to reopen our doors, bringing new life to this historic space 
                            while preserving its authentic character and charm. Our renovation honors the building's 
                            heritage while creating a modern gathering place for the community.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 