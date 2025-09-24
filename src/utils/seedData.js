import { db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';

export const seedProducts = async () => {
  const sampleProducts = [
    {
      name: "Modern Ceramic Vase",
      description: "Handcrafted ceramic vase perfect for modern interiors",
      price: 89.99,
      category: "Vases",
      imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400",
      stock: 15,
      featured: true
    },
    {
      name: "Minimalist Wall Art",
      description: "Abstract painting that adds elegance to any room",
      price: 149.99,
      category: "Wall Decor",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      stock: 8,
      featured: true
    },
    {
      name: "Scandinavian Throw Pillow",
      description: "Soft cotton pillow with geometric pattern",
      price: 39.99,
      category: "Textiles",
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      stock: 25,
      featured: false
    }
  ];

  try {
    for (const product of sampleProducts) {
      await addDoc(collection(db, 'products'), product);
      console.log('Product added:', product.name);
    }
    console.log('Sample data added successfully!');
  } catch (error) {
    console.error('Error adding sample data:', error);
  }
};
