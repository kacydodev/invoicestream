'use server';

import { createClient } from '@/utils/supabase/server';

export async function getInvoice(id: string) {
	const supabase = await createClient();
	return (
		supabase
			.from('invoices_v02')
			.select(
				`
    id, status, description, invoice_id, payment_due, payment_term, total,
    customer: customers_v02 (name, email, customer_address: customer_addresses_v02 (latitude, longitude)), 
    invoice_items: invoice_line_items_v02 (quantity, products: products_v02 (name, product_prices: product_prices_v02 (price, currency)))
    `
			)
			// .select(
			// 	`
			// id, status, invoice_id, payment_due, total,
			// customer: customers_v02 (name),
			// invoice_items: invoice_line_items_v02 (quantity, products: products_v02 (*, product_prices: product_prices_v02 (price, currency)))
			// `
			// )
			.eq('id', id)
			.single()
	);
}
