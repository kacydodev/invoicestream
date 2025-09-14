'use server';

import { createClient } from '@/utils/supabase/server';

type StatusType = 'paid' | 'pending' | 'draft';

export async function getInvoices() {
	const supabase = await createClient();
	return supabase.from('invoices_v02').select(
		`
    id, status, invoice_id, payment_due, total,
    customer: customers_v02 (name), 
    invoice_items: invoice_line_items_v02 (quantity, products: products_v02 (product_prices: product_prices_v02 (price, currency)))
    `
	);
}

export async function getInvoicesByStatus(status: StatusType) {
	const supabase = await createClient();
	return supabase
		.from('invoices_v02')
		.select(
			`
    status, invoice_id,
    customer: customers_v02 (name), 
    invoice_items: invoice_line_items_v02 (quantity, products: products_v02 (product_prices: product_prices_v02 (price, currency)))
    `
		)
		.eq('status', status);
}
