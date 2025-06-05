"use client"
import Image from 'next/image';
import { galleryImages } from '@/app/api/data';
import Masonry from 'react-masonry-css';
import Link from 'next/link';
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Gallery = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
    const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <section>
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md' id='gallery-section'>
                <div 
                    ref={headerRef}
                    className={`text-center transition-all duration-1000 ease-out ${
                        headerVisible 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-12 opacity-0'
                    }`}
                >
                    <p className='text-lg font-normal mb-3 tracking-widest uppercase font-roboto-slab text-black'>Our Gallery</p>
                    <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white font-roboto-slab">
                        Good Food, Good Friends, Good Times.
                    </h2>
                    <div className="w-full overflow-hidden mt-4 mb-8">
                        <div className="flex justify-center py-2 bg-transparent gap-8 md:gap-12 max-w-full">
                            {Array.from({ length: 15 }).map((_, i) => (
                                <span 
                                    key={i} 
                                    className={`w-2 h-2 rounded-full flex-shrink-0 hidden md:inline-block transition-all duration-300 ease-out ${
                                        headerVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                                    }`}
                                    style={{ 
                                        backgroundColor: '#000000',
                                        transitionDelay: headerVisible ? `${i * 50}ms` : '0ms'
                                    }}
                                ></span>
                            ))}
                            {Array.from({ length: 8 }).map((_, i) => (
                                <span 
                                    key={i + 15} 
                                    className={`w-2 h-2 rounded-full flex-shrink-0 md:hidden transition-all duration-300 ease-out ${
                                        headerVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                                    }`}
                                    style={{ 
                                        backgroundColor: '#000000',
                                        transitionDelay: headerVisible ? `${i * 50}ms` : '0ms'
                                    }}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>
                <div 
                    ref={galleryRef}
                    className={`my-16 px-6 transition-all duration-1000 ease-out ${
                        galleryVisible 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-12 opacity-0'
                    }`}
                >
                    <Masonry
                        breakpointCols={{ 'default': 2, '700': 2, '500': 1 }}
                        className="flex gap-6"
                        columnClassName="masonry-column"
                    >
                        {/* Map through images */}
                        {galleryImages.map((item, index) => (
                            <div 
                                key={index} 
                                className={`overflow-hidden rounded-3xl mb-6 relative group transform transition-all duration-800 ease-out hover:scale-105 ${
                                    galleryVisible 
                                        ? 'translate-y-0 opacity-100' 
                                        : 'translate-y-8 opacity-0'
                                }`}
                                style={{ 
                                    transitionDelay: galleryVisible ? `${index * 150}ms` : '0ms'
                                }}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.name}
                                    width={600}
                                    height={500}
                                    className="object-cover w-full h-full transition-transform duration-300"
                                />
                                <div
                                    className="w-full h-full absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                                    style={{ backgroundColor: 'rgba(230, 226, 192, 0.3)' }}
                                >
                                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="font-medium text-lg">{item.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Masonry>
                </div>
                
                {/* Decorative dots separator */}
                <div className="w-full overflow-hidden mt-8">
                    <div className="flex justify-center py-2 bg-transparent gap-8 md:gap-12 max-w-full">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <span 
                                key={i} 
                                className={`w-2 h-2 rounded-full flex-shrink-0 hidden md:inline-block transition-all duration-300 ease-out ${
                                    galleryVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                                }`}
                                style={{ 
                                    backgroundColor: '#000000',
                                    transitionDelay: galleryVisible ? `${i * 50}ms` : '0ms'
                                }}
                            ></span>
                        ))}
                        {Array.from({ length: 10 }).map((_, i) => (
                            <span 
                                key={i + 20} 
                                className={`w-2 h-2 rounded-full flex-shrink-0 md:hidden transition-all duration-300 ease-out ${
                                    galleryVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                                }`}
                                style={{ 
                                    backgroundColor: '#000000',
                                    transitionDelay: galleryVisible ? `${i * 50}ms` : '0ms'
                                }}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
