'use client';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { StatusType } from '@/utils/types';
import { ChevronDown, X } from 'lucide-react';
import React from 'react';
import { useState } from 'react';

interface FilterDropdown {
	status: StatusType | '';
	setStatus: React.Dispatch<React.SetStateAction<StatusType | ''>>;
}

const filterOptions = ['paid', 'pending', 'draft'];

export function FilterDropdown({ status, setStatus }: FilterDropdown) {
	const filterLabel = status ? (
		status
	) : (
		<>
			Filter by Status <ChevronDown />
		</>
	);

	return (
		<DropdownMenu>
			{status && (
				<Button onClick={() => setStatus('')} variant='ghost' size='icon'>
					<X />
				</Button>
			)}
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' className='w-32'>
					{filterLabel}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className=''>
				<DropdownMenuRadioGroup
					value={status}
					onValueChange={(value) => setStatus(value as StatusType | '')}
				>
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
