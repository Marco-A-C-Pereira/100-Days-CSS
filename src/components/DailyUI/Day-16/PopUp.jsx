import { XMarkIcon } from '@heroicons/react/24/solid';

export default function PopUp() {
	function TextHighLight({ children }) {
		return (
			<span className='text-3xl font-bold text-amber-500'>
				{children}
			</span>
		);
	}

	return (
		<div className='flex h-screen items-center bg-white'>
			<section className='relative mx-auto flex aspect-[3/2] h-[30rem] gap-2 bg-yellow-100 font-poppins ring-8 ring-amber-400 '>
				{/* <section className='relative mx-auto mt-52 flex aspect-[3/2] h-[30rem] gap-2 border-4 border-amber-500 bg-slate-100 font-poppins '> */}
				<XMarkIcon className='absolute right-0 top-0 h-16 -translate-y-8 translate-x-8 rounded-full bg-amber-500 p-1 text-white' />
				<div className='m-0 flex h-full w-7/12 shrink-0  flex-col items-center  justify-around p-6 text-xl'>
					<div className='flex flex-col gap-4'>
						<h2 className='text-center text-3xl font-bold tracking-wide text-amber-500'>
							First Time Discount
						</h2>
						<p className='text-justify font-Space-Grotesk'>
							We've detected that it's the first time you
							shop at our store so we decided to give you a
							special limited deal:
						</p>
						<p className='text-justify font-Space-Grotesk text-2xl'>
							For the next{' '}
							{<TextHighLight>60</TextHighLight>} minutes
							you will have discounts going up to{' '}
							{<TextHighLight>40%</TextHighLight>} on our
							products
						</p>
					</div>
					<button className='bg-blue-600 px-6 py-3 font-poppins text-2xl font-bold uppercase tracking-wider text-amber-500 drop-shadow'>
						Shop Away
					</button>
				</div>
				<div className='h-full w-full bg-[url(https://images.unsplash.com/photo-1588673523898-687eaf18c036?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=790&q=80)] bg-cover'></div>
			</section>
		</div>
	);
}
