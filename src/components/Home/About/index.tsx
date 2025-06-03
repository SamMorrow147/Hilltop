"use client"
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const About = () => {
    return (
        <section id="history-section" className="py-16 bg-white dark:bg-gray-800">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className="text-center mb-12">
                    <p className="text-lg font-normal mb-3 tracking-widest uppercase font-roboto-slab text-black">OUR STORY</p>
                    <h2 className="text-3xl lg:text-5xl font-semibold font-roboto-slab text-black">
                        Hilltop Bar & Grill – Re-Established 2025
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="relative h-[400px] rounded-lg overflow-hidden">
                            <Image
                                src="/images/Hero-Img.jpg"
                                alt="Hilltop Bar Hero Image"
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

                        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mt-8">
                            <h4 className="text-xl font-semibold text-black dark:text-white mb-4">Hours & Location</h4>
                            <div className="space-y-3">
                                <div>
                                    <p className="font-medium text-black dark:text-white">Hours:</p>
                                    <p className="text-gray-600 dark:text-gray-300">Sunday Through Thursday: 11am to 11pm</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Kitchen Closes at 10pm</p>
                                    <p className="text-gray-600 dark:text-gray-300">Friday & Saturday: 11am to 1am</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Kitchen closes at 11pm</p>
                                </div>
                                <div>
                                    <p className="font-medium text-black dark:text-white">Location:</p>
                                    <p className="text-gray-600 dark:text-gray-300">29953 109th Ave N</p>
                                    <p className="text-gray-600 dark:text-gray-300">Hanover, MN 55341</p>
                                    <p className="text-gray-600 dark:text-gray-300">763-272-8140</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 