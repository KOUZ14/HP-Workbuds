/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#FF6B6B'; // Fun coral/salmon
const tintColorDark = '#FF6B6B';

export const Colors = {
  light: {
    text: '#2C3E50',
    background: '#F8F9FA', // Soft off-white
    tint: tintColorLight,
    icon: '#7F8C8D',
    tabIconDefault: '#BDC3C7',
    tabIconSelected: tintColorLight,
    border: '#E9ECEF',
    error: '#E74C3C',
    success: '#2ECC71',
    card: '#FFFFFF',
    secondary: '#ECF0F1',
    // Fun casual colors
    primary: '#FF6B6B', // Coral red
    accent: '#4ECDC4', // Turquoise
    yellow: '#FFE66D', // Sunny yellow
    purple: '#A8E6CF', // Mint green
    pink: '#FFB3BA', // Soft pink
    blue: '#87CEEB', // Sky blue
    gradient1: '#FF9A9E', // Gradient colors
    gradient2: '#FECFEF',
    shadow: '#000000',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    border: '#374151',
    error: '#ef4444',
    success: '#10b981',
    card: '#1f2937',
    secondary: '#374151',
    // Fun casual colors (darker variants)
    primary: '#FF6B6B',
    accent: '#4ECDC4',
    yellow: '#FFE66D',
    purple: '#A8E6CF',
    pink: '#FFB3BA',
    blue: '#87CEEB',
    gradient1: '#FF9A9E',
    gradient2: '#FECFEF',
    shadow: '#000000',
  },
};
