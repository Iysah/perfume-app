import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Colors, SPACING } from '@/constants/Colors';
import { SearchIcon } from '@/assets/icons/icon';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar = ({ value, onChangeText }: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <SearchIcon />
      <TextInput
        style={styles.input}
        placeholder="Search products, categories..."
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={Colors.light.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 100,
    marginVertical: SPACING.md,
  },
  input: {
    flex: 1,
    marginLeft: SPACING.sm,
    fontSize: 16,
  },
});

export default SearchBar;