import React from 'react';
import Frame from '../../shared/Frame';
import SectionTitle from '../../shared/SectionTitle';
import { motion } from 'framer-motion';
import SrcButton from '../../shared/SrcButton';

function Elipse({ rotation, tailwindSize, color, delay }) {
	return (
		<motion.div
			initial={{
				translateX: '-50%',
				translateY: '-50%',
			}}
			animate={{
				opacity: [0, 0.75, 1],
				rotate: rotation,
				borderRadius: ['0%', '50%', '100%'],
				height: tailwindSize === '40' ? '100%' : '50%',
			}}
			transition={{
				duration: 1,
				repeat: Infinity,
				repeatType: 'reverse',
				repeatDelay: 0.25,
				delay: delay,
			}}
			className={`border-2 ${color} h-${tailwindSize} w-${tailwindSize} absolute top-1/2 left-1/2 `}></motion.div>
	);
}

function ElipseCircle() {
	const Circle = Array.from({ length: 9 }, (_, index) => {
		const DELAY = 0;
		const TAILWINDCOLOR = 'border-green-500';
		const SIZEINTAILWIND = '40';
		const rotation = 20 * index;
		return (
			<Elipse
				key={index}
				tailwindSize={SIZEINTAILWIND}
				color={TAILWINDCOLOR}
				rotation={rotation}
				delay={DELAY}
			/>
		);
	});

	return Circle;
}

function SmallerCircle() {
	const Circle = Array.from({ length: 9 }, (_, index) => {
		const DELAY = 2.5;
		const TAILWINDCOLOR = 'border-blue-500';
		const SIZEINTAILWIND = '20';
		const rotation = -80 * index;

		return (
			<Elipse
				key={index}
				tailwindSize={SIZEINTAILWIND}
				rotation={rotation}
				color={TAILWINDCOLOR}
				delay={DELAY}
			/>
		);
	});

	return Circle;
}

export default function SpinningEllipses() {
	return (
		<Frame>
			<SectionTitle>
				<p className='leading-snug font-sans font-bold'>
					(23/4/23)
				</p>
				Animação Elipses{' '}
			</SectionTitle>
			<article className='h-80 bg-black w-80 relative overflow-hidden'>
				<ElipseCircle />
				<SmallerCircle />
			</article>
			<SrcButton src={'https://100dayscss.com/days/65/'}>
				{' '}
			</SrcButton>
		</Frame>
	);
}
