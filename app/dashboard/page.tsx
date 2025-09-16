'use client';

import Header from './components/Header';
import Invoices from './components/Invoices';
import { getInvoicesByStatus } from '@/queries/get-invoices';
import Error from '@/components/Error';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { StatusType } from '@/utils/types';

export default function DashboardPage() {
	const [status, setStatus] = useState<StatusType | ''>('');
	console.log('status:', status);

	const { data, error, isLoading } = useQuery({
		queryKey: ['invoices'],
		queryFn: () => getInvoicesByStatus(status),
	});

	const count = data && data.length;

	if (isLoading) {
		return (
			<main>
				<p>Loading...</p>
			</main>
		);
	}

	if (error) <Error error={error} />;

	return (
		<>
			<main>
				<Header count={count || 0} status={status} setStatus={setStatus} />
				<Invoices data={data} />
			</main>
		</>
	);
}
