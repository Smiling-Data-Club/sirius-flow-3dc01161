
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname='instagram_posts_post_id_key') THEN
    ALTER TABLE public.instagram_posts ADD CONSTRAINT instagram_posts_post_id_key UNIQUE (post_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname='tiktok_posts_post_id_key') THEN
    ALTER TABLE public.tiktok_posts ADD CONSTRAINT tiktok_posts_post_id_key UNIQUE (post_id);
  END IF;
END $$;
