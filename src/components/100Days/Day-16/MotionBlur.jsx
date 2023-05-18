import Frame from '../../shared/Frame';
import SectionTitle from '../../shared/SectionTitle';
import SrcButton from '../../shared/SrcButton';
import { motion } from 'framer-motion';

export default function MotionBlur() {
	const CIRCLES = 8;

	return (
		<Frame>
			<SectionTitle>MotionBlur</SectionTitle>
			<main className='w-96 h-96 bg-red-300 p-8 flex items-center justify-center '>
				<section className='relative w-full'>
					<OuterCircle>
						{Array.from({ length: CIRCLES }, (_, index) => {
							return (
								<Circle
									key={index}
									distance={index + 1}
								/>
							);
						})}
					</OuterCircle>
				</section>
			</main>
			<SrcButton src='https://100dayscss.com/days/77/' />
		</Frame>
	);
}

function OuterCircle({ children }) {
	return (
		<motion.div
			initial={{ left: 0 }}
			animate={{ left: '80%' }}
			transition={{
				repeat: Infinity,
				repeatType: 'reverse',
				duration: 1,
				ease: 'easeInOut',
			}}
			className='bg-cyan-200 w-16 h-16 rounded-full absolute top-1/2 -translate-y-1/2 z-30 '>
			{children}
		</motion.div>
	);
}

function Circle({ distance }) {
	const opacity = 100 / distance / 100;

	return (
		<motion.div
			initial={{ opacity: opacity }}
			animate={{
				x: [0, -10 * distance, 0, 10 * distance, 0],
			}}
			// initial={{ x: -50 }}
			// animate={{ x: 0 }}
			transition={{
				repeat: Infinity,
				duration: 2,
				ease: 'easeInOut',
			}}
			className='bg-cyan-200 w-16 h-16 rounded-full absolute'
		/>
	);
}
