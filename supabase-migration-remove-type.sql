-- Migration script to remove the type column from contests table
-- Run this script in your Supabase SQL Editor if you have an existing contests table

-- First, remove the constraint that references the type column
ALTER TABLE public.contests DROP CONSTRAINT IF EXISTS valid_contest_type;

-- Remove the type column
ALTER TABLE public.contests DROP COLUMN IF EXISTS type;

-- Migration complete message
SELECT 'Type column successfully removed from contests table!' AS message;
