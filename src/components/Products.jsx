import { aubergine, avo, banana, carrots, cassava, coconut, corn, cucumbers, eggplant, mango, okra, onion, orange, papaya, pepper, pineapple, plantain, sweet, tomato } from "../assets";

const products = [
  {
    id: 1,
    image: aubergine,
    name: "Fresh Aubergines",
    price: 25.0,
    description: "Locally-sourced aubergines, perfect for your next meal.",
    farm: "Adom Farms",
    location: "Kumasi, Ghana",
    availableKilos: 500,
    category: "Vegetables",
  },
  {
    id: 2,
    image: banana,
    name: "Sweet Bananas",
    price: 35.0,
    description: "Sweet bananas, grown with care on our family farm.",
    farm: "Golden Coast Orchards",
    location: "Eastern Region, Ghana",
    availableKilos: 750,
    category: "Fruits",
  },
  {
    id: 3,
    image: cucumbers,
    name: "Fresh Cucumbers",
    price: 18.0,
    description:
      "Freshly harvested cucumbers, packed with nutrients and flavor.",
    farm: "River Side Farms",
    location: "Volta Region, Ghana",
    availableKilos: 300,
    category: "Vegetables",
  },
  {
    id: 4,
    image: tomato,
    name: "Plump Tomatoes",
    price: 20.0,
    description: "Vibrant red tomatoes, perfect for stews and salads.",
    farm: "Mawusi Farms",
    location: "Accra, Ghana",
    availableKilos: 600,
    category: "Vegetables",
  },
  {
    id: 5,
    image: sweet ,
    name: "Fresh sweet potatoes",
    price: 50.0,
    description: "Organic potatoes straight from the farm to your table.",
    farm: "Yeboah Farms",
    location: "Ashanti Region, Ghana",
    availableKilos: 400,
    category: "Roots & Tubers",
  },
  {
    id: 6,
    image: orange,
    name: "Juicy Oranges",
    price: 30.0,
    description: "Sun-kissed oranges, bursting with flavor and nutrients.",
    farm: "Bright Orchards",
    location: "Brong Ahafo, Ghana",
    availableKilos: 800,
    category: "Fruits",
  },
  {
    id: 7,
    image: pepper,
    name: "Red Bell Peppers",
    price: 15.0,
    description: "Crisp and flavorful red bell peppers.",
    farm: "Kwame's Gardens",
    location: "Western Region, Ghana",
    availableKilos: 200,
    category: "Vegetables",
  },
  {
    id: 8,
    image: cassava,
    name: "Fresh Cassava",
    price: 40.0,
    description: "Versatile cassava for all your traditional dishes.",
    farm: "Esi Farms",
    location: "Central Region, Ghana",
    availableKilos: 500,
    category: "Roots & Tubers",
  },
  {
    id: 9,
    image: pineapple,
    name: "Sweet Pineapples",
    price: 35.0,
    description: "Golden pineapples from Ghana's finest farms.",
    farm: "Golden Tropics Farms",
    location: "Central Region, Ghana",
    availableKilos: 450,
    category: "Fruits",
  },
  {
    id: 10,
    image: onion,
    name: "Fresh Onions",
    price: 20.0,
    description: "Pungent and aromatic onions, great for any meal.",
    farm: "Abena's Produce",
    location: "Northern Region, Ghana",
    availableKilos: 600,
    category: "Vegetables",
  },
  {
    id: 11,
    image: mango,
    name: "Ripe Mangoes",
    price: 25.0,
    description: "Sweet and juicy mangoes to delight your taste buds.",
    farm: "Tropical Fruits Ltd.",
    location: "Eastern Region, Ghana",
    availableKilos: 300,
    category: "Fruits",
  },
  {
    id: 12,
    image: plantain,
    name: "Fresh Plantains",
    price: 45.0,
    description: "Golden plantains, perfect for frying or roasting.",
    farm: "Nyame Nsa Farms",
    location: "Volta Region, Ghana",
    availableKilos: 700,
    category: "Fruits",
  },
  {
    id: 13,
    image: carrots,
    name: "Organic Carrots",
    price: 18.0,
    description: "Crisp and naturally sweet organic carrots.",
    farm: "Agyeman Farms",
    location: "Bono Region, Ghana",
    availableKilos: 250,
    category: "Vegetables",
  },
  {
    id: 14,
    image: coconut,
    name: "Coconuts",
    price: 50.0,
    description: "Fresh coconuts for drinking or cooking.",
    farm: "Aseyi Farms",
    location: "Western Region, Ghana",
    availableKilos: 400,
    category: "Fruits",
  },
  {
    id: 15,
    image: pepper,
    name: "Hot Peppers",
    price: 10.0,
    description: "Spicy peppers to add heat to your dishes.",
    farm: "Nhyira Agro",
    location: "Central Region, Ghana",
    availableKilos: 500,
    category: "Vegetables",
  },
  {
    id: 16,
    image: okra,
    name: "Fresh Okra",
    price: 15.0,
    description: "Tender okra for soups and stews.",
    farm: "Esi Farms",
    location: "Volta Region, Ghana",
    availableKilos: 300,
    category: "Vegetables",
  },
  {
    id: 17,
    image: eggplant,
    name: "Garden Eggs",
    price: 20.0,
    description: "Fresh garden eggs perfect for traditional stews.",
    farm: "Kojo's Farms",
    location: "Ashanti Region, Ghana",
    availableKilos: 250,
    category: "Vegetables",
  },
  {
    id: 18,
    image: corn,
    name: "Maize",
    price: 28.0,
    description: "Golden maize, ideal for traditional meals.",
    farm: "Osei Agro Farms",
    location: "Northern Region, Ghana",
    availableKilos: 800,
    category: "Grains",
  },
  {
    id: 19,
    image: avo,
    name: "Avocados",
    price: 35.0,
    description: "Rich and creamy avocados from local farms.",
    farm: "Adjei Farms",
    location: "Eastern Region, Ghana",
    availableKilos: 350,
    category: "Fruits",
  },
  {
    id: 20,
    image: papaya,
    name: "Pawpaw",
    price: 25.0,
    description: "Fresh pawpaw, packed with vitamins and flavor.",
    farm: "Sunshine Agro",
    location: "Volta Region, Ghana",
    availableKilos: 400,
    category: "Fruits",
  },
];

export default products;
