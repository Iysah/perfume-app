export interface Product {
    id: string;
    name: string;
    description: string;
    retailPrice: number;
    images: string[];
    availableStock: number;
    variations: ProductVariation[];
    adminId: string;
    createdAt: Date;
  }
  
  export interface ProductVariation {
    id: string;
    name: string;
    price: number;
    stock: number;
  }
  
  export interface Retailer {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    profileImage?: string;
    totalSales: number;
    rating: number;
  }
  
  export interface Order {
    id: string;
    productId: string;
    retailerId: string;
    consumerId: string;
    quantity: number;
    totalPrice: number;
    status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
    createdAt: Date;
  }

  export interface Bid {
    id: string;
    product: {
      id: string;
      name: string;
      image: string;
      description: string;
    };
    currentBid: number;
    startingBid: number;
    endTime: Date;
    status: 'active' | 'won' | 'lost' | 'expired';
    bidCount: number;
  }