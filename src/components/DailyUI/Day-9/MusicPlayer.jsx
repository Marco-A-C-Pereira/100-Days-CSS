import React from 'react';
import {
	ArrowLeftIcon,
	ShareIcon,
	EllipsisVerticalIcon,
	EllipsisHorizontalIcon,
	ForwardIcon,
	BackwardIcon,
	PlayIcon,
	ArrowPathRoundedSquareIcon,
} from '@heroicons/react/24/solid';
import './css.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Song = {
	title: 'Ipsum mashup Vol XIII',
	band: 'The Lorens',
	album: 'Many Ipissums',
	art: '',
	duration: 273,
};

function secondsToTime(e) {
	const h = Math.floor(e / 3600)
			.toString()
			.padStart(2, '0'),
		m = Math.floor((e % 3600) / 60).toString(),
		s = Math.floor(e % 60)
			.toString()
			.padStart(2, '0');

	if (h > 0) {
		return h + ':' + m.padStart(2, '0') + ':' + s;
	}
	return m + ':' + s;
}

export default function MusicPlayer() {
	const [sliderValue, setSliderValue] = useState(0);
	const songPercent = Math.floor(
		(sliderValue / Song.duration) * 100
	);

	useEffect(() => {
		const slider = document.getElementById('timeTrack');
		slider.style.background = `linear-gradient(to right, #2dd4bf ${songPercent}%, #4b5563 ${songPercent}%)`;
	}, [sliderValue, songPercent]);

	function slideValueHandler(e) {
		setSliderValue(e.currentTarget.value);
	}

	return (
		<main className='h-screen bg-slate-900 text-white font-poppins'>
			<div className='w-11/12 h-full mx-auto flex flex-col justify-between '>
				<TopOptions />
				<div>
					<SongInfo />
					<PlayerBar
						slideValueHandler={slideValueHandler}
						sliderValue={sliderValue}
					/>
				</div>
				<PlayerOptions />
			</div>
		</main>
	);
}

function TopOptions() {
	return (
		<section className='h-10 flex w-full '>
			<ArrowLeftIcon className='h-full p-2 bg bg-slate-900 rounded-full shadow ' />
			<ShareIcon className='h-full p-2 ml-auto shadow ' />
			<EllipsisVerticalIcon className='h-full p-2  shadow ' />
		</section>
	);
}

function SongInfo() {
	return (
		<section className='w-full child:mx-auto text-center mt-40'>
			<img
				src='/assets/AlbumCover.jpg'
				className='h-60 aspect-square bg-white'
			/>
			<div className='mt-10'>
				<h2 className='text-2xl font-bold tracking-wide'>
					{Song.band}
				</h2>
				<h3 className='text-base mt-2'> {Song.title} </h3>
			</div>
		</section>
	);
}

function PlayerBar({ slideValueHandler, sliderValue }) {
	return (
		<section className='mt-10'>
			<input
				className={`w-full h-1 rounded-full`}
				type='range'
				onChange={slideValueHandler}
				value={sliderValue}
				max={Song.duration}
				name=''
				id='timeTrack'
			/>
			<div className='flex justify-between text-gray-400'>
				<p>{secondsToTime(sliderValue)}</p>
				<p>{secondsToTime(Song.duration)}</p>
			</div>
		</section>
	);
}

function PlayerOptions() {
	return (
		<section className='flex justify-between flex-grow-0 mb-8 h-11 child:p-2 mt-10 text-teal-400'>
			<ArrowPathRoundedSquareIcon className='' />
			<div className='flex child:h-full gap-6'>
				<BackwardIcon />
				<PlayIcon />
				<ForwardIcon />
			</div>
			<EllipsisHorizontalIcon className='' />
		</section>
	);
}
