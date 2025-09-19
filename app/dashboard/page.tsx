import Header from './components/Header';
import Invoices from './components/Invoices';
import { getInvoices } from '@/queries/invoices';
import ErrorDeprecated from '@/components/Error';

export default async function DashboardPage() {
	const { data, error } = await getInvoices();
	const count = data && data.length;

	return (
		<>
			<main>
				<Header count={count || 0} />
				{error ? <ErrorDeprecated error={error} /> : <Invoices data={data} />}
			</main>
		</>
	);
}
