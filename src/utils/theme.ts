import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ThemeType } from '@/types';

/**
 * Safely merges Tailwind CSS classes without style conflicts.
 * Essential for building reusable, themeable components.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * The master theme dictionaries.
 * Every component will pull its colors and fonts from these maps.
 */
export const themeConfigs = {
  royal: {
    // Deep maroons, golds, moody aesthetic
    background: 'bg-stone-900',
    surface: 'bg-stone-800',
    textPrimary: 'text-amber-500', // Gold
    textSecondary: 'text-stone-300',
    accentBackground: 'bg-rose-900', // Maroon
    accentText: 'text-rose-900',
    border: 'border-amber-500/30',
    fontHeading: 'font-serif', // e.g., Playfair Display
    fontBody: 'font-sans',
  },
  modern: {
    // Minimalist, high contrast, clean lines
    background: 'bg-zinc-50',
    surface: 'bg-white',
    textPrimary: 'text-zinc-900', // Charcoal
    textSecondary: 'text-zinc-500',
    accentBackground: 'bg-zinc-900',
    accentText: 'text-zinc-900',
    border: 'border-zinc-200',
    fontHeading: 'font-sans', // e.g., Inter
    fontBody: 'font-sans',
  },
  romantic: {
    // Soft pastels, airy, elegant
    background: 'bg-rose-50',
    surface: 'bg-white',
    textPrimary: 'text-rose-900',
    textSecondary: 'text-rose-700/80',
    accentBackground: 'bg-pink-200',
    accentText: 'text-pink-500',
    border: 'border-pink-200',
    fontHeading: 'font-serif', // Elegant serif
    fontBody: 'font-sans',
  }
};

/**
 * Helper function to grab the active theme classes
 */
export function getTheme(theme: ThemeType) {
  return themeConfigs[theme];
}