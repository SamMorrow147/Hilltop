export interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuItems: MenuCategory[] = [
  {
    category: "Local Favorites",
    items: [
      { name: "Hilltop Burger", description: "1/2 lb. Angus beef, cheddar, bacon, special sauce", price: "$14.99" },
      { name: "Bridge Club Sandwich", description: "Triple-decker with turkey, ham, bacon, and Swiss", price: "$13.99" },
      { name: "Historic Hanover Wings", description: "Choice of Buffalo, BBQ, or Honey Garlic", price: "$12.99" }
    ]
  },
  {
    category: "Burgers & Sandwiches",
    items: [
      { name: "Classic Cheeseburger", description: "1/3 lb. Angus beef with American cheese", price: "$11.99" },
      { name: "Chicken Sandwich", description: "Grilled chicken breast with lettuce and tomato", price: "$10.99" },
      { name: "Reuben", description: "Corned beef, sauerkraut, Swiss, and Russian dressing", price: "$12.99" },
      { name: "BLT", description: "Crispy bacon, lettuce, and tomato on toasted bread", price: "$9.99" }
    ]
  },
  {
    category: "Appetizers & Sides",
    items: [
      { name: "Loaded Nachos", description: "Tortilla chips, cheese, jalapeños, and salsa", price: "$10.99" },
      { name: "Mozzarella Sticks", description: "Breaded mozzarella with marinara sauce", price: "$8.99" },
      { name: "Onion Rings", description: "Beer-battered onion rings", price: "$6.99" },
      { name: "French Fries", description: "Crispy golden fries with sea salt", price: "$4.99" }
    ]
  },
  {
    category: "Draft Beer",
    items: [
      { name: "Local Craft Selection", description: "Rotating taps featuring Minnesota breweries", price: "$6.99" },
      { name: "Domestic Drafts", description: "Bud Light, Coors Light, Miller Lite", price: "$4.99" },
      { name: "Premium Drafts", description: "Guinness, Blue Moon, Seasonal Specials", price: "$5.99" }
    ]
  },
  {
    category: "Cocktails & Spirits",
    items: [
      { name: "House Specials", description: "Ask your server about our daily specials", price: "$8.99" },
      { name: "Classic Cocktails", description: "Old Fashioned, Manhattan, Martini", price: "$9.99" },
      { name: "Minnesota Mule", description: "Local vodka, ginger beer, lime", price: "$8.99" }
    ]
  }
]; 