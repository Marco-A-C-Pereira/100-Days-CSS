import React from 'react';
import './css.css';
import data from './quotes.json';
import { ShareIcon } from '@heroicons/react/24/solid';

export default function ShareScreen() {
	const QuoteCards = data.map((entry) => {
		return (
			<QuoteCard
				key={entry.quote}
				author={entry.author}
				book={entry.book}
				quote={entry.quote}
			/>
		);
	});

	console.log(QuoteCards);

	return (
		<main className='bg-[#130B00] text-[#F6EED5] p-2 font-Space-Grotesk'>
			<ShareNav />
			<h1 className='tracking-wider text-3xl mt-2 mb-4'>
				Babel Quotes:
			</h1>
			<section className='flex flex-col gap-6 last:mb-4 '>
				{QuoteCards}
			</section>
		</main>
	);
}

function ShareNav() {
	return (
		<section className='text-lg font-bold font-Prompt tracking-wider flex border-b border-[#F6EED5] pb-2  '>
			<img
				src='/assets/RuinaBook.png'
				className='h-14'
			/>
			<ul className='flex items-center gap-4 mx-auto'>
				<li>Home</li>
				<li>Trending</li>
				<li>About Us</li>
			</ul>
		</section>
	);
}

function QuoteCard({ author, quote, book }) {
	return (
		<article className='border border-[#624025] w-11/12 mx-auto rounded-xl shadow-md shadow-[#E4BA78]'>
			<p className='p-2 border-b border-[#624025] text-justify'>
				&ldquo;{quote}&ldquo;
			</p>
			<div className='flex items-center justify-end px-2 my-2 gap-4 text-[#E4BA78]'>
				<p className='text-sm mr-auto'>
					{author} - {book}
				</p>

				<ShareIcon className='h-6' />
			</div>
		</article>
	);
}
