"use client"
import Image from 'next/image';
import Link from 'next/link';

const HILLTOP_RED = '#9B2323';

const Hero = () => {
    return (
        <section id="home-section" className='bg-gray-50 dark:bg-gray-700'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
                    <div className='col-span-6'>
                        <h1 className="text-4xl lg:text-7xl font-semibold mb-5 md:4px lg:text-start text-center font-roboto-slab" style={{ color: '#003366' }}>
                            Welcome to Hilltop Bar
                        </h1>
                        <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>
                            Re-Established 2025 in Historic Hanover<br />
                            A gathering place for the community since the 1880s
                        </p>
                        <div className='md:flex align-middle justify-center lg:justify-start'>
                            <Link
                                href='#menu-section'
                                className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 lg:px-14 mr-6 border'
                                style={{ backgroundColor: HILLTOP_RED, borderColor: HILLTOP_RED }}
                            >
                                View Our Menu
                            </Link>
                            <Link
                                href='#history-section'
                                className='flex items-center text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 lg:px-10 border bg-blue-900 hover:bg-blue-800'
                                style={{ marginLeft: '12px' }}
                            >
                                History
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-[500px] flex items-center justify-center col-span-6">
                        <Image
                            src="/images/logo/HilltopLogo.png"
                            alt="Hilltop Bar & Grill Logo"
                            width={400}
                            height={400}
                            className="object-contain shadow-xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
