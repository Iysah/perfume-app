/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#6A0DAD';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    primary: '#8E6CEF',
    secondary: '#D8BFD8',
    background: '#FFFFFF',
    text: '#9A9A9',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  error: {
    warningColor: '#F790091A',
    warningBorder: '#F79009',
    successColor: '#01AA1B',
    successBorder: '#01DD231A',
    errorColor: '#D92D201A',
    errorBorder: '#F04438',
    helpColor: '#007AFF1A',
    helpBorder: '#007AFF',
  }
};


export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const FONT_SIZE = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
};

export const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};