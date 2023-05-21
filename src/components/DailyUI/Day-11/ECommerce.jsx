import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const HellCollection = [
	{
		name: 'Smoldering set',
		URL: '/assets/Fashion/Hellworld1.jpg',
	},
	{
		name: 'Fits of Torment',
		URL: '/assets/Fashion/Hellworld2.jpg',
	},
	{
		name: 'La creatura',
		URL: '/assets/Fashion/Hellworld3.jpg',
	},
];

const NuclearWinter = [
	{
		name: 'Gas Coat',
		URL: '/assets/Fashion/NuclearWinterFashion1.jpg',
	},
	{
		name: 'Molten Face Scarf',
		URL: '/assets/Fashion/NuclearWinterFashion2.jpg',
	},
	{
		name: 'The Stranger',
		URL: '/assets/Fashion/NuclearWinterFashion3.jpg',
	},
];

const ClownWorld = [
	{
		name: 'Funny Dresses',
		URL: '/assets/Fashion/ClownWorld1.jpg',
	},
	{
		name: 'Rockstar Funnies',
		URL: '/assets/Fashion/ClownWorld2.jpg',
	},
	{
		name: 'Financial Clowns',
		URL: '/assets/Fashion/ClownWorld3.jpg',
	},
];

export default function Ecommerce() {
	return (
		<section className='bg-white py-6 px-8 '>
			<Nav />
			<Hero />
			<main className='mt-14'>
				<div className='flex flex-col'>
					<h3 className='text-3xl font-bold uppercase'>
						Recent Collections:
					</h3>
					<Carrousel
						title='Hell World'
						data={HellCollection}
						isHot={true}
					/>
					<Carrousel
						title='Nuclear Winter'
						data={NuclearWinter}
						isHot={true}
					/>
					<Carrousel
						title='Clown World'
						data={ClownWorld}
					/>
					<button className='bg-red-700 text-white px-8 py-2 text-2xl font-bold mx-auto my-8'>
						Browse for more
					</button>
				</div>
				<div>
					<h3 className='text-3xl font-bold uppercase'>
						Recent Blogposts:
					</h3>
					<div className='flex mx-auto mt-4 justify-around'>
						<article className='w-72'>
							<h5 className='text-2xl font-bold'>
								5 Ways to improve your fashion game
							</h5>
							<p className='font-Flow-Circular text-justify text-lg'>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Illum veniam perspiciatis
								atque similique natus assumenda quis aliquam
								voluptate est incidunt nemo dicta qui
								maiores commodi, molestiae vero rem.
								Deleniti, laudantium!
							</p>
						</article>
						<article className='w-72'>
							<h5 className='text-2xl font-bold'>
								The perfect fit for your body
							</h5>
							<p className='font-Flow-Circular text-justify text-lg'>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Illum veniam perspiciatis
								atque similique natus assumenda quis aliquam
								voluptate est incidunt nemo dicta qui
								maiores commodi, molestiae vero rem.
								Deleniti, laudantium!
							</p>
						</article>
						<article className='w-72'>
							<h5 className='text-2xl font-bold'>
								Monkey nuts ??? How this can help you
								achieve peak beauty
							</h5>
							<p className='font-Flow-Circular text-justify text-lg'>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Illum veniam perspiciatis
								atque similique natus assumenda quis aliquam
								voluptate est incidunt nemo dicta qui
								maiores commodi, molestiae vero rem.
								Deleniti, laudantium!
							</p>
						</article>
						<article className='w-72'>
							<h5 className='text-2xl font-bold'>
								10 new fashion trends for the digital dark
								age
							</h5>
							<p className='font-Flow-Circular text-justify text-lg'>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Illum veniam perspiciatis
								atque similique natus assumenda quis aliquam
								voluptate est incidunt nemo dicta qui
								maiores commodi, molestiae vero rem.
								Deleniti, laudantium!
							</p>
						</article>
					</div>
				</div>
			</main>
			<FeetLeg />
		</section>
	);
}

function Nav() {
	return (
		<section className='h-14 flex  items-center gap-8 border-b border-neutral-400 pb-8 mt-4'>
			<h1 className='font-Rock-Salt font-bold text-white bg-red-700 w-fit h-fit p-4 text-2xl'>
				Fashioneerzz
			</h1>
			<li className='uppercase flex gap-8 text-xl font-bold tracking-wide '>
				<ul>
					<a href=''>Whats New</a>
				</ul>
				<ul>
					<a href=''>Shop</a>
				</ul>
				<ul>
					<a href=''>Sale</a>
				</ul>
				<ul>
					<a href=''>Blog</a>
				</ul>
			</li>
		</section>
	);
}

function Hero() {
	return (
		<>
			<article className='bg-black flex w-7/12 mx-auto mt-14'>
				<div className='text-red-700 font-Rock-Salt p-4 flex flex-col'>
					<h2 className='font-bold text-3xl text-center'>
						New Hell World Collection
					</h2>

					<p className='text-xl text-justify mt-16 m-8 leading-relaxed tracking-wider'>
						Hell awaits you ! From the depths a new clothing
						collection emerges ready to give the most
						frightening and cool chills
					</p>

					<button className='text-white font-bold px-12 py-4 bg-red-700 text-xl mx-auto mt-auto mb-8'>
						Sell your Soul
					</button>
				</div>
				<img
					src='/assets/Fashion/Hellworld1.jpg'
					alt='This is horrible'
					className='h-[32rem]'
				/>
			</article>
			<div className='flex gap-4 justify-center mt-4'>
				<button className='h-8 w-8 border border-black rounded-full bg-red-500'></button>
				<button className='h-8 w-8 border border-black rounded-full'></button>
				<button className='h-8 w-8 border border-black rounded-full'></button>
			</div>
		</>
	);
}

function Carrousel({ title, data, isHot = false }) {
	const cards = Array.from(data, (v, k) => {
		return (
			<CarrouselCard
				key={k}
				data={v}
			/>
		);
	});

	function CarrouselCard({ data }) {
		return (
			<article className='w-fit shadow-md shadow-neutral-500 shrink-0'>
				<img
					className='h-52'
					src={data.URL}
				/>
				<p className='text-center font-bold text-lg'>
					{data.name}
				</p>
				<button className='w-full bg-green-400 flex items-center justify-center '>
					<ShoppingCartIcon className='text-white h-8' />
				</button>
			</article>
		);
	}

	function HotLabel() {
		return (
			<span className='bg-red-500 font-bold text-white text-base p-1'>
				HOT
			</span>
		);
	}

	return (
		<section className='mt-8'>
			<h3 className='font-bold text-2xl border-b border-black pb-2 '>
				{title} {isHot && <HotLabel />}
			</h3>
			<div className='mt-4 flex gap-10 overflow-hidden'>
				{cards}
				{cards}
				{cards}
			</div>
		</section>
	);
}

function FeetLeg() {
	return (
		<section className='flex w-10/12 mx-auto m-8 mt-12'>
			<div className='flex flex-col gap-8  justify-around w-64'>
				<h1 className='font-Rock-Salt font-bold text-white bg-red-700 w-fit h-fit p-4 text-lg'>
					Fashioneerzz
				</h1>
				<p className='text-lg'>
					Alternative fashion for alternative people, be
					your new you
				</p>
				<div className='child:h-10 flex gap-4'>
					<img src='/assets/icons/Twitter.png' />
					<img src='/assets/icons/Telegram.png' />
					<img src='/assets/icons/VK.png' />
					<img src='/assets/icons/Gmail.png' />
				</div>
			</div>
			<div className='flex justify-around w-full'>
				<article className='text-xl'>
					<h5 className='font-bold'>Seasons/Temperature</h5>
					<ul className='text-lg flex flex-col gap-4 mt-4 '>
						<li>Winter</li>
						<li>Autumn</li>
						<li>Spring</li>
						<li>Summer</li>
						<li>Cold</li>
						<li>Hot</li>
					</ul>
				</article>
				<article className='text-xl'>
					<h5 className='font-bold'>Vibe</h5>
					<ul className='text-lg flex flex-col gap-4 mt-4 '>
						<li>Kawai</li>
						<li>Cool</li>
						<li>Chills</li>
						<li>Alternative</li>
						<li>Creepy</li>
					</ul>
				</article>
				<article className='text-xl'>
					<h5 className='font-bold'>Resources</h5>
					<ul className='text-lg flex flex-col gap-4 mt-4 '>
						<li>Pricing Guide</li>
						<li>Become a Partner</li>
						<li>Return Policy</li>
						<li>Contact Us</li>
						<li>Blog</li>
					</ul>
				</article>
			</div>
		</section>
	);
}
