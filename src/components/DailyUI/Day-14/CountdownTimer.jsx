import React from 'react';

export default function CountdownTimer() {
	return (
		<main className='h-screen flex flex-col items-center justify-around text-lime-400 text-8xl font-Prompt child:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] bg-[url(https://www.dyangarrismusic.com/wp-content/uploads/edd/konigssee-2522545_1920-mountains.jpg)] bg-cover '>
			<h1 className='text-9xl  font-bold text-center'>
				Life Countdown, how much time you got left:
			</h1>
			<table className='w-11/12'>
				<tr>
					<td className='text-center font-bold'>22</td>
					<td>Years</td>
					<td>Remaining</td>
				</tr>
				<tr>
					<td className='text-center font-bold'>1147</td>
					<td>Weeks</td>
					<td>Remaining</td>
				</tr>
				<tr>
					<td className='text-center font-bold'>8030</td>
					<td>Days</td>
					<td>Remaining</td>
				</tr>
				<tr>
					<td className='text-center font-bold'>
						11563200
					</td>
					<td>Minutes</td>
					<td>Remaining</td>
				</tr>
			</table>
			<h3 className='text-center text-7xl w-9/12 mt-16'>
				So enjoy life, make that call, take that risk, don't
				do it later do it now !
			</h3>
		</main>
	);
}

function RemainingRow() {
	return;
}
