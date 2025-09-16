import { Card, CardContent } from '@/components/ui/card';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Hash, Plus } from 'lucide-react';
import Image from 'next/image';
import emptyImg from '@/assets/illustration-empty.svg';
import Link from 'next/link';
import { getBadgeClass } from '@/utils/utils';

export default function Invoices({ data: invoices }) {
	if (invoices && invoices.length) {
		return (
			<section className='space-y-6'>
				{invoices.map(
					({ id, status, invoice_id, customer, payment_due, total }) => {
						const totalWithCurrency = new Intl.NumberFormat('en-IN', {
							style: 'currency',
							currency: 'AUD',
						}).format(total);
						const formattedDate = format(payment_due, 'dd MMM yyyy');
						const badgeClass = getBadgeClass(status);

						return (
							<Link key={id} href={`/invoice/${id}`}>
								<Card className='shadow-none'>
									<CardContent className='grid grid-cols-[repeat(4,_1fr)_auto_auto] gap-4'>
										<p className='font-bold'>
											<Hash className='inline size-4 text-muted-foreground' />
											{invoice_id}
										</p>
										<p className='text-muted-foreground'>{formattedDate}</p>
										<p className='text-muted-foreground'>{customer.name}</p>
										<p className='font-bold'>{totalWithCurrency}</p>
										<Badge className={badgeClass}>{status}</Badge>
										<ChevronRight />
									</CardContent>
								</Card>
							</Link>
						);
					}
				)}
			</section>
		);
	} else {
		return (
			<section className='h-120 min-h-fit flex flex-col items-center justify-center text-muted-foreground'>
				<Image src={emptyImg} alt='empty' />
				<h3 className='text-xl'>There is nothing here</h3>
				<p className='text-sm'>
					Create invoice by clicking &#34;
					<Plus className='inline size-5' />
					&#34; button
				</p>
			</section>
		);
	}
}
