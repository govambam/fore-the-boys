/**
 * Emoji utility for consistent Unicode handling
 * Helps prevent emoji corruption issues in production
 */

// Common emoji constants to prevent corruption
export const EMOJI = {
  CHECKMARK: '✓',
  TARGET: '🎯',
  GOLF: '🏌',
  FLAG: '⛳',
  TROPHY: '🏆',
  STAR: '⭐',
  FIRE: '🔥',
  DIAMOND_BLUE: '🔷',
  DIAMOND_ORANGE: '🔸',
} as const;

/**
 * Ensures emoji characters are properly encoded
 * @param text - Text containing emoji
 * @returns Properly encoded text
 */
export function safeEmoji(text: string): string {
  // Normalize Unicode to ensure consistent representation
  return text.normalize('NFC');
}

/**
 * Creates emoji-safe inline styles for elements containing emoji
 */
export const emojiStyles = {
  fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", emoji',
  fontVariantEmoji: 'emoji' as const,
};

/**
 * Common emoji patterns for status indicators
 */
export const getStatusEmoji = (type: 'success' | 'target' | 'golf' | 'flag' | 'trophy') => {
  const emojiMap = {
    success: EMOJI.CHECKMARK,
    target: EMOJI.TARGET, 
    golf: EMOJI.GOLF,
    flag: EMOJI.FLAG,
    trophy: EMOJI.TROPHY,
  };
  
  return safeEmoji(emojiMap[type]);
};
