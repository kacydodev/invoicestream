import { getInvoice } from './action';
import { formatDate, formatPrice } from '@/utils/utils';
import Error from '@/components/Error';
import InvoiceHeader from './components/InvoiceHeader';

type ParamsType = Promise<{ id: string }>;

export default async function InvoicePage({ params }: { params: ParamsType }) {
	const { id: paramId } = await params;
	const { data: invoice, error } = await getInvoice(paramId);
	const {
		id,
		status,
		description,
		invoice_id,
		payment_due,
		payment_term,
		total,
		customer,
		invoice_items,
	} = invoice;

	const formattedTotal = formatPrice(total);
	const formattedDate = formatDate(payment_due);

	if (error) return <Error error={error} />;

	return (
		<>
			<main>
				<InvoiceHeader status={status} />
			</main>
		</>
	);
}
