import { getInvoice } from './action';
import Error from '@/components/Error';
import HeaderSection from './components/HeaderSection';
import DescriptionSection from './components/DescriptionSection';
import ItemSubSection from './components/ItemsSubSection';

// type ParamsType = Promise<{ id: string }>;

export default async function InvoicePage({ params }) {
	const { id } = await params;
	const { data: invoice, error } = await getInvoice(id);
	// console.log('invoice:', invoice);

	if (error) return <Error error={error} />;

	return (
		<>
			<main>
				<HeaderSection status={invoice.status} />
				<DescriptionSection invoice={invoice}>
					<ItemSubSection id={id} />
				</DescriptionSection>
			</main>
		</>
	);
}
