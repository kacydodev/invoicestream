'use client';

import { Button } from './ui/button';
import { Form } from './ui/form';
import { useForm } from 'react-hook-form';
import { login, type Credentials } from '@/utils/action';
import { Input } from './ui/input';
import { Card, CardAction, CardContent, CardHeader } from './ui/card';

export default function Login() {
	const credentials = {
		email: 'do.inby@gmail.com',
		password: 'PribOno1ra-2fr1@LzIF',
	};
	const form = useForm<Credentials>();
	const handleSubmit = form.handleSubmit(() => {
		// console.log(form.getValues());
		return login(credentials);
	});

	return (
		<Card className='w-full max-w-sm'>
			<CardHeader>Login or Sign up</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit}>
					<Form {...form}>
						<Input
							{...form.register('email')}
							type='email'
							placeholder='Email'
						/>
						<Input
							{...form.register('password')}
							type='password'
							placeholder='Password'
						/>
						<CardAction>
							<Button type='submit'>Login</Button>
							<Button type='submit'>Sign up</Button>
						</CardAction>
					</Form>
				</form>
			</CardContent>
		</Card>
	);
}
