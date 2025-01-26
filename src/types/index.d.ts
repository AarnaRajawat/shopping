// Define the types for product reviews
export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

// Define the types for product dimensions
export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

// Define the types for metadata
export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

// Define the Product interface, including reviews, metadata, and dimensions
export interface Product {
  id: number;                      // Unique identifier for the product
  title: string;                   // Name of the product
  description: string;             // Detailed description of the product
  price: number;                   // Price of the product
  discountPercentage: number;      // Discount percentage applied to the product
  rating: number;                  // Rating of the product (1 to 5 scale)
  stock: number;                   // Available stock for the product
  brand: string;                   // Brand of the product
  category: string;                // Category the product belongs to
  thumbnail: string;               // Thumbnail image URL for the product
  image?: string;                  // Full image URL for the product (optional)
  weight?: number;                 // Weight of the product (optional)
  dimensions?: Dimensions;         // Optional dimensions (length, width, height) of the product
  additionalInfo?: string;         // Any additional information about the product
  reviews: Review[];               // List of reviews for the product
  meta: Meta;                      // Metadata for the product
}

export interface CartItem extends Product {
  quantity: number;                // Quantity of the product added to the cart
  totalPrice: number;              // Total price for this product based on quantity (calculated)
}
