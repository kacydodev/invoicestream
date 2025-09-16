import { createClient } from '@/utils/supabase/client';
import { TypedSupabaseClient } from '@/utils/types';

type StatusType = 'paid' | 'pending' | 'draft' | '';

export async function getInvoices() {
	const supabase = createClient();
	const response = await supabase.from('invoices_v02').select(
		`
    id, status, invoice_id, payment_due, total,
    customer: customers_v02 (name), 
    invoice_items: invoice_line_items_v02 (quantity, products: products_v02 (product_prices: product_prices_v02 (price, currency)))
    `
	)
	.throwOnError();
	return response.data
}

export async function getInvoicesByStatus(status: StatusType) {
	const PARAMETERS = 	`
    id, status, invoice_id, payment_due, total,
    customer: customers_v02 (name),
    invoice_items: invoice_line_items_v02 (quantity, products: products_v02 (product_prices: product_prices_v02 (price, currency)))
    `
	const supabase = createClient();
	if(status === '') {
		// shows all invoices
		const response =  await supabase
		.from('invoices_v02')
		.select(PARAMETERS)
		.throwOnError();
		return response.data;
	} else {
		// shows invoices by status
		const response =  await supabase
		.from('invoices_v02')
		.select(PARAMETERS)
		.eq('status', status)
		.throwOnError();
		return response.data;
	}

}
