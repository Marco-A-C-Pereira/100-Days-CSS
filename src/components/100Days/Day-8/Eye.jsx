import React, { useState } from 'react';
import Frame from '../../shared/Frame';
import SectionTitle from '../../shared/SectionTitle';
import SrcButton from '../../shared/SrcButton';
import './Eye.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Eye() {
	// const [eyePosition, seteyePosition] = useState({ x: "50%", y: "50%" });
	// const [globalMousePosition, setGlobalMousePosition] = useState({});
	// const [localMousePosition, setLocalMousePosition] = useState({});

	// console.log(localMousePosition.x, localMousePosition.y);

	// const handleMouseMove = (event) => {
	//   // 👇 Get mouse position relative to element
	//   const localX = event.clientX - event.target.offsetLeft;
	//   const localY = event.clientY - event.target.offsetTop;

	//   setLocalMousePosition({ x: localX, y: localY });
	// };

	// useEffect(() => {
	//   const handleMouseMove = (e) => {
	//     setGlobalMousePosition({
	//       x: e.clientX,
	//       y: e.clientY,
	//     });
	//   };

	//   window.addEventListener("mousemove", handleMouseMove);

	//   return () => {
	//     window.removeEventListener("mousemove", handleMouseMove);
	//   };
	// }, []);

	return (
		<Frame>
			<SectionTitle> Eye </SectionTitle>
			<article
				className='h-96 w-96 relative bg-slate-700 z-10'
				// onMouseMove={handleMouseMove}
			>
				<div
					className={`
          absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
          h-40 w-40 bg-sky-50 rotate-45 overflow-hidden eye
          `}>
					<div className='h-24 w-60 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 -rotate-45'>
						<motion.div
							initial={{ translateY: -100 }}
							animate={{ translateY: 0 }}
							transition={{
								duration: 0.5,
								repeat: Infinity,
								repeatType: 'reverse',
							}}
							className='
            bg-emerald-500 h-1/2 w-full '
						/>
						<motion.div
							initial={{ translateY: 100 }}
							animate={{ translateY: 0 }}
							transition={{
								duration: 0.5,
								repeat: Infinity,
								repeatType: 'reverse',
							}}
							className='
            bg-emerald-500 h-1/2 w-full'
						/>
					</div>

					<motion.div
						// initial={{ top: "50%", left: "50%" }}
						// animate={{ top: localMousePosition.y, left: localMousePosition.x }}
						className='absolute h-24 w-24 bg-red-500 rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
						<div
							className='
          absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
          h-8 w-8 bg-black rounded-full
          '></div>
					</motion.div>
				</div>
			</article>
			<SrcButton src='https://100dayscss.com/days/69/' />
		</Frame>
	);
}
