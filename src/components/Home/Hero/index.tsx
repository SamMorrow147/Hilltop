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
                        <h1 className="text-4xl lg:text-7xl font-semibold mb-5 md:4px lg:text-start text-center font-roboto-slab" style={{ color: '#000000' }}>
                            Welcome to Hilltop Bar
                        </h1>
                        <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>
                            Re-Established 2025 in Historic Hanover<br />
                            A gathering place for the community since the 1880s
                        </p>
                        <div className='flex flex-row align-middle justify-center lg:justify-start gap-4'>
                            <Link
                                href='#menu-section'
                                className='text-xl font-medium rounded-full text-black py-5 px-6 lg:px-14 border'
                                style={{ backgroundColor: '#e6e2c0', borderColor: '#e6e2c0' }}
                            >
                                View Our Menu
                            </Link>
                            <Link
                                href='#history-section'
                                className='flex items-center text-xl font-medium rounded-full text-white py-5 px-6 lg:px-10 border bg-black hover:bg-gray-800'
                            >
                                History
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-[600px] flex items-center justify-center col-span-6">
                        <Image
                            src="/images/Hilltop-bar-ca-2002.jpg"
                            alt="Historic Hilltop Bar circa 2002"
                            width={600}
                            height={600}
                            className="object-cover rounded-lg"
                            style={{
                                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 96%, transparent 100%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 96%, transparent 100%)',
                                maskComposite: 'intersect',
                                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 96%, transparent 100%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 96%, transparent 100%)',
                                WebkitMaskComposite: 'source-in'
                            }}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
