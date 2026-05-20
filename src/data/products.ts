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

const imageBySlug: Record<string, string> = {
  "family-pickleball-starter-set": "/images/products/photos/family-starter-set.jpg",
  "backyard-pickleball-starter-kit": "/images/products/photos/backyard-starter-kit.jpg"
};

const affiliateUrlBySlug: Record<string, string> = {
  "family-pickleball-starter-set": "https://www.amazon.com/dp/B09C88QVHL?tag=dinkgearguide-20",
  "backyard-pickleball-starter-kit": "https://amzn.to/3Pxq4oU"
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

const featuredProductCopy: Record<string, Partial<Pick<Product, "shortDescription" | "longDescription" | "features" | "pros" | "cons" | "buyingTips">>> = {
  "two-paddle-beginner-starter-set": {
    shortDescription: "A practical starter option for two brand-new players who need paddles and balls without buying each item separately.",
    longDescription: "A two-paddle beginner starter set makes the most sense when two people want to try pickleball together and do not already own court gear. The value is convenience: one purchase can cover two paddles, a few balls, and sometimes a basic storage case. New players should treat this kind of set as a simple entry point, not as a final paddle decision. Check the current set contents carefully, especially the number of balls, whether they are indoor or outdoor balls, and whether the paddle grips sound comfortable for both players.",
    features: ["Two-player setup", "Basic ball supply", "Easy shared storage"],
    pros: ["Simple way for two people to start", "Usually easier than buying every item separately", "Good fit for casual first games and guest gear"],
    cons: ["Starter paddles may be outgrown by regular players", "Included balls may not match every court type", "Grip size and paddle weight should still be checked"],
    buyingTips: [
      "Confirm whether the included balls are indoor, outdoor, or mixed before buying.",
      "Look for a return policy in case the paddle weight or grip feel is not comfortable.",
      "If one player already plays weekly, consider one better personal paddle instead of a shared starter set."
    ]
  },
  "family-pickleball-starter-set": {
    shortDescription: "A larger beginner set for families or small groups who want enough gear for rotating casual games.",
    longDescription: "A family pickleball starter set is useful when the goal is getting several people on court at once. This type of set is a good fit for households, visiting relatives, driveway games, and casual park sessions where shared gear matters more than fine-tuned paddle preferences. The linked option is positioned as a multi-paddle bundle with balls, a bag, and grip accessories, but visitors should confirm the selected variation and current included items before buying. Avoid judging these sets only by item count; a smaller set with usable paddles and the right balls can be better than a crowded bundle full of extras.",
    features: ["Multiple paddle options", "Indoor and outdoor ball support", "Bag and overgrip accessories"],
    pros: ["Useful for households and guests", "Keeps beginner gear in one place", "Good for casual games where people rotate in"],
    cons: ["More items can hide lower-quality basics", "Not every paddle may fit every player", "Can be more gear than a solo beginner needs"],
    buyingTips: [
      "Confirm whether you are selecting the two-paddle or four-paddle version before buying.",
      "Count how many people will realistically play at the same time before choosing a larger bundle.",
      "Check whether the set includes outdoor balls if most games will be at parks.",
      "Prioritize usable paddles, balls, and storage over novelty accessories."
    ]
  },
  "backyard-pickleball-starter-kit": {
    shortDescription: "A portable net bundle for turning a driveway, gym space, or flat practice area into a casual pickleball setup.",
    longDescription: "A backyard pickleball starter kit is the right kind of bundle when you need more than paddles and balls. The linked option is listed by the retailer as a four-player set with a regulation-size portable net, outdoor balls, paddles, court markers, and carry bags. That makes it more useful for driveways, temporary courts, gyms, and family play than a paddle-only starter set. New players should still check the current product page before buying, especially the net dimensions, setup method, included ball count, bag contents, and any paddle approval details.",
    features: ["Portable net system", "Four-player gear bundle", "Court markers and carry bags"],
    pros: ["Includes the main pieces needed for temporary play", "Better fit for backyard setup than paddle-only bundles", "Carry bags help keep the net and gear organized"],
    cons: ["Takes more setup space than a basic paddle set", "Net quality and stability should be checked against where you plan to play", "Tournament approval claims should be verified before sanctioned play"],
    buyingTips: [
      "Confirm the net is regulation size and fits the space where you plan to play.",
      "Check the current listing for the exact number of balls, bags, markers, and paddles included.",
      "If sanctioned tournaments matter to you, verify paddle approval with the relevant governing body before buying.",
      "For driveway use, make sure you have a flat surface and enough room around the net for safe recreational play."
    ]
  },
  "lightweight-control-paddle": {
    shortDescription: "A first personal paddle for beginners who want easy handling and control before extra power.",
    longDescription: "A lightweight control paddle is a sensible first personal paddle for players who are moving beyond shared starter gear. New players often benefit from a paddle that feels easy to move during serves, returns, volleys, and dink exchanges. The point is not to maximize power right away; it is to make consistent contact and learn touch shots without fighting the paddle. Before buying, check the listed weight range, grip circumference, return policy, and any tournament approval details if sanctioned play may be in your future.",
    features: ["Easy maneuvering", "Control-focused feel", "Comfortable first-paddle profile"],
    pros: ["Good fit for learning placement and soft shots", "Less intimidating than power-focused paddles", "Useful upgrade from many shared starter paddles"],
    cons: ["May not satisfy players who already prefer heavy power paddles", "Still requires checking grip size", "Tournament approval should be verified separately"],
    buyingTips: [
      "Choose comfort and control over maximum power for a first personal paddle.",
      "Verify the paddle weight and grip size against your preferences before buying.",
      "If you plan to play sanctioned tournaments, confirm approval with the relevant governing body."
    ]
  },
  "widebody-beginner-paddle": {
    shortDescription: "A forgiving paddle shape for beginners who want a larger contact area and fewer mishits.",
    longDescription: "A widebody beginner paddle is aimed at players who want forgiveness while learning timing and contact. The wider face can feel more approachable for serves, returns, blocks, and kitchen-line exchanges because it gives newer players a little more room to make clean contact. This style is especially useful when consistency matters more than spin, reach, or advanced power. Check the paddle dimensions, weight, edge guard, and grip information rather than assuming every widebody paddle will feel the same.",
    features: ["Forgiving face shape", "Beginner-friendly contact area", "Simple control profile"],
    pros: ["Helpful for players still building consistent contact", "Good fit for recreational games and clinics", "Often easier to understand than specialized paddle shapes"],
    cons: ["May offer less reach than elongated paddles", "Can still feel awkward if the grip is wrong", "Advanced players may want more specialized performance"],
    buyingTips: [
      "Look for a comfortable weight range before focusing on surface technology.",
      "Choose this style if clean contact is a bigger priority than extra reach.",
      "Verify tournament approval separately if you plan to enter sanctioned events."
    ]
  },
  "balanced-all-around-paddle": {
    shortDescription: "A middle-ground paddle option for beginners who want one paddle for casual games, lessons, and weekly play.",
    longDescription: "A balanced all-around paddle is the safe middle lane for newer players who are not sure what style they prefer yet. It should feel stable enough for returns and blocks while still being manageable for kitchen play and quick exchanges. This type of paddle is best for players who expect to play more than once or twice and want one personal paddle that can cover most beginner situations. Before buying, compare weight, grip size, durability notes, return policy, and approval status instead of relying on broad marketing claims.",
    features: ["Versatile first-paddle setup", "Balanced handling", "Beginner-to-recreational fit"],
    pros: ["Good choice when preferences are still developing", "Works for casual games, lessons, and practice", "Less specialized than power-only or control-only options"],
    cons: ["May not excel at one specific advanced style", "Can cost more than a basic shared paddle", "Specs still need to be checked against current retailer details"],
    buyingTips: [
      "Pick this style if you want one personal paddle before you know your exact preferences.",
      "Compare warranty and return terms because paddle feel is personal.",
      "Verify tournament approval if sanctioned play is part of your plan."
    ]
  },
  "outdoor-pickleball-ball-pack": {
    shortDescription: "A useful ball pack for park courts, outdoor rec play, and beginners who need reliable spares.",
    longDescription: "An outdoor pickleball ball pack is one of the most practical purchases for new players who mostly play at parks, school courts, driveways, or dedicated outdoor courts. Outdoor balls are usually built to handle rougher surfaces and wind better than indoor balls, so they can feel firmer and bounce differently. Beginners should keep extra balls on hand because balls crack, roll away, and disappear during group play. Check that the pack is intended for outdoor use, that the color is easy to see on your local courts, and that the quantity fits how often your group plays.",
    features: ["Outdoor court design", "High-visibility options", "Spare balls for group play"],
    pros: ["Practical for parks and outdoor courts", "Easy beginner add-on purchase", "Helpful when balls crack or get lost"],
    cons: ["Can feel firmer than indoor balls", "Not ideal for all gym floors", "Color visibility depends on court surface and lighting"],
    buyingTips: [
      "Buy outdoor balls first if most of your games are at parks or dedicated outdoor courts.",
      "Choose a visible color that stands out against your local court surface.",
      "Keep a few spares in your bag because outdoor balls wear out and crack over time."
    ]
  }
};

export const products: Product[] = items.map(([name, category, bestFor, skillLevel, priceTier, featured], index) => {
  const id = `p${String(index + 1).padStart(2, "0")}`;
  const slug = slugify(name);
  const overrides = featuredProductCopy[slug] ?? {};
  return {
    id,
    slug,
    name,
    category,
    shortDescription: overrides.shortDescription ?? descriptions[category],
    longDescription: overrides.longDescription ?? `${name} is a straightforward ${category.toLowerCase()} pick for newer pickleball players who want useful gear without sorting through overly technical specs. It is positioned for ${bestFor.toLowerCase()} and should be checked against current retailer details before purchase.`,
    bestFor,
    skillLevel,
    priceTier,
    features: overrides.features ?? baseFeatures[category],
    pros: overrides.pros ?? ["Easy for beginners to understand", "Practical for recreational play", "No unnecessary advanced extras"],
    cons: overrides.cons ?? ["Not a substitute for checking current specs", "May not suit advanced competitive preferences"],
    buyingTips: overrides.buyingTips ?? [
      "Confirm the current contents, size, and return policy before buying.",
      "Use price tier as a guide, not a live price.",
      "Compare the item against how often and where you expect to play."
    ],
    affiliateUrl: affiliateUrlBySlug[slug] ?? "#replace-with-affiliate-link",
    affiliateNetwork: "Amazon Associates",
    image: imageBySlug[slug] ?? imageByCategory[category],
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
