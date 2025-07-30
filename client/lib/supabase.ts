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

// Types for our data
export interface Score {
  id: number;
  player_name: string;
  course: string;
  hole: number;
  strokes: number;
  created_at: string;
}

export interface Contest {
  id: number;
  course: string;
  hole: number;
  contest_type: 'closest' | 'long';
  winner: string;
  created_at: string;
}

// Fetch all scores from Supabase
export async function fetchScores(): Promise<Score[]> {
  try {
    const { data, error } = await supabase
      .from('scores')
      .select('*')
      .order('course', { ascending: true })
      .order('hole', { ascending: true });

    if (error) {
      console.error('Supabase error fetching scores:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      throw new Error(`Failed to fetch scores: ${error.message}`);
    }

    console.log('Successfully fetched scores:', data?.length || 0, 'records');
    return data || [];
  } catch (err) {
    console.error('Network/connection error fetching scores:', err);
    throw err;
  }
}

// Fetch all contest winners from Supabase
export async function fetchContests(): Promise<Contest[]> {
  try {
    const { data, error } = await supabase
      .from('contests')
      .select('*')
      .order('course', { ascending: true })
      .order('hole', { ascending: true });

    if (error) {
      console.error('Supabase error fetching contests:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      throw new Error(`Failed to fetch contests: ${error.message}`);
    }

    console.log('Successfully fetched contests:', data?.length || 0, 'records');
    return data || [];
  } catch (err) {
    console.error('Network/connection error fetching contests:', err);
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
  const teams = ['Ivan + Jack', 'Patrick + Marshall'];

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
    const course = score.course.toLowerCase().replace(/\s+/g, '').replace(/[^a-z]/g, '');
    const playerName = score.player_name;
    const holeIndex = score.hole - 1;

    if ((course === 'scarecrow' || course === 'thescarecrow') && transformed.scarecrow[playerName]) {
      transformed.scarecrow[playerName][holeIndex] = score.strokes;
    } else if ((course === 'gamblesands' || course === 'gamble sands'.replace(/\s+/g, '')) && transformed.gambleSands[playerName]) {
      transformed.gambleSands[playerName][holeIndex] = score.strokes;
    } else if (course === 'quicksands') {
      // For quicksands, we need to map individual players to teams
      let teamName = '';
      if (playerName === 'Ivan' || playerName === 'Jack') {
        teamName = 'Ivan + Jack';
      } else if (playerName === 'Patrick' || playerName === 'Marshall') {
        teamName = 'Patrick + Marshall';
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
    const course = contest.course.toLowerCase().replace(/\s+/g, '').replace(/[^a-z]/g, '');
    const initial = playerInitials[contest.winner] || contest.winner.charAt(0).toUpperCase();

    if (course === 'scarecrow' || course === 'thescarecrow') {
      transformed.scarecrow[contest.hole] = initial;
    } else if (course === 'gamblesands') {
      transformed.gambleSands[contest.hole] = initial;
    } else if (course === 'quicksands') {
      transformed.quicksands[contest.hole] = initial;
    }
  });

  return transformed;
}
