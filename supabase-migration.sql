-- Run this in Supabase SQL Editor (supabase.com → your project → SQL Editor)

-- 1. Create the user_notes table
create table if not exists user_notes (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  module_id text not null,
  text text not null,
  done boolean default false,
  created_at timestamptz default now()
);

-- 2. Index for fast lookups by user
create index if not exists idx_user_notes_user_id on user_notes(user_id);

-- 3. Enable Row Level Security — each manager sees only their own notes
alter table user_notes enable row level security;

create policy "Users can read own notes"
  on user_notes for select
  using (auth.uid() = user_id);

create policy "Users can insert own notes"
  on user_notes for insert
  with check (auth.uid() = user_id);

create policy "Users can update own notes"
  on user_notes for update
  using (auth.uid() = user_id);

create policy "Users can delete own notes"
  on user_notes for delete
  using (auth.uid() = user_id);
