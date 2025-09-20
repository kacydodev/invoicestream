import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { getInvoiceItems } from '../action';
import Error from '@/components/Error';
import { calculateItemizedTotal, formatPrice } from '@/utils/utils';

export default async function ItemsTable({ id }) {
	const { data: items, error } = await getInvoiceItems(id);

	if (error) return <Error error={error} />;

	return (
		<Table className='bg-background'>
			<TableHeader>
				<TableRow className='[&>*]:text-muted-foreground [&>*]:text-sm'>
					<TableHead>Name</TableHead>
					<TableHead className='text-center'>Qty</TableHead>
					<TableHead className='text-right'>Price</TableHead>
					<TableHead className='text-right'>Total</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{items.map((item) => {
					const {
						quantity,
						products: {
							id,
							name,
							product_prices: [{ price, currency }],
						},
					} = item;

					const formattedPrice = formatPrice(price, currency);
					const total = calculateItemizedTotal(price, quantity);

					return (
						<TableRow key={id}>
							<TableCell className='font-bold'>{name}</TableCell>
							<TableCell className='text-center text-muted-foreground'>
								{quantity}
							</TableCell>
							<TableCell className='text-right text-muted-foreground'>
								{formattedPrice}
							</TableCell>
							<TableCell className='text-right font-bold'>{total}</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
			<TableFooter className='bg-foreground text-background'>
				<TableRow>
					<TableCell colSpan={3}>Total Amount:</TableCell>
					<TableCell className='text-right'>$2,500.00</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
}
