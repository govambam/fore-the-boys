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
 * Wraps emoji in a span with proper font handling
 * @param emoji - The emoji character
 * @param label - Accessibility label
 * @returns JSX element with proper emoji handling
 */
export function EmojiSpan({ emoji, label }: { emoji: string; label?: string }) {
  return (
    <span 
      role="img" 
      aria-label={label}
      style={{ 
        fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", emoji',
        fontVariantEmoji: 'emoji' as any
      }}
    >
      {safeEmoji(emoji)}
    </span>
  );
}

/**
 * Common status indicators with consistent emoji
 */
export const StatusIndicators = {
  Success: () => <EmojiSpan emoji={EMOJI.CHECKMARK} label="Success" />,
  Target: () => <EmojiSpan emoji={EMOJI.TARGET} label="Target" />,
  Golf: () => <EmojiSpan emoji={EMOJI.GOLF} label="Golf" />,
  Flag: () => <EmojiSpan emoji={EMOJI.FLAG} label="Golf flag" />,
  Trophy: () => <EmojiSpan emoji={EMOJI.TROPHY} label="Trophy" />,
} as const;