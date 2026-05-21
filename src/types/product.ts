export type ProductCategory =
  | "Starter Sets"
  | "Beginner Paddles"
  | "Balls"
  | "Bags"
  | "Nets"
  | "Grip Tape"
  | "Court Accessories"
  | "Gifts";

export type PriceTier = "Budget" | "Mid-range" | "Premium";

export type SkillLevel = "Brand new" | "Beginner" | "Recreational";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  longDescription: string;
  bestFor: string;
  skillLevel: SkillLevel;
  priceTier: PriceTier;
  features: string[];
  pros: string[];
  cons: string[];
  buyingTips: string[];
  affiliateUrl: string;
  affiliateNetwork: string;
  image: string;
  personallyTested: boolean;
  featured: boolean;
  relatedProductIds: string[];
  seoIndexable?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  lastReviewedAt?: string;
};
