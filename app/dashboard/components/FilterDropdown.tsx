'use client';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, X } from 'lucide-react';
import { useState } from 'react';

const filterOptions = ['paid', 'pending', 'draft'];

export function FilterDropdown() {
	const [selected, setSelected] = useState('');
	const filterLabel = selected ? (
		selected
	) : (
		<>
			Filter by Status <ChevronDown />
		</>
	);

	return (
		<DropdownMenu>
			{selected && (
				<Button onClick={() => setSelected('')} variant='ghost' size='icon'>
					<X />
				</Button>
			)}
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' className='w-32'>
					{filterLabel}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className=''>
				<DropdownMenuRadioGroup value={selected} onValueChange={setSelected}>
					{filterOptions.map((option) => (
						<DropdownMenuRadioItem key={option} value={option}>
							{option}
						</DropdownMenuRadioItem>
					))}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
