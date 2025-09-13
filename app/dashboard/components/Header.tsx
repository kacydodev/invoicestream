import { Button } from '@/components/ui/button';
import { FilterDropdown } from './FilterDropdown';
import { Plus } from 'lucide-react';

export default function Header({ count }: { count: number }) {
	const subTitle =
		count > 0 ? <>{count} invoices found</> : <>No invoice found</>;

	return (
		<header className='flex items-center justify-between'>
			<div>
				<h2 className='text-3xl'>Invoices</h2>
				<p>{subTitle}</p>
			</div>
			<div className=''>
				<FilterDropdown />
				<Button>
					<Plus className='after:content-[" fdf"] after:bg-white after:w-6 after:h-6' />
					New Invoice
				</Button>
			</div>
		</header>
	);
}
