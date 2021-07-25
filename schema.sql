-- USERS
create table users (
  id uuid references auth.users not null primary key,
  name text,
  email text,
  avatar_url text,
  provider text
);

-- inserts a row into public.users 
-- -> returns object while ->> returns the value of key
create or replace function public.handle_new_user() 
returns trigger as $$
begin
  insert into public.users (id, name, email, avatar_url, provider)
  values (new.id, new.raw_user_meta_data->>'full_name', new.email, new.raw_user_meta_data->>'avatar_url', new.raw_app_meta_data->>'provider');
  return new;
end;
$$ language plpgsql security definer;

-- trigger the handle_new_user() function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();