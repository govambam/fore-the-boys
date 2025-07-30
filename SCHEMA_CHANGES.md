# Supabase Schema Changes - Remove Contest Type Column

## Overview
Removed the `type` column from the `contests` table as it was not being used by the leaderboard application. Contest types are now determined by the hole number and course configuration in the frontend code.

## Changes Made

### 1. Database Schema Changes
- **File**: `supabase-setup.sql`
  - Removed `type TEXT NOT NULL` column from contests table definition
  - Removed `valid_contest_type` constraint 
  - Updated sample data INSERT statements to exclude type column

### 2. TypeScript Interface Updates  
- **File**: `client/lib/supabase.ts`
  - Removed `type: 'Long Drive' | 'Closest to Pin'` from Contest interface
  - Updated debugging console.log to reflect new expected columns

### 3. Migration Script
- **File**: `supabase-migration-remove-type.sql`
  - Created migration script for existing databases
  - Safely removes the type column and associated constraints

## How Contest Types Work Now

Contest types are determined by the static course configuration in `client/pages/Leaderboard.tsx`:

```typescript
const courseData = {
  scarecrow: {
    contestHoles: {
      2: "closest", // Par 3 - Closest to Pin
      3: "long",    // Par 5 - Long Drive  
      4: "closest", // Par 3 - Closest to Pin
      // ... etc
    }
  }
}
```

The leaderboard displays contest winners using:
- `round` and `hole_number` from the database to identify the contest
- `winner_name` from the database for the winner
- `contestType` derived from the course configuration for display icons

## Database Schema After Changes

### contests table
- `id`: BIGSERIAL PRIMARY KEY
- `round`: TEXT NOT NULL  
- `hole_number`: SMALLINT NOT NULL
- `winner_name`: TEXT NOT NULL

### Constraints
- `valid_round_contests`: round must be 'Scarecrow' or 'Gamble Sands'
- `valid_winner_name`: winner_name must be 'Ivan', 'Patrick', 'Jack', or 'Marshall'  
- `valid_hole_contests`: hole_number must be between 1 and 18
- `UNIQUE(round, hole_number)`: prevents duplicate contests

## Verification
- ✅ TypeScript compilation passes without errors
- ✅ Build process completes successfully  
- ✅ No breaking changes to leaderboard functionality
- ✅ Contest winners still display correctly based on round/hole lookup
