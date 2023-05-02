import React, { useState } from 'react';
import Frame from '../../shared/Frame';
import SectionTitle from '../../shared/SectionTitle';
import SrcButton from '../../shared/SrcButton';
import { motion } from 'framer-motion';

export default function Pagination() {
	const [currentSelected, setCurrentSelected] = useState(0);

	function setCurrent(index) {
		setCurrentSelected(index);
	}

	return (
		<Frame>
			<SectionTitle>
				<p className='leading-snug font-sans font-bold'>
					(2/5/23)
				</p>
				Paginação
			</SectionTitle>
			<section className='h-96 w-96 bg-violet-400 flex items-center justify-center gap-8'>
				{Array.from({ length: 4 }, (_, index) => {
					return (
						<button
							className={`h-12 w-12 border-2 border-slate-100 rounded-full `}
							key={index}
							onClick={() => setCurrent(index)}>
							<motion.div
								initial={{ scale: 0 }}
								animate={{
									scale:
										index === currentSelected
											? '100%'
											: '0%',
								}}
								className='h-full w-full bg-slate-100 rounded-full'
							/>
						</button>
					);
				})}
			</section>
			<SrcButton src='https://100dayscss.com/days/74/' />
		</Frame>
	);
}
