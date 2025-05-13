"use client"
import Image from 'next/image';
import { galleryImages } from '@/app/api/data';
import Masonry from 'react-masonry-css';
import Link from 'next/link';

const Gallery = () => {
    return (
        <section>
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md' id='gallery-section'>
                <div className="text-center">
                    <p className='text-lg font-normal mb-3 tracking-widest uppercase font-roboto-slab' style={{ color: '#9B2323' }}>Our Gallery</p>
                    <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white font-roboto-slab">
                        Good Food, Good Friends, Good Times.
                    </h2>
                    <div className="w-full border-b-8 border-dotted mt-4 mb-8 mx-auto" style={{ borderColor: '#003366' }}></div>
                </div>
                <div className="my-16 px-6">
                    <Masonry
                        breakpointCols={{ 'default': 2, '700': 2, '500': 1 }}
                        className="flex gap-6"
                        columnClassName="masonry-column"
                    >
                        {/* Map through images */}
                        {galleryImages.map((item, index) => (
                            <div key={index} className="overflow-hidden rounded-3xl mb-6 relative group">
                                <Image
                                    src={item.src}
                                    alt={item.name}
                                    width={600}
                                    height={500}
                                    className="object-cover w-full h-full"
                                />
                                <div
                                    className="w-full h-full absolute left-0 top-0 p-12 flex flex-col items-start gap-8 justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none group-hover:pointer-events-auto"
                                    style={{ background: 'rgba(155, 35, 35, 0.3)' }}
                                >
                                    <p className='text-white text-2xl'>
                                        {item.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Masonry>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
