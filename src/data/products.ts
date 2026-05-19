import type { Product, ProductCategory, PriceTier, SkillLevel } from "@/types/product";

const descriptions: Record<ProductCategory, string> = {
  "Starter Sets": "A simple way to get two or more people on court with the basics in one box.",
  "Beginner Paddles": "A forgiving paddle option for new players who want control before power.",
  Balls: "A practical ball pack for casual games, clinics, and first matches.",
  Bags: "A beginner-friendly way to carry paddles, balls, water, and small court items.",
  Nets: "A portable net option for driveways, cul-de-sacs, and casual practice spaces.",
  "Grip Tape": "A small upgrade that can make an older or slippery paddle easier to hold.",
  "Court Accessories": "Useful extras for organizing games, practice, and shared court time.",
  Gifts: "A practical pickleball gift idea that does not require expert gear knowledge."
};

const imageByCategory: Record<ProductCategory, string> = {
  "Starter Sets": "/images/products/photos/starter-set.jpg",
  "Beginner Paddles": "/images/products/photos/beginner-paddle.jpg",
  Balls: "/images/products/photos/balls.jpg",
  Bags: "/images/products/photos/bag.jpg",
  Nets: "/images/products/photos/net.jpg",
  "Grip Tape": "/images/products/photos/grip-tape.jpg",
  "Court Accessories": "/images/products/photos/accessories.jpg",
  Gifts: "/images/products/photos/gift.jpg"
};

const baseFeatures: Record<ProductCategory, string[]> = {
  "Starter Sets": ["Multiple paddles", "Beginner ball pack", "Simple shared setup"],
  "Beginner Paddles": ["Forgiving shape", "Comfort-focused handle", "Control-first feel"],
  Balls: ["Practice-ready pack", "Easy to replace", "Court-type specific"],
  Bags: ["Paddle storage", "Ball pocket", "Daily-carry size"],
  Nets: ["Portable frame", "Practice-friendly setup", "Storage bag included"],
  "Grip Tape": ["Comfort texture", "Easy replacement", "Low-cost refresh"],
  "Court Accessories": ["Simple organization", "Practice friendly", "Easy to pack"],
  Gifts: ["Beginner friendly", "Easy to give", "Practical court use"]
};

const items: Array<[string, ProductCategory, string, SkillLevel, PriceTier, boolean]> = [
  ["Two-Paddle Beginner Starter Set", "Starter Sets", "Two new players who want the basics", "Brand new", "Budget", true],
  ["Family Pickleball Starter Set", "Starter Sets", "Families learning together", "Brand new", "Mid-range", true],
  ["Backyard Pickleball Starter Kit", "Starter Sets", "Casual driveway games", "Brand new", "Budget", false],
  ["Four-Player Recreation Set", "Starter Sets", "Group games and visitors", "Beginner", "Mid-range", false],
  ["Compact Starter Set with Carry Bag", "Starter Sets", "Keeping gear together", "Brand new", "Mid-range", false],
  ["Lightweight Control Paddle", "Beginner Paddles", "Players who want easy handling", "Beginner", "Mid-range", true],
  ["Widebody Beginner Paddle", "Beginner Paddles", "More forgiving contact", "Beginner", "Budget", true],
  ["Balanced All-Around Paddle", "Beginner Paddles", "A first personal paddle", "Beginner", "Mid-range", true],
  ["Soft Touch Practice Paddle", "Beginner Paddles", "Control drills and dinking", "Recreational", "Mid-range", false],
  ["Durable Recreation Paddle", "Beginner Paddles", "Shared household use", "Beginner", "Budget", false],
  ["Comfort Grip Beginner Paddle", "Beginner Paddles", "Players focused on handle feel", "Brand new", "Mid-range", false],
  ["Outdoor Pickleball Ball Pack", "Balls", "Outdoor courts and parks", "Beginner", "Budget", true],
  ["Indoor Pickleball Ball Pack", "Balls", "Gym and indoor court play", "Beginner", "Budget", true],
  ["Mixed Indoor Outdoor Ball Pack", "Balls", "Trying both court types", "Brand new", "Mid-range", false],
  ["High-Visibility Practice Balls", "Balls", "Tracking the ball more easily", "Beginner", "Budget", false],
  ["Large Recreation Ball Pack", "Balls", "Groups that lose balls often", "Recreational", "Mid-range", false],
  ["Compact Pickleball Sling Bag", "Bags", "One paddle and light carry", "Beginner", "Budget", true],
  ["Pickleball Backpack", "Bags", "Regular players carrying more gear", "Recreational", "Mid-range", true],
  ["Tote-Style Pickleball Bag", "Bags", "Simple open storage", "Beginner", "Mid-range", false],
  ["Two-Paddle Court Bag", "Bags", "Couples or shared gear", "Beginner", "Mid-range", false],
  ["Portable Backyard Net", "Nets", "Home practice sessions", "Recreational", "Premium", true],
  ["Driveway Practice Net", "Nets", "Short practice blocks at home", "Beginner", "Mid-range", false],
  ["Half-Court Practice Net", "Nets", "Dink and reset drills", "Recreational", "Mid-range", false],
  ["Comfort Grip Tape Roll", "Grip Tape", "Refreshing a slippery handle", "Beginner", "Budget", true],
  ["Extra Paddle Overgrip Pack", "Grip Tape", "Shared paddles and spares", "Beginner", "Budget", false],
  ["Sweat-Resistant Overgrip Bundle", "Grip Tape", "Warm weather games", "Recreational", "Budget", false],
  ["Court Towel and Bottle Kit", "Court Accessories", "Longer casual sessions", "Beginner", "Budget", true],
  ["Paddle Cover", "Court Accessories", "Protecting a first paddle", "Beginner", "Budget", false],
  ["Ball Holder Clip", "Court Accessories", "Keeping spare balls handy", "Beginner", "Budget", false],
  ["Practice Cone Set", "Court Accessories", "Simple footwork drills", "Recreational", "Budget", false],
  ["Scorekeeping Wristband", "Court Accessories", "Remembering casual scores", "Beginner", "Budget", false],
  ["Court Line Tape", "Court Accessories", "Temporary home court marking", "Recreational", "Budget", false],
  ["Pickleball Gift Bundle", "Gifts", "A useful gift basket", "Brand new", "Mid-range", true],
  ["New Player Gift Kit", "Gifts", "Someone starting this month", "Brand new", "Budget", true],
  ["Fun Court Accessory Gift Set", "Gifts", "Light practical gifts", "Beginner", "Budget", false],
  ["Premium Pickleball Gift Kit", "Gifts", "A larger beginner gift", "Recreational", "Premium", false]
];

const slugify = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const products: Product[] = items.map(([name, category, bestFor, skillLevel, priceTier, featured], index) => {
  const id = `p${String(index + 1).padStart(2, "0")}`;
  const slug = slugify(name);
  return {
    id,
    slug,
    name,
    category,
    shortDescription: descriptions[category],
    longDescription: `${name} is a straightforward ${category.toLowerCase()} pick for newer pickleball players who want useful gear without sorting through overly technical specs. It is positioned for ${bestFor.toLowerCase()} and should be checked against current retailer details before purchase.`,
    bestFor,
    skillLevel,
    priceTier,
    features: baseFeatures[category],
    pros: ["Easy for beginners to understand", "Practical for recreational play", "No unnecessary advanced extras"],
    cons: ["Not a substitute for checking current specs", "May not suit advanced competitive preferences"],
    buyingTips: [
      "Confirm the current contents, size, and return policy before buying.",
      "Use price tier as a guide, not a live price.",
      "Compare the item against how often and where you expect to play."
    ],
    affiliateUrl: "#replace-with-affiliate-link",
    affiliateNetwork: "Amazon Associates",
    image: imageByCategory[category],
    personallyTested: false,
    featured,
    relatedProductIds: []
  };
}).map((product, index, all) => ({
  ...product,
  relatedProductIds: all
    .filter((candidate) => candidate.category === product.category && candidate.id !== product.id)
    .slice(0, 3)
    .map((candidate) => candidate.id)
    .concat(all.filter((candidate) => candidate.featured && candidate.id !== product.id).slice(0, 2).map((candidate) => candidate.id))
    .slice(0, 4)
}));

export const categories = Array.from(new Set(products.map((product) => product.category)));
export const skillLevels = Array.from(new Set(products.map((product) => product.skillLevel)));
export const priceTiers = Array.from(new Set(products.map((product) => product.priceTier)));

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: ProductCategory) {
  return products.filter((product) => product.category === category);
}
