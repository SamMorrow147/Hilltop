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
            title: "APPETIZERS",
            items: [
                {
                    name: "BARBACOA NACHOS",
                    description: "Slow braised barbacoa beef, jalapeño, pico de gallo, lettuce, seasoned sour cream, avocado salsa and queso blanco",
                    dietary: "[GF]"
                },
                {
                    name: "BUFFALO CHICKEN WONTONS",
                    description: "Buffalo chicken, cream cheese, celery and green onion with coleslaw and your choice of ranch or bleu cheese dressing"
                },
                {
                    name: "CHEESE CURDS",
                    description: "Served with a side of marinara"
                },
                {
                    name: "TRADITIONAL BONE-IN WINGS",
                    description: "Buffalo, firecracker, cajun or lemon pepper dry rub. Served with ranch or bleu cheese dressing",
                    dietary: "[GF]"
                },
                {
                    name: "BONELESS WINGS",
                    description: "Buffalo, BBQ or firecracker. Served with ranch or bleu cheese dressing"
                },
                {
                    name: "WAFFLE FRY APPETIZER",
                    description: "Crispy golden fries tossed in a rosemary garlic seasoning and served with seasoned sour cream",
                    dietary: "[GF]"
                }
            ]
        },
        {
            title: "SALADS & BOWLS",
            items: [
                {
                    name: "QUINOA CHICKEN SALAD",
                    description: "Grilled chicken, quinoa, avocado, chopped spinach, roasted peppers, fresh herbs, pickled jalapeños, feta cheese, honey citrus dressing and mango yogurt dressing",
                    dietary: "[GF]"
                },
                {
                    name: "COBB SALAD",
                    description: "Grilled marinated chicken, bacon, hard boiled egg, avocado, tomato, red onion, croutons and mixed cheese with your choice of dressing. Available with plain chicken [GF]"
                },
                {
                    name: "CHIPOTLE BOWL",
                    description: "Southwest chicken, onions and peppers, black beans, slaw mix, queso fresco, pepitas and guacamole over brown rice with a side of cilantro lime dressing. Available with plain chicken [GF]"
                },
                {
                    name: "AHI TUNA POKE BOWL",
                    description: "Raw marinated ahi tuna, avocado, carrots, cucumbers, radishes and edamame over jasmine rice topped with sesame seeds, scallions and served with a side of Thai chili dressing"
                },
                {
                    name: "SANTA FE STEAK BOWL",
                    description: "Marinated skirt steak, grilled onions and peppers, pico de gallo, avocado, wontons and mixed cheese over jasmine rice with a side of ranch dressing"
                }
            ]
        },
        {
            title: "HILLY SMASH BURGERS",
            subtitle: "Two ¼ pound smashed patties on a grilled bun served with chips. Upgrade to waffle fries for $2.50 or a side salad for $3.50",
            items: [
                {
                    name: "HILLTOP",
                    description: "American cheese, garlic aioli, lettuce, tomato and onion. Add bacon | 2"
                },
                {
                    name: "BBQ BACON",
                    description: "Cheddar cheese, bacon, crispy onion straws and BBQ sauce"
                },
                {
                    name: "MR. JIMMY",
                    description: "American and cheddar cheese, grilled onions, lettuce, tomato and Jimmy sauce. Add bacon | 2"
                },
                {
                    name: "HANGOVER",
                    description: "American cheese, fried egg, bacon, avocado, pico de gallo and chipotle aioli"
                },
                {
                    name: "'SHROOM & SWISS",
                    description: "Swiss cheese, sautéed mushrooms and garlic aioli"
                },
                {
                    name: "PATTY MELT",
                    description: "Swiss cheese and grilled onions on rye bread"
                }
            ]
        },
        {
            title: "HANDHELDS",
            subtitle: "All handhelds are served with chips. Upgrade to waffle fries for $2.50 or a side salad for $3.50",
            items: [
                {
                    name: "FRIED CHICKEN SANDWICH",
                    description: "Swiss cheese, pickles, lettuce, tomato, onion and mayo. Available original, buffalo or Nashville hot"
                },
                {
                    name: "GRILLED CHICKEN SANDWICH",
                    description: "Swiss cheese, bacon, lettuce, tomato, onion and mayo"
                },
                {
                    name: "WALLEYE SLIDERS",
                    description: "2 sliders with hand battered walleye, American cheese, lettuce and tartar"
                },
                {
                    name: "CLUBHOUSE SANDWICH",
                    description: "Turkey, ham, bacon, American cheese, lettuce, tomato and mayo"
                },
                {
                    name: "CHICKEN STRIPS",
                    description: "4 strips with your choice of dipping sauce"
                }
            ]
        },
        {
            title: "FAJITAS & TACOS",
            subtitle: "Served with a side of tortilla chips & salsa. Add guacamole | 2, Add queso | 1",
            items: [
                {
                    name: "CHICKEN FAJITAS",
                    description: "Onions and peppers, flour tortillas, pico de gallo, lettuce, cheese, pickled jalapeños, sour cream and salsa. Corn tortilla available upon request [GF]"
                },
                {
                    name: "BIRRIA TACOS",
                    description: "2 crispy corn tortillas dipped in homemade birria consume stuffed with slow braised barbacoa beef, cheese, onion and cilantro, served with a side of birria consume for dipping",
                    dietary: "[GF]"
                },
                {
                    name: "CARNE ASADA TACOS",
                    description: "Tacos with marinated skirt steak, lettuce, cotija cheese, onion and cilantro. Corn tortillas available upon request [GF]"
                }
            ]
        },
        {
            title: "BROASTED CHICKEN",
            items: [
                {
                    name: "HALF BIRD (4 PIECE)",
                    description: "A breast, wing, thigh and drummy broasted in house with homemade coleslaw and waffle fries"
                },
                {
                    name: "FULL BIRD (8 PIECE)",
                    description: "2 breasts, 2 wings, 2 thighs and 2 drummies broasted in house with homemade coleslaw and waffle fries"
                }
            ]
        },
        {
            title: "SHAKES & MALTS",
            subtitle: "All malts & shakes are topped with whipped cream & cherry",
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
                    name: "COOKIES & CREAM",
                    description: ""
                }
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
                                    menuGridVisible 
                                        ? 'translate-y-0 opacity-100' 
                                        : 'translate-y-12 opacity-0'
                                }`}
                                style={{ 
                                    transitionDelay: menuGridVisible ? `${sectionIndex * 150}ms` : '0ms'
                                }}
                            >
                                <h3 className="text-2xl font-bold text-black mb-4 font-roboto-slab tracking-wide">
                                    {section.title}
                                </h3>
                                {section.subtitle && (
                                    <p className="text-sm text-gray-600 mb-6 italic border-l-4 border-gray-300 pl-4">
                                        {section.subtitle}
                                    </p>
                                )}
                                <div className="space-y-4">
                                    {section.items.map((item, itemIndex) => (
                                        <div 
                                            key={itemIndex}
                                            className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                                        >
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-black text-lg flex items-center">
                                                        {item.name}
                                                        {item.dietary && (
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
                                            </div>
                                        </div>
                                    ))}
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
                        <Link
                            href="tel:7632728140"
                            className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transform hover:scale-105 transition-all duration-200"
                        >
                            Call to Order: 763-272-8140
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu; 