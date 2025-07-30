import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://eunomxuabzzfualvhrxm.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1bm9teHVhYnp6ZnVhbHZocnhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MDQ0MzUsImV4cCI6MjA2OTQ4MDQzNX0.PZ90gbhUq0zWmEfI0k_X6AO9huzaTgCyV3XhHsGt98o";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

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
  const { data, error } = await supabase
    .from('scores')
    .select('*')
    .order('course', { ascending: true })
    .order('hole', { ascending: true });

  if (error) {
    console.error('Error fetching scores:', error);
    return [];
  }

  return data || [];
}

// Fetch all contest winners from Supabase
export async function fetchContests(): Promise<Contest[]> {
  const { data, error } = await supabase
    .from('contests')
    .select('*')
    .order('course', { ascending: true })
    .order('hole', { ascending: true });

  if (error) {
    console.error('Error fetching contests:', error);
    return [];
  }

  return data || [];
}

// Transform scores data into the format expected by the leaderboard
export function transformScoresData(scores: Score[]) {
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
  const transformed = {
    scarecrow: {} as { [hole: number]: string },
    gambleSands: {} as { [hole: number]: string },
    quicksands: {} as { [hole: number]: string }
  };

  // Map player names to initials
  const playerInitials: { [key: string]: string } = {
    'Ivan': 'I',
    'Patrick': 'P', 
    'Jack': 'J',
    'Marshall': 'M'
  };

  contests.forEach(contest => {
    const course = contest.course.toLowerCase().replace(/\s+/g, '');
    const initial = playerInitials[contest.winner] || contest.winner.charAt(0).toUpperCase();

    if (course === 'scarecrow') {
      transformed.scarecrow[contest.hole] = initial;
    } else if (course === 'gamblesands') {
      transformed.gambleSands[contest.hole] = initial;
    } else if (course === 'quicksands') {
      transformed.quicksands[contest.hole] = initial;
    }
  });

  return transformed;
}
