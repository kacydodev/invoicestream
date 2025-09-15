import { createClient } from '@/utils/supabase/client';

export default async function Invoices() {
	const supabase = createClient();
	const { data } = await supabase.from('invoices_v02').select(
		// `*, customer:customers_v02 (*, customer_addresses_v02 (*)), invoice_items:invoice_line_items_v02 (*, products_v02 (*, product_prices_v02 (*)))`
		`
    *,
    customer: customers_v02 (name), 
    invoice_items: invoice_line_items_v02 (quantity, products: products_v02 (name, product_prices: product_prices_v02 (price, currency)))
    `
	);
	// .eq('id', 457)
	// .single();
	return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
