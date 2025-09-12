import { logoMark } from '@/assets/logo';
import { BookUserIcon, MoonIcon } from 'lucide-react';

function User() {
	return (
		<li className='w-9 h-9 flex items-center justify-center rounded-full bg-background text-primary'>
			<p className='mb-0.5 text-xl font-semibold'>ME</p>
		</li>
	);
}

export default function Navbar() {
	return (
		<aside className='flex flex-col gap-6 items-center justify-between rounded-r-lg text-sm bg-primary-darker text-input'>
			<ul className='flex flex-col gap-6 items-center justify-center'>
				{logoMark}
				<User />
				<li>
					<BookUserIcon className='size-6 text-input' />
				</li>
			</ul>

			<MoonIcon className='size-6 text-input' />
		</aside>
	);
}
