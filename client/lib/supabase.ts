import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://eunomxuabzzfualvhrxm.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1bm9teHVhYnp6ZnVhbHZocnhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MDQ0MzUsImV4cCI6MjA2OTQ4MDQzNX0.PZ90gbhUq0zWmEfI0k_X6AO9huzaTgCyV3XhHsGt98o";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Test Supabase connection and check table existence
export async function testConnection() {
  try {
    console.log('Testing Supabase connection...');
    console.log('URL:', SUPABASE_URL);
    console.log('API Key (first 20 chars):', SUPABASE_KEY.substring(0, 20) + '...');

    // Test basic connection by trying to list tables
    const { data: tablesData, error: tablesError } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public');

    if (tablesError) {
      console.warn('Could not list tables, trying simple select:', tablesError.message);

      // Fallback: try a simple select on scores table
      const { data, error } = await supabase
        .from('scores')
        .select('count', { count: 'exact', head: true });

      if (error) {
        console.error('Connection/table test failed:', error.message);
        return false;
      } else {
        console.log('Connection successful, scores table exists');
        return true;
      }
    }

    console.log('Available tables:', tablesData?.map(t => t.table_name));
    return true;
  } catch (err) {
    console.error('Connection test error:', err);
    return false;
  }
}

// Check if required tables exist
export async function checkTables() {
  console.log('Checking required tables...');

  const results = {
    scores: false,
    contests: false
  };

  // Check scores table
  try {
    const { error: scoresError } = await supabase
      .from('scores')
      .select('count', { count: 'exact', head: true });

    results.scores = !scoresError;
    if (scoresError) {
      console.error('Scores table issue:', scoresError.message);
    } else {
      console.log('✓ Scores table accessible');
    }
  } catch (err) {
    console.error('Error checking scores table:', err);
  }

  // Check contests table
  try {
    const { error: contestsError } = await supabase
      .from('contests')
      .select('count', { count: 'exact', head: true });

    results.contests = !contestsError;
    if (contestsError) {
      console.error('Contests table issue:', contestsError.message);
    } else {
      console.log('✓ Contests table accessible');
    }
  } catch (err) {
    console.error('Error checking contests table:', err);
  }

  return results;
}

// Inspect table structure for debugging
export async function inspectTableStructure(tableName: string) {
  try {
    console.log(`Inspecting ${tableName} table structure...`);

    // Try to get column information
    const { data, error } = await supabase
      .from('information_schema.columns')
      .select('column_name, data_type, is_nullable')
      .eq('table_name', tableName)
      .eq('table_schema', 'public');

    if (error) {
      console.warn(`Could not inspect ${tableName} structure:`, error.message);

      // Fallback: try to fetch one record to see what columns exist
      const { data: sampleData, error: sampleError } = await supabase
        .from(tableName)
        .select('*')
        .limit(1);

      if (sampleError) {
        console.error(`Error fetching sample data from ${tableName}:`, sampleError.message);
      } else {
        console.log(`Sample ${tableName} record:`, sampleData?.[0] || 'No data');

        // Log expected vs actual columns for easier debugging
        if (tableName === 'scores') {
          console.log('Expected scores columns: id, player_name, round, hole_number, strokes');
        } else if (tableName === 'contests') {
          console.log('Expected contests columns: id, round, hole_number, winner_name');
        }
      }
    } else {
      console.log(`${tableName} columns:`, data);
    }
  } catch (err) {
    console.error(`Error inspecting ${tableName}:`, err);
  }
}

// Types for our data
export interface Score {
  id: number;
  player_name: string;
  round: string;
  hole_number: number;
  strokes: number;
}

export interface Contest {
  id: number;
  round: string;
  hole_number: number;
  winner_name: string;
}

// Fetch all scores from Supabase
export async function fetchScores(): Promise<Score[]> {
  try {
    const { data, error } = await supabase
      .from('scores')
      .select('*')
      .order('round', { ascending: true })
      .order('hole_number', { ascending: true });

    if (error) {
      console.error('Supabase error fetching scores:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });

      // Check if it's a missing table/column error
      if (error.message.includes('does not exist')) {
        console.warn('Scores table or columns missing - using empty data');
        return [];
      }

      throw new Error(`Failed to fetch scores: ${error.message}`);
    }

    console.log('Successfully fetched scores:', data?.length || 0, 'records');
    return data || [];
  } catch (err) {
    console.error('Network/connection error fetching scores:', err);

    // For missing table errors, return empty data instead of crashing
    if (err instanceof Error && err.message.includes('does not exist')) {
      console.warn('Returning empty scores due to missing table/columns');
      return [];
    }

    throw err;
  }
}

// Fetch all contest winners from Supabase
export async function fetchContests(): Promise<Contest[]> {
  try {
    const { data, error } = await supabase
      .from('contests')
      .select('*')
      .order('round', { ascending: true })
      .order('hole_number', { ascending: true });

    if (error) {
      console.error('Supabase error fetching contests:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });

      // Check if it's a missing table/column error
      if (error.message.includes('does not exist')) {
        console.warn('Contests table or columns missing - using empty data');
        return [];
      }

      throw new Error(`Failed to fetch contests: ${error.message}`);
    }

    console.log('Successfully fetched contests:', data?.length || 0, 'records');
    return data || [];
  } catch (err) {
    console.error('Network/connection error fetching contests:', err);

    // For missing table errors, return empty data instead of crashing
    if (err instanceof Error && err.message.includes('does not exist')) {
      console.warn('Returning empty contests due to missing table/columns');
      return [];
    }

    throw err;
  }
}

// Transform scores data into the format expected by the leaderboard
export function transformScoresData(scores: Score[]) {
  console.log('Transforming scores data:', scores.length, 'records');

  const transformed = {
    scarecrow: {} as { [player: string]: number[] },
    gambleSands: {} as { [player: string]: number[] },
    quicksands: {} as { [team: string]: number[] }
  };

  // Initialize player arrays
  const players = ['Ivan', 'Patrick', 'Jack', 'Marshall'];
  const teams = ['IG + JC', 'PT + MR'];

  players.forEach(player => {
    transformed.scarecrow[player] = new Array(18).fill(null);
    transformed.gambleSands[player] = new Array(18).fill(null);
  });

  teams.forEach(team => {
    transformed.quicksands[team] = new Array(14).fill(null);
  });

  // Early return if no scores
  if (!scores || scores.length === 0) {
    console.log('No scores to transform, returning empty arrays');
    return transformed;
  }

  // Fill in the actual scores
  scores.forEach(score => {
    const round = score.round.toLowerCase().replace(/\s+/g, '').replace(/[^a-z]/g, '');
    const playerName = score.player_name;
    const holeIndex = score.hole_number - 1;

    if ((round === 'scarecrow' || round === 'thescarecrow') && transformed.scarecrow[playerName]) {
      transformed.scarecrow[playerName][holeIndex] = score.strokes;
    } else if ((round === 'gamblesands' || round === 'gamble sands'.replace(/\s+/g, '')) && transformed.gambleSands[playerName]) {
      transformed.gambleSands[playerName][holeIndex] = score.strokes;
    } else if (round === 'quicksands') {
      // For quicksands, we need to map individual players to teams
      let teamName = '';
      if (playerName === 'Ivan' || playerName === 'Jack') {
        teamName = 'IG + JC';
      } else if (playerName === 'Patrick' || playerName === 'Marshall') {
        teamName = 'PT + MR';
      }

      if (teamName && transformed.quicksands[teamName]) {
        // Use the best score between teammates (scramble format)
        const currentScore = transformed.quicksands[teamName][holeIndex];
        if (currentScore === null || score.strokes < currentScore) {
          transformed.quicksands[teamName][holeIndex] = score.strokes;
        }
      }
    }
  });

  return transformed;
}

// Transform contest data into the format expected by the leaderboard
export function transformContestData(contests: Contest[]) {
  console.log('Transforming contest data:', contests.length, 'records');

  const transformed = {
    scarecrow: {} as { [hole: number]: string },
    gambleSands: {} as { [hole: number]: string },
    quicksands: {} as { [hole: number]: string }
  };

  // Early return if no contests
  if (!contests || contests.length === 0) {
    console.log('No contests to transform, returning empty objects');
    return transformed;
  }

  // Map player names to initials
  const playerInitials: { [key: string]: string } = {
    'Ivan': 'I',
    'Patrick': 'P',
    'Jack': 'J',
    'Marshall': 'M'
  };

  contests.forEach(contest => {
    const round = contest.round.toLowerCase().replace(/\s+/g, '').replace(/[^a-z]/g, '');
    const initial = playerInitials[contest.winner_name] || contest.winner_name.charAt(0).toUpperCase();

    if (round === 'scarecrow' || round === 'thescarecrow') {
      transformed.scarecrow[contest.hole_number] = initial;
    } else if (round === 'gamblesands') {
      transformed.gambleSands[contest.hole_number] = initial;
    } else if (round === 'quicksands') {
      transformed.quicksands[contest.hole_number] = initial;
    }
  });

  return transformed;
}
