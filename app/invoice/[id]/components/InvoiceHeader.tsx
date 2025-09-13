import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getBadgeClass } from '@/utils/utils';
import { ChevronLeft } from 'lucide-react';

export default function InvoiceHeader({ status }: { status: string }) {
	const badgeClass = getBadgeClass(status);

	return (
		<header>
			<Button variant='ghost'>
				<ChevronLeft /> Back
			</Button>
			<section className='flex justify-between'>
				<div className='flex items-center'>
					<p>status</p>
					<Badge className={badgeClass}>{status}</Badge>
				</div>
				<div>
					<Button variant='secondary'>Edit</Button>
					<Button variant='destructive'>Delete</Button>
					<Button>Mark as Paid</Button>
				</div>
			</section>
		</header>
	);
}
