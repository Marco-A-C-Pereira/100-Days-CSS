import {
	CheckCircleIcon,
	XCircleIcon,
} from '@heroicons/react/24/outline';

export default function FlashMessage() {
	return (
		<main className='flex items-center justify-center h-screen gap-8 bg-neutral-400 '>
			<Screen>
				<div className='bg-green-200 aspect-[4/5] w-10/12 mx-auto rounded-xl flex flex-col justify-between p-8 relative overflow-hidden drop-shadow-xl'>
					<CheckCircleIcon className='h-28 text-green-500 ' />
					<p className='font-bold text-center'>
						HUZAH ! Your request was submitted. Await in
						your residence and do not contact any goblins.
					</p>

					<button className='uppercase text-white bg-green-500 px-8 py-2 rounded-full'>
						I Understand
					</button>

					<div className='absolute -right-5 top-2 rotate-45 h-2 w-20 bg-green-500' />
					<div className='absolute -right-5 top-7 rotate-45 h-2 w-32 bg-green-500' />
				</div>
			</Screen>
			<Screen>
				<div className='bg-red-200 aspect-[4/5] w-10/12 mx-auto rounded-xl flex flex-col justify-between p-8 relative overflow-hidden drop-shadow-xl'>
					<XCircleIcon className='h-28 text-red-500 ' />
					<p className='font-bold text-center'>
						Uh oh ! The goblins ate your request, please try
						again in some minutes
					</p>

					<button className='uppercase text-white bg-red-500 px-8 py-2 rounded-full'>
						Try Again
					</button>

					<div className='absolute -right-5 top-2 rotate-45 h-2 w-20 bg-red-500' />
					<div className='absolute -right-5 top-7 rotate-45 h-2 w-32 bg-red-500' />
				</div>
			</Screen>
		</main>
	);
}

function Screen({ children }) {
	return (
		<article className='w-[360px] h-[740px] bg-white rounded-3xl flex flex-col justify-center items-center'>
			{children}
		</article>
	);
}
