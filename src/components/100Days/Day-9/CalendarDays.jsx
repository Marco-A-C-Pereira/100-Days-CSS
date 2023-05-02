import React from 'react';
import Frame from '../../shared/Frame';
import SectionTitle from '../../shared/SectionTitle';
import SrcButton from '../../shared/SrcButton';

const WeekSpinnet = [
	{ name: 'Monday', digit: '12' },
	{ name: 'Tuesday', digit: '13' },
	{ name: 'Wednesday', digit: '14' },
	{ name: 'Thursday', digit: '15' },
];

function DayCard({ name, digit }) {
	return (
		<section
			className='
      h-full w-full group cursor-pointer text-white transition duration-200 flex flex-col justify-center items-center'>
			<div className='bg-violet-700 h-full w-full flex flex-col justify-center items-center transition duration-200 hover:scale-95 hover:shadow-inner'>
				<h3 className='text-lg leading-none'>{name}</h3>
				<h2 className='leading-none text-6xl font-bold'>
					{digit}
				</h2>
			</div>
		</section>
	);
}

export default function CalendarDays() {
	return (
		<Frame>
			<SectionTitle>
				<p className='leading-snug font-sans font-bold'>
					(28/4/23)
				</p>
				Calendar Days
			</SectionTitle>
			<article className='grid grid-cols-2 grid-rows-2 h-96 w-96 bg-violet-300 '>
				{WeekSpinnet.map((day) => {
					return (
						<DayCard
							key={day.digit}
							digit={day.digit}
							name={day.name}
						/>
					);
				})}
			</article>
			<SrcButton src='https://100dayscss.com/days/70/' />
		</Frame>
	);
}
