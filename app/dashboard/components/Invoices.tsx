import { Card, CardContent } from '@/components/ui/card';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import classNames from 'classnames';

export default async function Invoices({ data: invoices }) {
	return (
		<section className='space-y-6'>
			{invoices.map(({ status, invoice_id, customer, payment_due, total }) => {
				const name =
					Array.isArray(customer) && customer.length > 0
						? customer[0].name
						: '';

				const totalWithCurrency = new Intl.NumberFormat('en-IN', {
					style: 'currency',
					currency: 'AUD',
				}).format(total);

				const formattedDate = format(payment_due, 'dd MMM yyyy');

				const badgeClass = classNames({
					'bg-green-500': status === 'paid',
					'bg-yellow-500': status === 'pending',
					'bg-slate-500': status === 'draft',
				});

				return (
					<Card
						key={invoice_id}
						className='shadow-md/10 shadow-muted-foreground border-border/50'
					>
						<CardContent className='grid grid-cols-5'>
							<p>{invoice_id}</p>
							<p>{formattedDate}</p>
							<p>{name}</p>
							<p className='font-bold'>{totalWithCurrency}</p>
							<Badge className={badgeClass}>{status}</Badge>
						</CardContent>
					</Card>
				);
			})}
		</section>
	);
}
