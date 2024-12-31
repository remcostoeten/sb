/*
  # Rate Limit Logging System

  1. New Tables
    - `rate_limit_logs`
      - `id` (uuid, primary key)
      - `key` (text, for identifying the rate limited action)
      - `ip_address` (text)
      - `user_agent` (text)
      - `timestamp` (timestamptz)
      - `attempt_count` (int)
      - `is_blocked` (boolean)
      - `location` (jsonb, stores country, city, lat/long)
      - `device_info` (jsonb, stores browser, os, device type)
      - `time_between_attempts` (int, milliseconds)
      - `provider` (text)
      
  2. Security
    - Enable RLS
    - Add policies for authenticated users
*/

CREATE TABLE IF NOT EXISTS rate_limit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text NOT NULL,
  ip_address text,
  user_agent text,
  timestamp timestamptz DEFAULT now(),
  attempt_count int DEFAULT 1,
  is_blocked boolean DEFAULT false,
  location jsonb,
  device_info jsonb,
  time_between_attempts int,
  provider text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE rate_limit_logs ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting logs
CREATE POLICY "Allow authenticated users to insert logs"
  ON rate_limit_logs
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policy for reading logs
CREATE POLICY "Allow authenticated users to read their own logs"
  ON rate_limit_logs
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid() 
    FROM auth.users 
    WHERE auth.users.raw_user_meta_data->>'role' = 'admin'
  ));