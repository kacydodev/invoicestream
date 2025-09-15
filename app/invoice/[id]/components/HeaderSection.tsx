import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { getBadgeClass } from '@/utils/utils';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function HeaderSection({ status }: { status: string }) {
	const badgeClass = getBadgeClass(status);

	return (
		<header className='w-2xl'>
			<Button asChild variant='ghost'>
				<Link href='/dashboard'>
					<ChevronLeft /> Back
				</Link>
			</Button>
			<Card className='grid grid-cols-[repeat(2,auto)] justify-between'>
				<CardHeader className='flex items-center'>
					<p>status</p>
					<Badge className={badgeClass}>{status}</Badge>
				</CardHeader>
				<CardContent>
					<Button variant='secondary'>Edit</Button>
					<Button variant='destructive'>Delete</Button>
					<Button>Mark as Paid</Button>
				</CardContent>
			</Card>
		</header>
	);
}
