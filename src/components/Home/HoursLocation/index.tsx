"use client"
import { Icon } from "@iconify/react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const HoursLocation = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
    const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <section id="hours-location-section" className="py-16 bg-white dark:bg-gray-800">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div 
                    ref={headerRef}
                    className={`text-center mb-12 transition-all duration-1000 ease-out ${
                        headerVisible 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-12 opacity-0'
                    }`}
                >
                    <p className="text-lg font-normal mb-3 tracking-widest uppercase font-roboto-slab text-black dark:text-white">
                        VISIT US
                    </p>
                    <h2 className="text-3xl lg:text-5xl font-semibold font-roboto-slab text-black dark:text-white">
                        Hours & Location
                    </h2>
                </div>

                <div 
                    ref={contentRef}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                >
                    {/* Hours & Contact Info */}
                    <div className="space-y-8">
                        <div className={`bg-gray-50 dark:bg-gray-700 p-6 rounded-lg transform transition-all duration-800 ease-out hover:shadow-lg ${
                            contentVisible 
                                ? 'translate-x-0 opacity-100' 
                                : '-translate-x-12 opacity-0'
                        }`}
                        style={{ transitionDelay: contentVisible ? '200ms' : '0ms' }}>
                            <h3 className="text-2xl font-semibold text-black dark:text-white mb-6 flex items-center">
                                <Icon icon="solar:clock-circle-bold" className="mr-3 text-2xl" style={{ color: '#9B2323' }} />
                                Hours
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-medium text-black dark:text-white">Sunday Through Thursday</p>
                                    <p className="text-gray-600 dark:text-gray-300">11am to 11pm</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Kitchen Closes at 10pm</p>
                                </div>
                                <div>
                                    <p className="font-medium text-black dark:text-white">Friday & Saturday</p>
                                    <p className="text-gray-600 dark:text-gray-300">11am to 1am</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Kitchen closes at 11pm</p>
                                </div>
                            </div>
                        </div>

                        <div className={`bg-gray-50 dark:bg-gray-700 p-6 rounded-lg transform transition-all duration-800 ease-out hover:shadow-lg ${
                            contentVisible 
                                ? 'translate-x-0 opacity-100' 
                                : '-translate-x-12 opacity-0'
                        }`}
                        style={{ transitionDelay: contentVisible ? '400ms' : '0ms' }}>
                            <h3 className="text-2xl font-semibold text-black dark:text-white mb-6 flex items-center">
                                <Icon icon="solar:map-point-bold" className="mr-3 text-2xl" style={{ color: '#9B2323' }} />
                                Location & Contact
                            </h3>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-gray-600 dark:text-gray-300">29953 109th Ave N</p>
                                    <p className="text-gray-600 dark:text-gray-300">Hanover, MN 55341</p>
                                </div>
                                <div className="flex items-center">
                                    <Icon icon="solar:phone-bold" className="mr-2" style={{ color: '#9B2323' }} />
                                    <p className="text-gray-600 dark:text-gray-300">763-272-8140</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className={`h-[400px] rounded-lg overflow-hidden shadow-lg transform transition-all duration-800 ease-out hover:shadow-xl ${
                        contentVisible 
                            ? 'translate-x-0 opacity-100' 
                            : 'translate-x-12 opacity-0'
                    }`}
                    style={{ transitionDelay: contentVisible ? '600ms' : '0ms' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2815.123456789!2d-93.70123456789!3d45.12345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b2d0e5f5f5f5f5%3A0x5f5f5f5f5f5f5f5f!2s29953%20109th%20Ave%20N%2C%20Hanover%2C%20MN%2055341%2C%20USA!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Hilltop Bar & Grill Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HoursLocation; 