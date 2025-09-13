import { logoMark } from '@/assets/logo';
import { LogInIcon, MoonIcon } from 'lucide-react';

function User() {
	return (
		<li className='w-8 h-8 flex items-center justify-center rounded-full bg-input text-primary'>
			<p className='mb-0.5 text-xl font-semibold'>KC</p>
		</li>
	);
}

export default function Sidebar() {
	return (
		<aside className='flex flex-col gap-6 items-center justify-between rounded-r-lg text-sm bg-sidebar'>
			<ul className='flex flex-col gap-6 items-center justify-center'>
				{logoMark}
				<li>
					<LogInIcon className='size-6 text-input' />
					Log In
				</li>
			</ul>

			<MoonIcon className='size-6 text-input' />
		</aside>
	);
}
