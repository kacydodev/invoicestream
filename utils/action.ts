'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import z from '@/node_modules/zod/v4/classic/external.cjs';
import {
	AuthResponse,
	SignInWithPasswordCredentials,
} from '@supabase/supabase-js';

// const formSchema = z.object({
// 	username: z.string().min(2, {
// 		message: 'Username must be at least 2 characters.',
// 	}),
// });

export async function login(credentials: SignInWithPasswordCredentials) {
	// console.log(credentials);
	const supabase = await createClient();
	const { error } = await supabase.auth.signInWithPassword(credentials);

	if (error) {
		throw error;
	}

	revalidatePath('/dashboard');
	redirect('/dashboard');

	// console.log({ data, error });
	// return { data, error };
}

// export async function loginDeprecated(values: z.infer<typeof formSchema>) {
// 	const supabase = await createClient();

// 	// type-casting here for convenience
// 	// in practice, you should validate your inputs
// 	// const data = {
// 	// 	email: formData.get('email') as string,
// 	// 	password: formData.get('password') as string,
// 	// };

// 	const { error } = await supabase.auth.signInWithPassword({
// 		email: values.username,
// 		password: '1234',
// 	});

// 	if (error) {
// 		redirect('/error');
// 	}

// 	revalidatePath('/', 'layout');
// 	redirect('/');
// }

export async function signup(formData: FormData) {
	const supabase = await createClient();

	// type-casting here for convenience
	// in practice, you should validate your inputs
	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	};

	const { error } = await supabase.auth.signUp(data);

	if (error) {
		redirect('/error');
	}

	revalidatePath('/', 'layout');
	redirect('/');
}
