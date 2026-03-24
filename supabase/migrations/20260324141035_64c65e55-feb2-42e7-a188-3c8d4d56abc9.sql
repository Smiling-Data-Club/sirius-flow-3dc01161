
-- Instagram posts table
CREATE TABLE public.instagram_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id text NOT NULL,
  caption text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  url text NOT NULL,
  likes integer NOT NULL DEFAULT 0,
  media_url text,
  media_type text NOT NULL DEFAULT 'IMAGE'
);

ALTER TABLE public.instagram_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Instagram posts are publicly readable"
  ON public.instagram_posts FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage instagram posts"
  ON public.instagram_posts FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- TikTok posts table
CREATE TABLE public.tiktok_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id text NOT NULL,
  description text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  url text NOT NULL,
  views integer NOT NULL DEFAULT 0,
  cover_image_url text
);

ALTER TABLE public.tiktok_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "TikTok posts are publicly readable"
  ON public.tiktok_posts FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage tiktok posts"
  ON public.tiktok_posts FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- YouTube videos table
CREATE TABLE public.youtube_videos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  video_id text NOT NULL,
  title text NOT NULL,
  description text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now(),
  url text NOT NULL,
  thumbnail_url text,
  view_count integer NOT NULL DEFAULT 0,
  duration text
);

ALTER TABLE public.youtube_videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "YouTube videos are publicly readable"
  ON public.youtube_videos FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage youtube videos"
  ON public.youtube_videos FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
