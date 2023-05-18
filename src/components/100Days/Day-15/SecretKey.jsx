import Frame from '../../shared/Frame';
import SectionTitle from '../../shared/SectionTitle';
import SrcButton from '../../shared/SrcButton';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SecretKey() {
	const [isPassword, setIsPassword] = useState(false);

	function handleInput(e) {
		const inputValue = e.currentTarget.value;
		if (inputValue === 'password') {
			setIsPassword(true);
		}
	}

	return (
		<Frame>
			<SectionTitle>
				<p className='leading-snug font-sans font-bold'>
					(17/5/23)
				</p>
				Secret code
			</SectionTitle>
			<main
				className={`h-96 w-96 ${
					isPassword
						? 'bg-[url(/assets/Pepegif.gif)]'
						: 'bg-slate-800'
				} flex  flex-col items-center justify-center`}>
				<div className='child:text-center '>
					{isPassword ? (
						<ReveledPassword />
					) : (
						<HiddenPassword handleInput={handleInput} />
					)}
				</div>
			</main>
			<SrcButton src='https://100dayscss.com/days/76/' />
		</Frame>
	);
}

function HiddenPassword({ handleInput }) {
	return (
		<div className='child:h-14 child:w-52'>
			<div className='flex items-center justify-center'></div>
			<input
				type='text'
				placeholder='Enter "password"'
				onChange={handleInput}
				className='text-center bg-blue-600 text-white placeholder:text-white '
			/>
		</div>
	);
}

function ReveledPassword() {
	return (
		<div className='child:h-14 child:w-52 child:flex child:items-center child:justify-center font-bold'>
			<motion.div
				initial={{ rotateX: -180, originY: 1 }}
				animate={{ rotateX: 0 }}
				transition={{
					duration: 1,
					ease: 'linear',
					// repeat: Infinity,
					repeatDelay: 2,
				}}
				className='bg-blue-600 text-white tracking-wide'
				style={{
					// backfaceVisibility: 'hidden',
					perspective: '1000px',
					transformStyle: 'preserve-3d',
				}}>
				<div
					className='absolute w-full h-full'
					style={{ backfaceVisibility: 'hidden' }}
				/>
				<p
					className='absolute'
					style={{ backfaceVisibility: 'hidden' }}>
					Secret Key
				</p>
			</motion.div>
			<div className='bg-amber-400'>
				<span>M4D-E1N-SUS</span>
			</div>
		</div>
	);
}
