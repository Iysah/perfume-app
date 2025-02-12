import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';
import { Product } from '../types';
import { SPACING, Colors } from '@/constants/Colors';
import { GLOBALSTYLES } from '@/styles/global-styles';

interface ProductSectionProps {
  title: string;
  products: Product[];
  onProductPress: (product: Product) => void;
}

const ProductSection = ({ title, products, onProductPress }: ProductSectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={GLOBALSTYLES.title}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onPress={() => onProductPress(product)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: SPACING.md,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginLeft: SPACING.md,
    marginBottom: SPACING.sm,
    color: Colors.light.text,
  },
});

export default ProductSection;