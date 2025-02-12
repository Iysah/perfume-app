import { Bid } from "@/types";


export const sampleBids: Bid[] = [
  {
    id: '1',
    product: {
      id: 'p1',
      name: 'iPhone 13 Pro',
      image: 'https://via.placeholder.com/300',
      description: 'Latest iPhone model with pro camera system',
    },
    currentBid: 899,
    startingBid: 799,
    endTime: new Date(Date.now() + 86400000), // 24 hours from now
    status: 'active',
    bidCount: 15,
  },
  {
    id: '2',
    product: {
      id: 'p2',
      name: 'MacBook Pro M1',
      image: 'https://via.placeholder.com/300',
      description: 'Powerful laptop with Apple Silicon',
    },
    currentBid: 1299,
    startingBid: 1199,
    endTime: new Date(Date.now() + 172800000), // 48 hours from now
    status: 'active',
    bidCount: 23,
  },
  {
    id: '3',
    product: {
      id: 'p3',
      name: 'Sony WH-1000XM4',
      image: 'https://via.placeholder.com/300',
      description: 'Premium noise-canceling headphones',
    },
    currentBid: 299,
    startingBid: 249,
    endTime: new Date(Date.now() - 86400000), // 24 hours ago
    status: 'won',
    bidCount: 18,
  },
  {
    id: '4',
    product: {
      id: 'p4',
      name: 'iPad Air',
      image: 'https://via.placeholder.com/300',
      description: 'Versatile tablet for work and play',
    },
    currentBid: 549,
    startingBid: 499,
    endTime: new Date(Date.now() - 172800000), // 48 hours ago
    status: 'lost',
    bidCount: 12,
  }
];

export const featuredProducts = [
  {
    id: '1',
    name: 'iPhone 13 Pro',
    description: 'Latest iPhone model',
    retailPrice: 999,
    images: ['https://via.placeholder.com/150'],
    availableStock: 50,
    variations: [],
    adminId: 'admin1',
    createdAt: new Date(),
  },
  {
    id: '2',
    name: 'iPhone 13 Pro',
    description: 'Latest iPhone model',
    retailPrice: 999,
    images: ['https://via.placeholder.com/150'],
    availableStock: 50,
    variations: [],
    adminId: 'admin1',
    createdAt: new Date(),
  },
  {
    id: '3',
    name: 'iPhone 13 Pro',
    description: 'Latest iPhone model',
    retailPrice: 999,
    images: ['https://via.placeholder.com/150'],
    availableStock: 50,
    variations: [],
    adminId: 'admin1',
    createdAt: new Date(),
  },
  {
    id: '4',
    name: 'iPhone 13 Pro',
    description: 'Latest iPhone model',
    retailPrice: 999,
    images: ['https://via.placeholder.com/150'],
    availableStock: 50,
    variations: [],
    adminId: 'admin1',
    createdAt: new Date(),
  },
  // Add more products...
];