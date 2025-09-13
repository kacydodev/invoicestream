import { PostgrestError } from '@supabase/supabase-js';

export default function Error({ error }: { error: PostgrestError }) {
	return (
		<section>
			<pre>{JSON.stringify(error, null, 2)}</pre>
		</section>
	);
}
