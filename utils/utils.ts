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

export function formatPrice(price: number, currency?: string) {
	return new Intl.NumberFormat('en-IN', {
		style: 'currency',
		currency: currency || 'AUD',
	}).format(price);
}
