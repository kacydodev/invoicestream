'use server';

import { createClient } from '@/utils/supabase/server';

export async function getInvoice(id: string) {
	const supabase = await createClient();
	return supabase
		.from('invoices_v02')
		.select(
			`
    *,
    customer: customers_v02 (name, email, customer_address: customer_addresses_v02 (latitude, longitude)),
		invoice_items: invoice_line_items_v02 (quantity, products: products_v02 (name, product_prices: product_prices_v02 (price, currency)))

    `
		)
		.eq('id', id)
		.single();
}

export async function getInvoiceItems(id: string) {
	const supabase = await createClient();
	return supabase
		.from('invoice_line_items_v02')
		.select(
			`
		*, products: products_v02 (*, product_prices: product_prices_v02 (*))
		`
		)
		.eq('invoice_id', id);
}
