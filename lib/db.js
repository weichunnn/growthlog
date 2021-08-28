import { supabase } from './supabase';

export async function uploadJournalImage(file, path) {
  const userFolder = supabase.auth.user().id;
  const { data, error } = await supabase.storage
    .from('restricted')
    .upload(`${userFolder}/${path}`, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) {
    throw new Error(error);
  }
  return data;
}

export async function getPublicURL(path) {
  const userFolder = supabase.auth.user().id;
  const { publicURL, error } = supabase.storage
    .from('restricted')
    .getPublicUrl(`${userFolder}/${path}`);

  if (error) {
    throw new Error(error);
  }
  return publicURL;
}
