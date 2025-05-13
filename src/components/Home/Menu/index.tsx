"use client"
import { Icon } from "@iconify/react";

const HILLTOP_RED = "#9B2323"; // extracted from the logo

const Menu = () => {
    const menuCategories = [
        {
            name: "Local Favorites",
            items: [
                { name: "Hilltop Burger", description: "1/2 lb. Angus beef, cheddar, bacon, special sauce", price: "$14.99" },
                { name: "Bridge Club Sandwich", description: "Triple-decker with turkey, ham, bacon, and Swiss", price: "$13.99" },
                { name: "Historic Hanover Wings", description: "Choice of Buffalo, BBQ, or Honey Garlic", price: "$12.99" }
            ]
        },
        {
            name: "Burgers & Sandwiches",
            items: [
                { name: "Classic Cheeseburger", description: "1/3 lb. Angus beef with American cheese", price: "$11.99" },
                { name: "Chicken Sandwich", description: "Grilled chicken breast with lettuce and tomato", price: "$10.99" },
                { name: "Reuben", description: "Corned beef, sauerkraut, Swiss, and Russian dressing", price: "$12.99" },
                { name: "BLT", description: "Crispy bacon, lettuce, and tomato on toasted bread", price: "$9.99" }
            ]
        },
        {
            name: "Appetizers & Sides",
            items: [
                { name: "Loaded Nachos", description: "Tortilla chips, cheese, jalapeños, and salsa", price: "$10.99" },
                { name: "Mozzarella Sticks", description: "Breaded mozzarella with marinara sauce", price: "$8.99" },
                { name: "Onion Rings", description: "Beer-battered onion rings", price: "$6.99" },
                { name: "French Fries", description: "Crispy golden fries with sea salt", price: "$4.99" }
            ]
        },
        {
            name: "Draft Beer",
            items: [
                { name: "Local Craft Selection", description: "Rotating taps featuring Minnesota breweries", price: "$6.99" },
                { name: "Domestic Drafts", description: "Bud Light, Coors Light, Miller Lite", price: "$4.99" },
                { name: "Premium Drafts", description: "Guinness, Blue Moon, Seasonal Specials", price: "$5.99" }
            ]
        },
        {
            name: "Cocktails & Spirits",
            items: [
                { name: "House Specials", description: "Ask your server about our daily specials", price: "$8.99" },
                { name: "Classic Cocktails", description: "Old Fashioned, Manhattan, Martini", price: "$9.99" },
                { name: "Minnesota Mule", description: "Local vodka, ginger beer, lime", price: "$8.99" }
            ]
        }
    ];

    return (
        <section id="menu-section" className="py-16" style={{ backgroundColor: HILLTOP_RED }}>
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <div className="text-center mb-12">
                    <p className='text-white text-lg font-normal mb-3 tracking-widest uppercase'>HILLTOP BAR</p>
                    <h2 className="text-3xl lg:text-5xl font-semibold text-white">
                        Food & Drinks
                    </h2>
                    <p className="text-white/90 mt-4">
                        Featuring local favorites and classic pub fare
                    </p>
                    <div className="flex justify-center mt-8">
                        <div className="w-40 h-0.5 border-t-4 border-dotted border-white rounded-full" />
                    </div>
                </div>
                
                <div className="space-y-12">
                    {menuCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                            <h3 className="text-2xl font-semibold text-black dark:text-white mb-6 flex items-center">
                                <Icon icon="solar:fork-knife-bold" className="text-primary mr-2" />
                                {category.name}
                            </h3>
                            <div className="space-y-4">
                                {category.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex justify-between items-start border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0">
                                        <div className="flex-1">
                                            <h4 className="text-lg font-medium text-black dark:text-white">{item.name}</h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{item.description}</p>
                                        </div>
                                        <span className="text-primary font-semibold ml-4">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu; 