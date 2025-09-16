import { Button } from '@/components/ui/button';
import { FilterDropdown } from './FilterDropdown';
import { Plus } from 'lucide-react';
import React from 'react';
import { StatusType } from '@/utils/types';

interface HeaderInterface {
	count: number;
	status: StatusType | '';
	setStatus: React.Dispatch<React.SetStateAction<StatusType | ''>>;
}

export default function Header({ count, status, setStatus }: HeaderInterface) {
	const subTitle =
		count > 0 ? <>{count} invoices found</> : <>0 invoice found</>;

	return (
		<header className='flex items-center justify-between'>
			<div>
				<h2 className='text-3xl'>Invoices</h2>
				<p className='text-sm text-muted-foreground'>{subTitle}</p>
			</div>
			<div className=''>
				<FilterDropdown status={status} setStatus={setStatus} />
				<Button>
					<Plus className='after:content-[" fdf"] after:bg-white after:w-6 after:h-6' />
					New Invoice
				</Button>
			</div>
		</header>
	);
}
