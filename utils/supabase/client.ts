import { createBrowserClient } from '@supabase/ssr';
import { TypedSupabaseClient } from '../types';
import { Database } from '../database.types';

let client: TypedSupabaseClient | undefined

export function createClient() {
	if(client) {
		return client
	}

	client = createBrowserClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
	);

	return client
}
