-- SQL scripts to create the required tables for the golf tournament leaderboard
-- Run these scripts in your Supabase SQL Editor

-- 1. Create the scores table
CREATE TABLE public.scores (
    id BIGSERIAL PRIMARY KEY,
    player_name TEXT NOT NULL,
    course TEXT NOT NULL,
    hole INTEGER NOT NULL,
    strokes INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    
    -- Add constraints
    CONSTRAINT valid_player_name CHECK (player_name IN ('Ivan', 'Patrick', 'Jack', 'Marshall')),
    CONSTRAINT valid_course CHECK (course IN ('Scarecrow', 'Gamble Sands', 'Quicksands')),
    CONSTRAINT valid_hole_scarecrow CHECK (
        (course != 'Scarecrow' AND course != 'Gamble Sands') OR 
        (hole >= 1 AND hole <= 18)
    ),
    CONSTRAINT valid_hole_quicksands CHECK (
        course != 'Quicksands' OR 
        (hole >= 1 AND hole <= 14)
    ),
    CONSTRAINT valid_strokes CHECK (strokes >= 1 AND strokes <= 15),
    
    -- Ensure unique scores per player/course/hole
    UNIQUE(player_name, course, hole)
);

-- 2. Create the contests table
CREATE TABLE public.contests (
    id BIGSERIAL PRIMARY KEY,
    course TEXT NOT NULL,
    hole INTEGER NOT NULL,
    contest_type TEXT NOT NULL,
    winner TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    
    -- Add constraints
    CONSTRAINT valid_course_contests CHECK (course IN ('Scarecrow', 'Gamble Sands')),
    CONSTRAINT valid_contest_type CHECK (contest_type IN ('closest', 'long')),
    CONSTRAINT valid_winner CHECK (winner IN ('Ivan', 'Patrick', 'Jack', 'Marshall')),
    CONSTRAINT valid_hole_contests CHECK (hole >= 1 AND hole <= 18),
    
    -- Ensure unique contests per course/hole
    UNIQUE(course, hole)
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
