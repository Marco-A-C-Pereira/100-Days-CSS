import React, { useState } from 'react';
import Frame from '../../shared/Frame';
import SectionTitle from '../../shared/SectionTitle';
import SrcButton from '../../shared/SrcButton';
import { motion } from 'framer-motion';

function Sparkle() {
	return (
		<>
			<div className='w-1 h-4 absolute top-1/2 left-1/2 -rotate-45 -translate-x-[2rem] -translate-y-[2rem] z-50 bg-red-500' />
		</>
	);
}

function SparkleContainer({ isChecked }) {
	const TOTALSPARKLES = 8;

	const sparkles = Array.from(
		{ length: TOTALSPARKLES },
		(_, index) => {
			const angle = (index + 1) * (360 / TOTALSPARKLES);

			return (
				<motion.div
					className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
					key={index}>
					<motion.div animate={{ rotate: angle }}>
						<motion.div
							animate={{
								translateX: isChecked ? -50 : 0,
								opacity: isChecked ? [0, 1, 0] : 0,
								maxWidth: isChecked ? ['100%', '0%'] : 0,
							}}
							transition={{ duration: 0.6 }}
							className={` w-8 h-[1px] bg-sky-300 -z-10 `}></motion.div>
					</motion.div>
				</motion.div>
			);
		}
	);

	return (
		<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
			{sparkles}
		</div>
	);
}

function RoundedCheckbox({ isChecked, handleClick }) {
	// const OUTTERRINGSTYLE = isChecked ? "bg-indigo-500" : "bg-indigo-500";
	const INNERINGSTYLE = isChecked
		? 'bg-green-500 w-3 h-3'
		: ' bg-white w-full h-full';

	return (
		<label className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex z-10'>
			<input
				className='peer appearance-none'
				type='checkbox'
				onClick={() =>
					handleClick((prevIsChecked) => !prevIsChecked)
				}
			/>
			<div
				className={`bg-indigo-500 flex items-center justify-center border-indigo-500 border-2 rounded-full h-12 w-12 cursor-pointer transition duration-500`}>
				<div
					className={`${INNERINGSTYLE} bg-stone-300 rounded-full trasition duration-500`}></div>
			</div>
		</label>
	);
}

export default function SparkleCheckbox() {
	const [isChecked, setisChecked] = useState(false);

	return (
		<Frame>
			<SectionTitle>
				<p className='leading-snug font-sans font-bold'>
					(24/4/23)
				</p>
				Sparkle Checkbox
			</SectionTitle>
			<article className='relative bg-slate-900 h-52 w-52'>
				<RoundedCheckbox
					isChecked={isChecked}
					handleClick={setisChecked}
				/>
				<SparkleContainer isChecked={isChecked} />
			</article>
			<SrcButton src={'https://100dayscss.com/days/66/'} />
		</Frame>
	);
}
