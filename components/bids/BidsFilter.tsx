import { Colors, SPACING } from '@/constants/Colors';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


interface FilterOption {
  label: string;
  value: string;
}

interface BidFiltersProps {
  categories: FilterOption[];
  priceRanges: FilterOption[];
  selectedCategory: string;
  selectedPriceRange: string;
  onSelectCategory: (value: string) => void;
  onSelectPriceRange: (value: string) => void;
}

const BidFilters = ({
  categories,
  priceRanges,
  selectedCategory,
  selectedPriceRange,
  onSelectCategory,
  onSelectPriceRange,
}: BidFiltersProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.filterSection}>
        <Text style={styles.label}>Category</Text>
        <View style={styles.optionsContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.value}
              style={[
                styles.option,
                selectedCategory === category.value && styles.selectedOption,
              ]}
              onPress={() => onSelectCategory(category.value)}
            >
              <Text style={[
                styles.optionText,
                selectedCategory === category.value && styles.selectedOptionText,
              ]}>
                {category.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.filterSection}>
        <Text style={styles.label}>Price Range</Text>
        <View style={styles.optionsContainer}>
          {priceRanges.map((range) => (
            <TouchableOpacity
              key={range.value}
              style={[
                styles.option,
                selectedPriceRange === range.value && styles.selectedOption,
              ]}
              onPress={() => onSelectPriceRange(range.value)}
            >
              <Text style={[
                styles.optionText,
                selectedPriceRange === range.value && styles.selectedOptionText,
              ]}>
                {range.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING.md,
    backgroundColor: 'white',
  },
  filterSection: {
    marginBottom: SPACING.md,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: SPACING.sm,
    color: Colors.light.text,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
  option: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: SPACING.sm,
    backgroundColor: Colors.light.background,
  },
  selectedOption: {
    backgroundColor: Colors.light.primary,
  },
  optionText: {
    color: Colors.light.text,
  },
  selectedOptionText: {
    color: 'white',
  },
});

export default BidFilters;