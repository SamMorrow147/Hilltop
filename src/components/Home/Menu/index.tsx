"use client"
import Link from "next/link";
// import { menuItems } from "@/app/api/menuData";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Menu = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
    const { ref: menuGridRef, isVisible: menuGridVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <section id="menu-section" className="py-16" style={{ backgroundColor: '#e6e2c0' }}>
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <div 
                    ref={headerRef}
                    className={`text-center mb-12 transition-all duration-1000 ease-out ${
                        headerVisible 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-12 opacity-0'
                    }`}
                >
                    <p className='text-black text-lg font-normal mb-3 tracking-widest uppercase'>HILLTOP BAR</p>
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-black font-roboto-slab mx-4">
                        Food & Drinks
                    </h2>
                    <p className="text-black/90 mt-4 text-center">
                        Featuring local favorites and classic pub fare
                    </p>
                    <div className="w-full overflow-hidden mt-8">
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
                    ref={menuGridRef}
                    className="relative"
                >
                    {/* Placeholder menu cards with blur effect */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 filter blur-sm">
                        {/* Sample menu cards for visual placeholder */}
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div 
                                key={index}
                                className={`bg-white rounded-lg p-6 shadow-lg transform transition-all duration-800 ease-out ${
                                    menuGridVisible 
                                        ? 'translate-y-0 opacity-100' 
                                        : 'translate-y-12 opacity-0'
                                }`}
                                style={{ 
                                    transitionDelay: menuGridVisible ? `${index * 200}ms` : '0ms'
                                }}
                            >
                                <h3 className="text-2xl font-semibold text-black mb-6 font-roboto-slab">
                                    {['Appetizers', 'Burgers & Sandwiches', 'Draft Beer', 'Cocktails'][index]}
                                </h3>
                                <div className="space-y-4">
                                    {Array.from({ length: 3 }).map((_, itemIndex) => (
                                        <div 
                                            key={itemIndex}
                                            className="flex justify-between items-start border-b border-gray-200 pb-3 last:border-b-0"
                                        >
                                            <div className="flex-1">
                                                <h4 className="font-medium text-black">Menu Item Name</h4>
                                                <p className="text-sm text-gray-600 mt-1">Delicious description of the item</p>
                                            </div>
                                            <span className="font-semibold text-black ml-4">$12.99</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Coming Soon Overlay */}
                    <div className={`absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg transition-all duration-800 ease-out ${
                        menuGridVisible 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: menuGridVisible ? '400ms' : '0ms' }}>
                        <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl text-center max-w-md mx-4">
                            <h3 className="text-3xl font-bold text-black mb-4 font-roboto-slab">
                                Menu Coming Soon
                            </h3>
                            <p className="text-gray-700 mb-6">
                                We're finalizing our delicious menu offerings. Check back soon or call us for current availability!
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`text-center mt-12 transition-all duration-800 ease-out ${
                    menuGridVisible 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: menuGridVisible ? '800ms' : '0ms' }}>
                    <p className="text-black/70 mb-6">
                        *Menu items and prices subject to change. Please call ahead for current availability.
                    </p>
                    <Link
                        href="tel:7632728140"
                        className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transform hover:scale-105 transition-all duration-200"
                    >
                        Call to Order: 763-272-8140
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Menu; 