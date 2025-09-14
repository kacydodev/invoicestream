import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
	return (
		<>
			{/* <Navbar /> */}
			<main>
				<section>
					<Button variant='link' asChild>
						<Link href='/dashboard'>
							Dashboard
							<ArrowRight />
						</Link>
					</Button>
				</section>
			</main>
		</>
	);
}
