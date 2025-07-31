# Real-time Updates - Leaderboard

## Overview
The leaderboard now supports real-time updates from Supabase. When data changes in the `scores` or `contests` tables, the UI updates automatically without requiring a page reload.

## Implementation Details

### Real-time Subscriptions
Two separate channels are established for monitoring database changes:

1. **Scores Channel**: `scores-updates`
   - Monitors all changes (INSERT, UPDATE, DELETE) to the `scores` table
   - Triggers `refreshScores()` when changes are detected

2. **Contests Channel**: `contests-updates`
   - Monitors all changes (INSERT, UPDATE, DELETE) to the `contests` table
   - Triggers `refreshContests()` when changes are detected

### Code Structure

#### Subscription Setup
```typescript
// Subscribe to scores table changes
const scoresChannel = supabase
  .channel('scores-updates')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'scores' }, (payload) => {
    console.log('📊 Scores table change detected:', payload);
    refreshScores();
  })
  .subscribe();

// Subscribe to contests table changes  
const contestsChannel = supabase
  .channel('contests-updates')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'contests' }, (payload) => {
    console.log('🏆 Contests table change detected:', payload);
    refreshContests();
  })
  .subscribe();
```

#### Data Refresh Functions
- `refreshScores()`: Fetches latest scores data and updates the UI state
- `refreshContests()`: Fetches latest contests data and updates the UI state

#### Cleanup
Subscriptions are properly cleaned up when the component unmounts:
```typescript
return () => {
  supabase.removeChannel(scoresChannel);
  supabase.removeChannel(contestsChannel);
};
```

## Features

### Automatic Updates
- **Score Changes**: When scores are added, updated, or deleted, all leaderboard tabs update immediately
- **Contest Winner Changes**: When contest winners are modified, the contest indicators update across all scorecards
- **Multi-user Support**: Multiple users can view the leaderboard simultaneously and see each other's updates in real-time

### Logging
Comprehensive console logging for debugging:
- Subscription setup and cleanup
- Change detection events
- Data refresh operations
- Error handling

### Error Handling
- Real-time update failures don't crash the application
- Errors are logged but don't affect the main data loading process
- Graceful degradation if real-time features are unavailable

## User Experience

### What Users See
1. **Immediate Updates**: Changes appear instantly without page refreshes
2. **Visual Consistency**: All tabs (Stableford, Money Board, Raw Scorecards) update simultaneously
3. **Seamless Experience**: No loading indicators for real-time updates - changes appear smoothly

### Performance
- Minimal overhead: Only changed data is refetched
- Targeted updates: Scores and contests are updated independently
- Efficient subscriptions: Database changes trigger targeted refresh functions only

## Database Requirements

### Supabase Configuration
Real-time functionality requires:
1. **Row Level Security (RLS)** enabled on both tables
2. **Anonymous access policies** for SELECT operations
3. **Real-time enabled** in Supabase project settings

### Table Structure
Works with the current schema:
- `scores`: id, player_name, round, hole_number, strokes
- `contests`: id, round, hole_number, winner_name

## Testing Real-time Updates

To test the real-time functionality:

1. Open the leaderboard in multiple browser tabs
2. Update data directly in Supabase (via SQL editor or dashboard)
3. Observe immediate updates across all tabs without refresh
4. Check console logs for real-time event tracking

## Benefits

- **Multi-device Support**: Updates appear on all devices viewing the leaderboard
- **Live Tournament Experience**: Perfect for live golf tournaments where scores are entered in real-time
- **Data Consistency**: All viewers see the same data simultaneously
- **Reduced Server Load**: No need for frequent polling or manual refreshes
