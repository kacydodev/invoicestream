import { createClient } from '@/utils/supabase/server';

type StatusType = 'paid' | 'pending' | 'draft';

const supabase = await createClient();

export function getInvoices() {
	return supabase.from('invoices_v02').select(
		`
    status, invoice_id, payment_due, total,
    customer: customers_v02 (name), 
    invoice_items: invoice_line_items_v02 (quantity, products: products_v02 (product_prices: product_prices_v02 (price, currency)))
    `
	);
}

export function getInvoicesByStatus(status: StatusType) {
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
