-- Create linkedin_posts table for storing LinkedIn feed data
CREATE TABLE public.linkedin_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id TEXT NOT NULL UNIQUE,
  text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  url TEXT NOT NULL,
  likes INTEGER NOT NULL DEFAULT 0,
  image_url TEXT
);

-- Enable RLS
ALTER TABLE public.linkedin_posts ENABLE ROW LEVEL SECURITY;

-- Allow public read access (posts are public content)
CREATE POLICY "LinkedIn posts are publicly readable"
  ON public.linkedin_posts
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Only authenticated users can manage linkedin posts
CREATE POLICY "Authenticated users can manage linkedin posts"
  ON public.linkedin_posts
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);