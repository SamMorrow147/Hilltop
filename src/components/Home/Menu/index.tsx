"use client"
import Link from "next/link";
import Image from "next/image";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Menu = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ 
        threshold: 0.05, 
        rootMargin: '0px 0px 0px 0px',
        triggerOnce: true
    });
    const { ref: menuGridRef, isVisible: menuGridVisible } = useScrollAnimation({ 
        threshold: 0.05, 
        rootMargin: '0px 0px 0px 0px',
        triggerOnce: true 
    });

    const menuSections = [
        {
            title: "HILLY SMASH BURGERS",
            subtitle: "Two ¼ pound smashed patties served with chips. Upgrade to waffle fries for $2.50. Upgrade to side salad or cup of chili for $3.50. All burgers are gluten friendly",
            items: [
                {
                    name: "HILLTOP",
                    description: "American cheese, lettuce, tomato, and onion; add bacon | 2",
                    price: "13.95"
                },
                {
                    name: "BBQ BACON",
                    description: "Cheddar cheese, bacon, crispy onion straws, BBQ sauce",
                    price: "14.95"
                },
                {
                    name: "MR. JIMMY",
                    description: "American and cheddar cheese, grilled onions, lettuce, tomato, Jimmy sauce",
                    price: "14.95"
                },
                {
                    name: "'SHROOM & SWISS",
                    description: "Swiss cheese, grilled mushrooms, garlic aioli",
                    price: "14.95"
                },
                {
                    name: "PATTY MELT",
                    description: "½ lb patty, Swiss cheese, grilled onions, Jimmy sauce on pumpernickel",
                    price: "14.95"
                }
            ]
        },
        {
            title: "SALADS & BOWLS",
            items: [
                {
                    name: "CHIPOTLE BOWL",
                    description: "Southwest chicken, onions, peppers, black beans, queso fresco, pepitas, guacamole, brown rice, cilantro lime dressing. Available with plain chicken",
                    price: "16.95",
                    dietary: "[GF]"
                },
                {
                    name: "COBB SALAD",
                    description: "Marinated chicken, lettuce, bacon, egg, avocado, tomato, onion, craisins, cheese. Available with plain chicken",
                    price: "14.95",
                    dietary: "[GF]"
                },
                {
                    name: "AHI TUNA POKE BOWL",
                    description: "Raw, marinated ahi tuna, avocado, carrots, cucumbers, radishes, edamame, sesame seeds, scallion, jasmine rice, Thai chili dressing",
                    price: "16.95"
                },
                {
                    name: "CHICKEN QUINOA SALAD",
                    description: "Blackened chicken, spinach, quinoa, avocado, peppers, jalapeños, feta, honey citrus, mango yogurt dressing",
                    price: "14.95",
                    dietary: "[GF]"
                }
            ]
        },
        {
            title: "HANDHELDS",
            subtitle: "Served with chips. Upgrade to waffle fries for $2.50. Upgrade to side salad or cup of chili for $3.50",
            items: [
                {
                    name: "TERIYAKI CHICKEN SANDWICH",
                    description: "Marinated chicken, Swiss cheese, bacon, lettuce, tomato, onion, mayo",
                    price: "14.95"
                },
                {
                    name: "CHICKEN STRIPS",
                    description: "Four strips with choice of dipping sauce",
                    price: "13.95"
                },
                {
                    name: "BUFFALO CHICKEN WRAP",
                    description: "Crispy buffalo chicken, celery, lettuce, cheese, ranch dressing",
                    price: "14.95"
                },
                {
                    name: "FIRECRACKER CHICKEN WRAP",
                    description: "Crispy firecracker chicken, white rice, pico de gallo, cheese, ranch dressing",
                    price: "14.95"
                }
            ]
        },
        {
            title: "APPETIZERS",
            items: [
                {
                    name: "TRADITIONAL BONE-IN WINGS",
                    description: "Buffalo, Firecracker, BBQ or Cajun Dry Rub. Served with ranch or bleu cheese dressing",
                    price: "15.95",
                    dietary: "[GF]"
                },
                {
                    name: "BONELESS WINGS",
                    description: "Buffalo, Firecracker or BBQ. Served with ranch or bleu cheese dressing",
                    price: "14.95"
                },
                {
                    name: "BUFFALO CHICKEN WONTONS",
                    description: "Buffalo chicken, cream cheese, celery, green onion. Served with ranch or bleu cheese dressing",
                    price: "15.95"
                },
                {
                    name: "CHEESE CURDS",
                    description: "Served with a side of marinara",
                    price: "12.95"
                },
                {
                    name: "BEEF NACHOS",
                    description: "Corn tortilla chips, queso, ground beef, jalapeños, pico de gallo, lettuce, seasoned sour cream. Add guacamole +2",
                    price: "12.95"
                },
                {
                    name: "CHIPS, SALSA & QUESO",
                    description: "Corn tortilla chips with queso and salsa. Add guacamole +2",
                    price: "8.95"
                }
            ]
        },
        {
            title: "BROASTED CHICKEN",
            items: [
                {
                    name: "BROASTED CHICKEN DINNER",
                    description: "A breast, wing, thigh, and drummy broasted in-house. Served with homemade coleslaw and waffle fries",
                    price: "17.95"
                }
            ]
        },
        {
            title: "CHILI",
            subtitle: "topped with sour cream, cheese, green onions & garlic toast",
            items: [
                {
                    name: "CUP",
                    description: "",
                    price: "5.95"
                },
                {
                    name: "BOWL",
                    description: "",
                    price: "7.95"
                }
            ]
        },
        {
            title: "SHAKES",
            subtitle: "all shakes are topped with whipped cream & cherry",
            price: "6.95",
            items: [
                {
                    name: "VANILLA",
                    description: ""
                },
                {
                    name: "CHOCOLATE",
                    description: ""
                },
                {
                    name: "STRAWBERRY",
                    description: ""
                },
                {
                    name: "OREO",
                    description: ""
                }
            ]
        },
        {
            title: "HAPPY HOUR",
            subtitle: "Every day 2–6pm, Sunday–Thursday 8pm to close",
            items: [
                { type: "priceHeading", name: "$3" },
                { name: "TAP BEER PINTS", description: "16oz Coors Light, Hamms, or Mich Golden", price: "3" },
                { name: "RAIL DRINKS", description: "", price: "3" },
                { type: "priceHeading", name: "$5" },
                { name: "TAP BEER MUGS", description: "25oz Coors Light, Hamms, or Mich Golden", price: "5" },
                { name: "HOUSE WINE", description: "Chardonnay & Cabernet", price: "5" },
                { type: "note", name: "All other beer, wine and seltzers are $1 off!" },
                { type: "priceHeading", name: "$6" },
                { name: "CHIPS WITH SALSA & QUESO", description: "Add guacamole | 3", price: "6" },
                { type: "priceHeading", name: "$8" },
                { name: "CHEESE CURDS", description: "", price: "8" },
                { name: "BEEF NACHOS", description: "", price: "8" },
                { name: "BUFFALO CHICKEN WONTONS", description: "2 wontons per order", price: "8" },
                { type: "priceHeading", name: "$10" },
                { name: "BONE-IN TRADITIONAL WINGS", description: "Buffalo, firecracker, BBQ, or Cajun dry rub", price: "10" },
                { name: "BONELESS WINGS", description: "Buffalo, firecracker, or BBQ", price: "10" }
            ]
        }
    ];

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
                    {/* Menu sections */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {menuSections.map((section, sectionIndex) => (
                            <div 
                                key={section.title}
                                className={`bg-white rounded-lg p-6 shadow-lg transform transition-all duration-800 ease-out ${
                                    section.title === "HAPPY HOUR" ? "lg:col-span-1 lg:col-start-1" : ""
                                } ${
                                    menuGridVisible 
                                        ? "translate-y-0 opacity-100" 
                                        : "translate-y-12 opacity-0"
                                }`}
                                style={{ 
                                    transitionDelay: menuGridVisible ? `${sectionIndex * 150}ms` : "0ms"
                                }}
                            >
                                <div className={`flex items-center ${section.title === "HAPPY HOUR" ? "mb-1 justify-between" : "mb-4 justify-between"}`}>
                                    <h3 className="text-2xl font-bold text-black font-roboto-slab tracking-wide">
                                        {section.title}
                                    </h3>
                                    {section.title !== "HAPPY HOUR" && "price" in section && section.price && (
                                        <span className="text-gray-500 text-base">
                                            ${section.price}
                                        </span>
                                    )}
                                </div>
                                {section.subtitle && (
                                    <p className={`text-sm text-gray-600 ${section.title === "HAPPY HOUR" ? "text-left font-normal mb-4" : "italic border-l-4 border-gray-300 pl-4 mb-6"}`}>
                                        {section.subtitle}
                                    </p>
                                )}
                                {section.title === "HAPPY HOUR" && (
                                    <div className="border-b border-gray-300 mb-6" aria-hidden />
                                )}
                                <div className={`space-y-4 ${(section as any).comingSoon ? "relative" : ""}`}>
                                    {(section as any).comingSoon && (
                                        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg">
                                            <h3 className="text-3xl font-bold text-black font-roboto-slab tracking-wide">
                                                COMING SOON
                                            </h3>
                                        </div>
                                    )}
                                    <div className={(section as any).comingSoon ? "blur-sm opacity-50" : ""}>
                                        {section.title === "HAPPY HOUR" ? (() => {
                                            type HappyHourTier = { type: "tier"; price: string; items: { name: string; description?: string }[]; note?: string };
                                            const blocks: HappyHourTier[] = [];
                                            let currentTier: HappyHourTier | null = null;
                                            for (const item of section.items) {
                                                const it = item as { type?: string; name: string; description?: string };
                                                if (it.type === "priceHeading") {
                                                    if (currentTier) blocks.push(currentTier);
                                                    currentTier = { type: "tier", price: it.name, items: [] };
                                                } else if (it.type === "note") {
                                                    if (currentTier) {
                                                        currentTier.note = it.name;
                                                        blocks.push(currentTier);
                                                        currentTier = null;
                                                    }
                                                } else if (currentTier) {
                                                    currentTier.items.push({ name: it.name, description: it.description });
                                                }
                                            }
                                            if (currentTier) blocks.push(currentTier);
                                            return (
                                                <div className="w-max max-w-full mx-auto">
                                                    {blocks.map((block, blockIndex) => (
                                                        <div key={blockIndex} className={blockIndex === 0 ? "pt-0" : "pt-5"}>
                                                            <div className="flex gap-4 sm:gap-6 items-center">
                                                                <div className="flex-shrink-0 w-14 sm:w-16 flex items-center justify-center self-stretch">
                                                                    <span className="text-4xl sm:text-5xl font-bold text-black font-roboto-slab leading-none">
                                                                        {block.price}
                                                                    </span>
                                                                </div>
                                                                <div className="flex-1 min-w-0 space-y-3">
                                                                    {block.items.map((menuItem, i) => (
                                                                        <div key={i}>
                                                                            <h4 className="font-bold text-black text-base uppercase tracking-wide">
                                                                                {menuItem.name}
                                                                            </h4>
                                                                            {menuItem.description && (
                                                                                <p className="text-gray-600 text-sm mt-0.5 font-normal normal-case pl-0 sm:pl-4">
                                                                                    {menuItem.description}
                                                                                </p>
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            {block.note && (
                                                                <div className="flex gap-4 sm:gap-6 mt-2">
                                                                    <div className="w-14 sm:w-16 flex-shrink-0" aria-hidden />
                                                                    <p className="text-left text-black font-bold italic uppercase text-sm py-3 tracking-wide">
                                                                        {block.note}
                                                                    </p>
                                                                </div>
                                                            )}
                                                            <div className={`border-b border-dotted border-gray-400 -mx-6 px-6 ${block.price === "$6" ? "mt-4" : "mt-1"}`} />
                                                        </div>
                                                    ))}
                                                </div>
                                            );
                                        })() : section.items.map((item, itemIndex) => {
                                            const itemType = (item as any).type;
                                            if (itemType === "priceHeading" || itemType === "note") return null;
                                            return (
                                                <div 
                                                    key={itemIndex}
                                                    className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                                                >
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex-1">
                                                            <h4 className="font-semibold text-black text-lg flex items-center">
                                                                {item.name}
                                                                {(item as any).dietary && (
                                                                    <Image
                                                                        src="/images/gluten-free.svg"
                                                                        alt="Gluten-free"
                                                                        width={20}
                                                                        height={20}
                                                                        className="ml-2"
                                                                    />
                                                                )}
                                                            </h4>
                                                            {item.description && (
                                                                <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                                                                    {item.description}
                                                                </p>
                                                            )}
                                                        </div>
                                                        {"price" in item && item.price && (
                                                            <div className="ml-4 flex-shrink-0">
                                                                <span className="text-gray-500 text-base">
                                                                    ${item.price}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`mt-12 transition-all duration-800 ease-out ${
                    menuGridVisible 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: menuGridVisible ? '800ms' : '0ms' }}>
                    {/* Menu disclaimers */}
                    <div className="bg-white/80 rounded-lg p-6 mb-6 border border-gray-200">
                        <div className="flex items-center justify-center mb-4">
                            <span className="text-black font-medium mr-2">Gluten Friendly =</span>
                            <Image
                                src="/images/gluten-free.svg"
                                alt="Gluten-friendly"
                                width={24}
                                height={24}
                                className="ml-1"
                            />
                        </div>
                        <p className="text-black/80 text-sm leading-relaxed text-center max-w-4xl mx-auto">
                            Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.
                        </p>
                    </div>
                    
                    <div className="text-center">
                        <p className="text-black/70 mb-6">
                            *Menu items and prices subject to change. Please call ahead for current availability.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="tel:7632728140"
                                className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transform hover:scale-105 transition-all duration-200"
                            >
                                Call to Order: 763-272-8140
                            </Link>
                            <Link
                                href="https://www.toasttab.com/hilltophanover"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transform hover:scale-105 transition-all duration-200"
                            >
                                Order Online
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu; 