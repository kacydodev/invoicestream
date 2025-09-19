import { PostgrestError } from '@supabase/supabase-js';

interface ErrorInterface {
	error: PostgrestError | string;
	params: { code: string };
}

export default async function Error({ error, params }: ErrorInterface) {
	const { code } = await params;

	if (code === '404') {
		return <p>404 Cannot find page</p>;
	}

	if (error instanceof String) {
		return <p>{error}</p>;
	} else {
		return (
			<section>
				<pre>{JSON.stringify(error, null, 2)}</pre>
			</section>
		);
	}
}
