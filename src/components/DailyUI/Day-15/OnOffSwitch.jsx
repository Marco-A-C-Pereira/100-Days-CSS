import { useState, useEffect } from 'react';
import { moon, star } from './paths';
import { animate, motion, progress } from 'framer-motion';
import { interpolate } from 'flubber';

export default function OnOffSwitch() {
	const [darkTheme, setDarkTheme] = useState(false);

	// useEffect(() => {
	// 	const animation = animate(progress, path)

	// 	return () => {
	// 		second;
	// 	};
	// }, [darkTheme]);

	return (
		<main className=' flex h-screen flex-col items-center justify-center '>
			<h1 className='mb-10 font-Roboto-Condensed text-5xl font-bold'>
				Yet another theme changer
			</h1>
			<section
				className={`flex aspect-square h-3/6 items-center justify-center border-2 border-black bg-cover drop-shadow-md  transition duration-100 ${
					darkTheme
						? 'bg-[url(https://m.media-amazon.com/images/I/51p+AVed75L._AC_SY355_.jpg)]'
						: 'bg-[url(https://previews.123rf.com/images/cgdeaw/cgdeaw2005/cgdeaw200500148/147140001-cute-clouds-seamless-on-pastel-square-pink-color-background-soft-pink-pastel-with-cloud-cute-and.jpg)]'
				}`}>
				<input
					type='checkbox'
					onChange={() =>
						setDarkTheme((currDarkTheme) => !currDarkTheme)
					}
					name=''
					id=''
					className='mb-44 aspect-[4/2] h-10 appearance-none rounded-full bg-pink-400 ring transition checked:bg-blue-400 active:-translate-y-1 active:bg-pink-500 checked:active:bg-blue-500'
				/>
			</section>
		</main>
	);
}
