import React from 'react';
import './css.css';

export default function ErrorPage404() {
	return (
		<main className='h-screen w-screen bg-[#12b8f9] relative flex flex-col justify-center items-center text-white'>
			<BorderTop />
			<BorderBot />

			<h1 className='font-bold font-Contrail-One text-8xl flex flex-col w-3/5 text-center'>
				<span className='self-start'>Nothing here but</span>{' '}
				<span className='self-end'>
					Ghosts in the machine
				</span>
			</h1>
			<h2 className='text-3xl w-2/5 text-center font-bold tracking-wide mt-8 text-slate-200'>
				It seems that you are trying to reach a page that
				doesn&apos;t exists, you will be redirected to home
				soon
			</h2>
			<h3 className='text-xl w-2/5 text-center font-bold tracking-wide text-slate-200 opacity-80'>
				Take your time to appreciate this marvelous error
				page in the meantime :)
			</h3>
		</main>
	);
}

function BorderTop() {
	return (
		<div className='custom-shape-divider-top-1683063656'>
			<svg
				data-name='Layer 1'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1200 120'
				preserveAspectRatio='none'>
				<path
					d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
					className='shape-fill'></path>
			</svg>
		</div>
	);
}

function BorderBot() {
	return (
		<div className='custom-shape-divider-bottom-1683063506'>
			<svg
				data-name='Layer 1'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1200 120'
				preserveAspectRatio='none'>
				<path
					d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
					className='shape-fill'></path>
			</svg>
		</div>
	);
}
