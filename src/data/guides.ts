export type GuideSection = {
  title: string;
  paragraphs?: string[];
  checklist?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  lastReviewedAt: string;
  intro: string;
  sections: GuideSection[];
  relatedGuideSlugs: string[];
  categoryLinks: Array<{ label: string; href: string }>;
};

const reviewed = "2026-05-21";

export const guides: Guide[] = [
  {
    slug: "what-to-buy-before-your-first-pickleball-game",
    title: "What to Buy Before Your First Pickleball Game",
    description: "A simple beginner checklist for your first pickleball game, including paddles, balls, bags, shoes, water, and gear you can skip.",
    category: "First game",
    readingTime: "6 min read",
    lastReviewedAt: reviewed,
    intro: "Before your first pickleball game, you need a paddle, the right ball for the court, comfortable court-friendly shoes, water, and a simple way to carry the basics. You do not need premium accessories or a tournament-ready setup to start. The goal is to arrive prepared, play comfortably, and learn what gear actually matters after real court time.",
    sections: [
      {
        title: "First-game packing list",
        checklist: ["One paddle per regular player", "Indoor or outdoor balls that match the court", "Court-friendly shoes", "Water bottle", "Small towel", "Keys, phone, and wallet storage", "Optional compact bag"]
      },
      {
        title: "What to buy now vs later",
        table: {
          headers: ["Item", "Buy before game one?", "Why"],
          rows: [
            ["Paddle", "Yes", "You need one to play unless borrowing from a friend or facility."],
            ["Correct balls", "Yes", "Indoor and outdoor balls behave differently."],
            ["Bag", "Optional", "Useful, but a tote works for first games."],
            ["Paddle cover", "Later", "Helpful after you own a paddle you want to protect."],
            ["Training aids", "Skip", "Better after you know what you want to practice."]
          ]
        }
      },
      {
        title: "Keep the first purchase simple",
        paragraphs: ["A first game is not the time to solve every future gear preference. Choose gear that gets you on court without locking you into expensive upgrades. If you expect to play weekly, a comfortable personal paddle matters more than a bundle of accessories. If you are trying pickleball with a group, a starter set may be easier."]
      }
    ],
    relatedGuideSlugs: ["pickleball-starter-set-vs-single-paddle", "indoor-vs-outdoor-pickleball-balls", "what-pickleball-gear-can-beginners-skip"],
    categoryLinks: [{ label: "Gear Checklist", href: "/gear-checklist/" }, { label: "Starter Sets", href: "/starter-sets/" }, { label: "Balls", href: "/balls/" }]
  },
  {
    slug: "pickleball-starter-set-vs-single-paddle",
    title: "Pickleball Starter Set vs. Single Paddle: Which Should You Buy?",
    description: "Learn whether a pickleball starter set or one better beginner paddle makes more sense for your first purchase.",
    category: "Starter sets",
    readingTime: "7 min read",
    lastReviewedAt: reviewed,
    intro: "A pickleball starter set is usually best for couples, families, guests, and casual backyard play. One better beginner paddle is usually better for someone who expects to play weekly and wants a personal paddle that feels comfortable. The right choice depends on how many people need gear and how often you expect to play.",
    sections: [
      {
        title: "Quick comparison",
        table: {
          headers: ["Choice", "Best for", "Watch out for"],
          rows: [
            ["Starter set", "Two or more people starting together", "Big bundles can hide weak paddles or the wrong balls."],
            ["Single paddle", "A weekly beginner buying personal gear", "You still need balls and a way to carry gear."],
            ["Borrow first", "Trying pickleball once", "Borrowed paddles may not match what you should eventually buy."]
          ]
        }
      },
      {
        title: "When a starter set makes sense",
        checklist: ["You need gear for more than one player", "You are hosting guests", "You are setting up casual driveway games", "You are not sure who will keep playing"]
      },
      {
        title: "When one better paddle makes sense",
        paragraphs: ["Buy one better paddle if you already know you will play often. A personal paddle lets you focus on grip feel, weight, and control instead of splitting the budget across several pieces of shared gear. If sanctioned tournaments are possible, verify paddle approval with the relevant governing body before buying."]
      }
    ],
    relatedGuideSlugs: ["what-to-buy-before-your-first-pickleball-game", "how-to-choose-your-first-pickleball-paddle", "backyard-pickleball-setup-for-beginners"],
    categoryLinks: [{ label: "Starter Sets", href: "/starter-sets/" }, { label: "Beginner Paddles", href: "/beginner-paddles/" }, { label: "All Gear", href: "/gear/" }]
  },
  {
    slug: "indoor-vs-outdoor-pickleball-balls",
    title: "Indoor vs. Outdoor Pickleball Balls: Beginner Buying Guide",
    description: "Understand the difference between indoor and outdoor pickleball balls and choose the right ball type for your first games.",
    category: "Balls",
    readingTime: "6 min read",
    lastReviewedAt: reviewed,
    intro: "Beginners should buy pickleball balls based on where they play most often. Outdoor balls are usually firmer with smaller holes for wind and rougher courts. Indoor balls usually feel softer and are built for gym-style surfaces. The right ball type makes games feel more consistent and avoids confusing bounce differences.",
    sections: [
      {
        title: "Indoor vs outdoor ball differences",
        table: {
          headers: ["Ball type", "Typical feel", "Best for"],
          rows: [
            ["Outdoor", "Firmer, faster, more wind resistant", "Parks, dedicated outdoor courts, driveways"],
            ["Indoor", "Softer, easier to control on smooth floors", "Gyms and indoor recreation centers"],
            ["Mixed pack", "Convenient for uncertain schedules", "Players who switch court types often"]
          ]
        }
      },
      {
        title: "Which should beginners buy first?",
        paragraphs: ["Buy the ball that matches your main court. A large pack of the wrong ball is less useful than a smaller pack that fits where you actually play. If your games are mostly outside, start with outdoor balls. If your local open play is in a gym, start with indoor balls."]
      },
      {
        title: "What to check before buying",
        checklist: ["Indoor or outdoor label", "Color visibility on your court", "Pack quantity", "Storage bag or container", "Return policy if the wrong ball type arrives"]
      }
    ],
    relatedGuideSlugs: ["what-to-buy-before-your-first-pickleball-game", "what-to-keep-in-your-pickleball-bag", "backyard-pickleball-setup-for-beginners"],
    categoryLinks: [{ label: "Balls", href: "/balls/" }, { label: "Gear Checklist", href: "/gear-checklist/" }, { label: "All Gear", href: "/gear/" }]
  },
  {
    slug: "what-pickleball-gear-can-beginners-skip",
    title: "What Pickleball Gear Can Beginners Skip?",
    description: "Save money with this beginner-friendly guide to pickleball gear you do not need right away.",
    category: "Buying advice",
    readingTime: "6 min read",
    lastReviewedAt: reviewed,
    intro: "Beginners can skip more pickleball gear than they think. You need a playable paddle, the right balls, court access, shoes, water, and maybe a simple bag. Most premium accessories, training gadgets, duplicate bags, and tournament-focused upgrades can wait until you know how often you play and what actually bothers you.",
    sections: [
      {
        title: "Skip-first list",
        table: {
          headers: ["Gear", "Why to wait", "When to reconsider"],
          rows: [
            ["Premium paddle", "You may not know your preferred weight or shape yet.", "After several weeks of regular play."],
            ["Training gadgets", "Practice needs become clearer after games.", "When you have a specific drill goal."],
            ["Multiple bags", "One simple carry option is enough.", "When you play often and carry more gear."],
            ["Duplicate starter sets", "Extra paddles can pile up unused.", "When hosting groups regularly."]
          ]
        }
      },
      {
        title: "Spend where it matters",
        paragraphs: ["Put the first budget toward the items that affect every game: a comfortable paddle, the right ball type, and court-friendly shoes. A basic towel, water bottle, and simple bag can round out the kit without turning the first purchase into a large gear haul."]
      },
      {
        title: "Tournament-focused gear can wait",
        paragraphs: ["If you plan to play sanctioned tournaments, verify that your paddle is approved by the relevant governing body before buying. If tournaments are not part of your near-term plan, comfort and consistency matter more than advanced claims."]
      }
    ],
    relatedGuideSlugs: ["what-to-buy-before-your-first-pickleball-game", "pickleball-starter-set-vs-single-paddle", "how-to-choose-your-first-pickleball-paddle"],
    categoryLinks: [{ label: "Gear Checklist", href: "/gear-checklist/" }, { label: "Beginner Paddles", href: "/beginner-paddles/" }, { label: "Bags", href: "/bags/" }]
  },
  {
    slug: "what-to-keep-in-your-pickleball-bag",
    title: "What to Keep in Your Pickleball Bag: Beginner Checklist",
    description: "Use this simple pickleball bag checklist for paddles, balls, water, grip tape, towel, keys, and other court essentials.",
    category: "Bags",
    readingTime: "5 min read",
    lastReviewedAt: reviewed,
    intro: "A beginner pickleball bag should carry the gear you actually use: paddle, balls, water, towel, keys, phone, and a few small spares. You do not need a large tournament bag for casual games. The right bag is the smallest option that keeps your court essentials together and easy to find.",
    sections: [
      {
        title: "Simple bag checklist",
        checklist: ["Paddle", "Two to four balls", "Water bottle", "Small towel", "Extra overgrip", "Paddle cover if you use one", "Keys and phone", "Light layer for outdoor play"]
      },
      {
        title: "Bag type comparison",
        table: {
          headers: ["Bag type", "Best for", "Tradeoff"],
          rows: [
            ["Sling", "One paddle and light carry", "Limited storage"],
            ["Backpack", "Weekly players carrying more items", "Can be bigger than beginners need"],
            ["Tote", "Casual trips and quick access", "Less structure for paddle protection"]
          ]
        }
      },
      {
        title: "Avoid overpacking",
        paragraphs: ["If your bag is annoying to carry, you will stop using it. Start with the core items and add only what you repeatedly wish you had during games. Extra balls and water usually matter more than specialized accessories."]
      }
    ],
    relatedGuideSlugs: ["what-to-buy-before-your-first-pickleball-game", "what-pickleball-gear-can-beginners-skip", "pickleball-gifts-for-beginners"],
    categoryLinks: [{ label: "Bags", href: "/bags/" }, { label: "Balls", href: "/balls/" }, { label: "Court Accessories", href: "/gear/" }]
  },
  {
    slug: "how-to-choose-your-first-pickleball-paddle",
    title: "How to Choose Your First Pickleball Paddle",
    description: "A beginner-friendly guide to choosing your first pickleball paddle based on weight, grip size, control, comfort, and price tier.",
    category: "Paddles",
    readingTime: "8 min read",
    lastReviewedAt: reviewed,
    intro: "Your first pickleball paddle should help you make consistent contact and feel comfortable through a full game. Beginners should prioritize manageable weight, comfortable grip size, control, and a reasonable price tier before chasing advanced spin or power claims. If tournaments are possible, verify approval before buying.",
    sections: [
      {
        title: "First paddle decision matrix",
        table: {
          headers: ["Factor", "Beginner-friendly target", "Why it matters"],
          rows: [
            ["Weight", "Easy to swing repeatedly", "Helps with volleys and quick exchanges."],
            ["Grip size", "Comfortable in hand", "Awkward grips make control harder."],
            ["Shape", "Forgiving or balanced", "Gives newer players more margin for contact."],
            ["Price tier", "Budget to mid-range", "Preferences change after real play."]
          ]
        }
      },
      {
        title: "Control before power",
        paragraphs: ["Most beginners gain more from keeping the ball in play than from hitting harder. A control-friendly paddle helps with serves, returns, dinks, and resets while you learn timing and court position."]
      },
      {
        title: "Tournament note",
        paragraphs: ["If you plan to play in sanctioned tournaments, verify that your paddle is approved by the relevant governing body before buying. Do not rely only on product page wording if approval matters to you."]
      }
    ],
    relatedGuideSlugs: ["pickleball-starter-set-vs-single-paddle", "what-pickleball-gear-can-beginners-skip", "what-to-buy-before-your-first-pickleball-game"],
    categoryLinks: [{ label: "Beginner Paddles", href: "/beginner-paddles/" }, { label: "Starter Sets", href: "/starter-sets/" }, { label: "Gear Checklist", href: "/gear-checklist/" }]
  },
  {
    slug: "pickleball-gifts-for-beginners",
    title: "Pickleball Gifts for Beginners: Practical Ideas They’ll Use",
    description: "Find practical pickleball gift ideas for new players, including starter gear, balls, bags, paddle accessories, and court essentials.",
    category: "Gifts",
    readingTime: "6 min read",
    lastReviewedAt: reviewed,
    intro: "The best pickleball gifts for beginners are practical and easy to use: balls, bags, overgrips, towels, paddle covers, and simple starter gear. Avoid gifts that require knowing a player’s exact paddle preferences unless they asked for a specific item. Useful court basics are safer than flashy accessories.",
    sections: [
      {
        title: "Gift idea matrix",
        table: {
          headers: ["Recipient", "Good gift", "Avoid"],
          rows: [
            ["Brand-new player", "Starter set or ball pack", "Advanced training tools"],
            ["Weekly beginner", "Bag, overgrips, towel", "Random premium paddle"],
            ["Family group", "Shared starter set", "Single specialized paddle"],
            ["Backyard player", "Net accessories and outdoor balls", "Indoor-only balls"]
          ]
        }
      },
      {
        title: "Safe practical gifts",
        checklist: ["Outdoor or indoor balls", "Compact sling bag", "Overgrip pack", "Paddle cover", "Court towel", "Simple accessory bundle"]
      },
      {
        title: "How to choose",
        paragraphs: ["Match the gift to how the person plays. Someone trying pickleball for the first time may appreciate a basic kit. Someone already attending open play may get more use from extra balls, a better bag, or fresh grip tape."]
      }
    ],
    relatedGuideSlugs: ["what-to-keep-in-your-pickleball-bag", "pickleball-starter-set-vs-single-paddle", "backyard-pickleball-setup-for-beginners"],
    categoryLinks: [{ label: "Gifts", href: "/gifts/" }, { label: "Bags", href: "/bags/" }, { label: "Starter Sets", href: "/starter-sets/" }]
  },
  {
    slug: "backyard-pickleball-setup-for-beginners",
    title: "Backyard Pickleball Setup for Beginners",
    description: "Learn what gear you need for a simple backyard pickleball setup, including nets, balls, paddles, and court markers.",
    category: "Backyard setup",
    readingTime: "7 min read",
    lastReviewedAt: reviewed,
    intro: "A simple backyard pickleball setup needs a flat safe play area, portable net, outdoor balls, paddles, water, and clear temporary boundaries. You do not need a permanent court to practice casually, but you should keep the setup realistic for your space and avoid buying more gear than you can actually use.",
    sections: [
      {
        title: "Backyard setup checklist",
        checklist: ["Flat play surface", "Portable net", "Outdoor balls", "Paddles for regular players", "Court markers or temporary line tape", "Storage bag", "Water and towel"]
      },
      {
        title: "Portable net vs paddle-only kit",
        table: {
          headers: ["Setup", "Best for", "Tradeoff"],
          rows: [
            ["Portable net kit", "Driveways and temporary courts", "Requires more space and setup time"],
            ["Paddle-only starter set", "Playing at existing courts", "Does not create a home court"],
            ["Practice markers", "Footwork and dink drills", "Not a full game setup"]
          ]
        }
      },
      {
        title: "Buy for the space you have",
        paragraphs: ["Measure your available space before buying a net or markers. A compact practice setup can still be useful for short sessions, but a full game needs enough room around the net to move safely and avoid obstacles."]
      }
    ],
    relatedGuideSlugs: ["what-to-buy-before-your-first-pickleball-game", "indoor-vs-outdoor-pickleball-balls", "pickleball-starter-set-vs-single-paddle"],
    categoryLinks: [{ label: "Starter Sets", href: "/starter-sets/" }, { label: "Balls", href: "/balls/" }, { label: "All Gear", href: "/gear/" }]
  }
];

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
