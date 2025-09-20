import { formatPrice, calculateItemizedTotal } from '@/utils/utils';
import { TableRow, TableCell } from '@/components/ui/table';

export default function ItemRow({ item }) {
	const {
		quantity,
		products: {
			name,
			product_prices: [{ price, currency }],
		},
	} = item;

	const formattedPrice = formatPrice(price, currency);
	const total = calculateItemizedTotal(price, quantity);

	return (
		<TableRow className='col-span-3'>
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
}
