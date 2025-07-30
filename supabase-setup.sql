-- SQL scripts to create the required tables for the golf tournament leaderboard
-- Run these scripts in your Supabase SQL Editor

-- 1. Create the scores table
CREATE TABLE public.scores (
    id BIGSERIAL PRIMARY KEY,
    player_name TEXT NOT NULL,
    round TEXT NOT NULL,
    hole_number SMALLINT NOT NULL,
    strokes SMALLINT NOT NULL,

    -- Add constraints
    CONSTRAINT valid_player_name CHECK (player_name IN ('Ivan', 'Patrick', 'Jack', 'Marshall')),
    CONSTRAINT valid_round CHECK (round IN ('Scarecrow', 'Gamble Sands', 'Quicksands')),
    CONSTRAINT valid_hole_scarecrow CHECK (
        (round != 'Scarecrow' AND round != 'Gamble Sands') OR
        (hole_number >= 1 AND hole_number <= 18)
    ),
    CONSTRAINT valid_hole_quicksands CHECK (
        round != 'Quicksands' OR
        (hole_number >= 1 AND hole_number <= 14)
    ),
    CONSTRAINT valid_strokes CHECK (strokes >= 1 AND strokes <= 15),

    -- Ensure unique scores per player/round/hole
    UNIQUE(player_name, round, hole_number)
);

-- 2. Create the contests table
CREATE TABLE public.contests (
    id BIGSERIAL PRIMARY KEY,
    round TEXT NOT NULL,
    hole_number SMALLINT NOT NULL,
    type TEXT NOT NULL,
    winner_name TEXT NOT NULL,

    -- Add constraints
    CONSTRAINT valid_round_contests CHECK (round IN ('Scarecrow', 'Gamble Sands')),
    CONSTRAINT valid_contest_type CHECK (type IN ('Long Drive', 'Closest to Pin')),
    CONSTRAINT valid_winner_name CHECK (winner_name IN ('Ivan', 'Patrick', 'Jack', 'Marshall')),
    CONSTRAINT valid_hole_contests CHECK (hole_number >= 1 AND hole_number <= 18),

    -- Ensure unique contests per round/hole
    UNIQUE(round, hole_number)
);

-- 3. Enable Row Level Security (RLS) and create policies for anonymous access
ALTER TABLE public.scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to read all scores and contests
CREATE POLICY "Allow anonymous read access to scores" 
    ON public.scores FOR SELECT 
    TO anon 
    USING (true);

CREATE POLICY "Allow anonymous read access to contests" 
    ON public.contests FOR SELECT 
    TO anon 
    USING (true);

-- 4. Grant necessary permissions to anonymous role
GRANT SELECT ON public.scores TO anon;
GRANT SELECT ON public.contests TO anon;

-- 5. Sample data for testing (optional)
-- Uncomment the following to insert some test data

/*
-- Sample scores for Scarecrow course
INSERT INTO public.scores (player_name, course, hole, strokes) VALUES
('Ivan', 'Scarecrow', 1, 4),
('Ivan', 'Scarecrow', 2, 2),
('Ivan', 'Scarecrow', 3, 6),
('Patrick', 'Scarecrow', 1, 5),
('Patrick', 'Scarecrow', 2, 3),
('Patrick', 'Scarecrow', 3, 5),
('Jack', 'Scarecrow', 1, 3),
('Jack', 'Scarecrow', 2, 4),
('Jack', 'Scarecrow', 3, 5),
('Marshall', 'Scarecrow', 1, 4),
('Marshall', 'Scarecrow', 2, 3),
('Marshall', 'Scarecrow', 3, 7);

-- Sample contests for Scarecrow course
INSERT INTO public.contests (course, hole, contest_type, winner) VALUES
('Scarecrow', 2, 'closest', 'Ivan'),
('Scarecrow', 3, 'long', 'Patrick'),
('Scarecrow', 4, 'closest', 'Jack');
*/

-- 6. Create indexes for better performance
CREATE INDEX idx_scores_player_course ON public.scores(player_name, course);
CREATE INDEX idx_scores_course_hole ON public.scores(course, hole);
CREATE INDEX idx_contests_course_hole ON public.contests(course, hole);

-- Success message
SELECT 'Golf tournament tables created successfully!' AS message;
