'use client';

import { login } from '@/utils/action';
import { Button } from './ui/button';

export default function Login() {
	const credentials = {
		email: 'do.inby@gmail.com',
		password: 'PribOno1ra-2fr1@LzIF',
	};

	return (
		<>
			<Button onClick={() => login(credentials)}>Submit</Button>
		</>
	);
}
