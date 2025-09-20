import classNames from 'classnames';
import { format } from 'date-fns';

export function getBadgeClass(status: string) {
	return classNames({
		'badge-paid': status === 'paid',
		'badge-pending': status === 'pending',
		'badge-draft': status === 'draft',
	});
}

export function formatDate(date: string) {
	return format(date, 'dd MMM yyyy');
}

export function formatPriceWithCurrency(price: number, currency?: string) {
	return new Intl.NumberFormat('en-IN', {
		style: 'currency',
		currency: currency || 'AUD',
	}).format(price);
}

export function formatPrice(price: number) {
	const result = new Intl.NumberFormat('en-IN', {
		style: 'currency',
		currency: 'USD',
		currencyDisplay: 'narrowSymbol',
	}).format(price);
	return result.slice(1); // remove currency symbol
}

export function calculateItemizedTotal(
	price: number | string,
	quantity: number
) {
	const result = Number(price) * quantity;
	return formatPrice(result);
}
