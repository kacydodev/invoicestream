import { PostgrestError } from '@supabase/supabase-js';

export default function ErrorDeprecated({
	error,
}: {
	error: PostgrestError | string;
}) {
	if (error instanceof String) {
		return <p>{error}</p>;
	}

	return (
		<section>
			<pre>{JSON.stringify(error, null, 2)}</pre>
		</section>
	);
}
