export default function Error({ error }: { error: object }) {
	return (
		<section>
			<pre>{JSON.stringify(error, null, 2)}</pre>
		</section>
	);
}
