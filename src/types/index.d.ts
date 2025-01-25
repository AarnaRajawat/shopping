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
  dimensions?: {                   // Optional dimensions (length, width, height) of the product
    length: number;
    width: number;
    height: number;
  };
  additionalInfo?: string;         // Any additional information about the product
}

export interface CartItem extends Product {
  quantity: number;                // Quantity of the product added to the cart
  totalPrice: number;              // Total price for this product based on quantity (calculated)
}
