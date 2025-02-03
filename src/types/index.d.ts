// Define the Category interface for the structure you provided
export interface Category {
  slug: string;    // Unique identifier for the category (e.g., 'beauty', 'fragrances')
  name: string;    // Display name for the category (e.g., 'Beauty', 'Fragrances')
  url: string;     // URL to fetch products for this category (e.g., API URL)
}

// Define the Product interface (keeping your previous definition)
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  image?: string;
  weight?: number;
  dimensions?: Dimensions;
  additionalInfo?: string;
  reviews: Review[];
  meta: Meta;
}

// Define the Review, Dimensions, and Meta interfaces (as before)
export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

// Define the CartItem interface (as before)
export interface CartItem extends Product {
  quantity: number;
  totalPrice: number;
}
