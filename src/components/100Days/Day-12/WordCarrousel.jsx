import React, { useState } from 'react';
import Frame from '../../shared/Frame';
import SectionTitle from '../../shared/SectionTitle';
import SrcButton from '../../shared/SrcButton';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

import penotter from './assets/Protein.png';

const carrouselWords = [
	'ungovernable',
	'stronger',
	'a force of nature',
];

export default function WordCarrousel() {
	const [currentWord, setCurrentWord] = useState(
		carrouselWords[0]
	);

	useEffect(() => {
		const carrouselChanger = setTimeout(() => {
			setCurrentWord((prevWord) => {
				const INDEX =
					carrouselWords.indexOf(prevWord) + 1 ===
					carrouselWords.length
						? 0
						: carrouselWords.indexOf(prevWord) + 1;

				return carrouselWords[INDEX];
			});
		}, 1000);

		return () => {
			clearTimeout(carrouselChanger);
		};
	}, [currentWord]);

	return (
		<Frame>
			<SectionTitle>
				<p className='leading-snug font-sans font-bold'>
					(1/5/23)
				</p>
				World Carrousel{' '}
			</SectionTitle>
			<article className='w-96 h-96 bg-lime-400 relative'>
				<img
					src={penotter}
					className='w-11/12 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
				/>
				<section className='text-yellow-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-bold font-Prompt text-4xl absolute left-1/2 mt-5 -translate-x-1/2 text-center'>
					<p className=''>Become </p>
					<div className=' overflow-hidden'>
						<AnimatePresence mode='wait'>
							<motion.p
								key={currentWord}
								initial={{ translateY: -50 }}
								animate={{ translateY: 0 }}
								exit={{ translateY: 50 }}
								transition={{ duration: 0.5, delay: 1 }}
								className='whitespace-nowrap uppercase'>
								{' '}
								{currentWord}
							</motion.p>
						</AnimatePresence>
					</div>
				</section>
			</article>
			<SrcButton src='https://100dayscss.com/days/73/' />
		</Frame>
	);
}
