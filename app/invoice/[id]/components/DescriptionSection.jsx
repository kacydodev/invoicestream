import Error from '@/components/Error';
import { Hash } from 'lucide-react';
import { formatDate } from '@/utils/utils';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { setDefaults, geocode, RequestType } from 'react-geocode';

export default async function DescriptionSection({ invoice, children }) {
	const {
		created_at,
		invoice_id,
		description,
		payment_due,
		payment_term,
		customer: {
			name,
			email,
			customer_address: [{ latitude, longitude }],
		},
	} = invoice;
	const formattedCreatedAt = formatDate(created_at);
	const formattedPaymentDue = formatDate(payment_due);

	setDefaults({
		key: process.env.GOOGLE_MAPS_API_KEY, // Your API key here.
		language: 'en', // Default language for responses.
	});

	const latlng = `${latitude},${longitude}`;
	// Get formatted address, city, state, country from latitude & longitude.
	const { street_number, street_name, city, state, country, zipcode } =
		await geocode(RequestType.LATLNG, latlng, {
			location_type: 'ROOFTOP', // Override location type filter for this request.
			enable_address_descriptor: true, // Include address descriptor in response.
		})
			.then(({ results }) => {
				// const address = results[0].formatted_address;
				// console.log(results[0].address_components);
				const result = results[0].address_components.reduce(
					(acc, component) => {
						if (component.types.includes('street_number'))
							acc.street_number = component.long_name;
						else if (component.types.includes('route'))
							acc.street_name = component.long_name;
						else if (component.types.includes('locality'))
							acc.city = component.long_name;
						else if (component.types.includes('administrative_area_level_1'))
							acc.state = component.short_name;
						else if (component.types.includes('country'))
							acc.country = component.long_name;
						else if (component.types.includes('postal_code'))
							acc.zipcode = component.long_name;
						return acc;
					},
					{}
				);
				return result;
				// console.log(city, state, country);
				// console.log(address);
			})
			.catch(console.error);

	return (
		<Card className='w-2xl'>
			<CardHeader>
				<CardTitle className='font-bold'>
					<Hash className='inline size-4 text-muted-foreground' />
					{invoice_id}
				</CardTitle>
				<CardDescription className='text-muted-foreground'>
					{description}
				</CardDescription>
			</CardHeader>
			<CardContent className='grid grid-cols-3 gap-6'>
				<div className='[&>h4:first-of-type]:mt-0 [&>h4]:mt-4'>
					<h4 className='text-muted-foreground'>Invoice Date:</h4>
					<p>{formattedCreatedAt}</p>
					<h4 className='text-muted-foreground'>Payment Due:</h4>
					<p>{formattedPaymentDue}</p>
					<h4 className='text-muted-foreground'>Payment Term:</h4>
					<p>{payment_term} days</p>
				</div>
				<div>
					<h4 className='text-muted-foreground'>Bill to:</h4>
					<p>{name}</p>
					<p>
						{street_number} {street_name} <br />
						{city} {state} {zipcode} <br />
						{country}
					</p>
				</div>
				<div>
					<h4 className='text-muted-foreground'>Sent to:</h4>
					<p>{email}</p>
				</div>

				{children}
			</CardContent>
		</Card>
	);
}
