import Frame from '../../shared/Frame';
import SectionTitle from '../../shared/SectionTitle';
import SrcButton from '../../shared/SrcButton';

export default function HoverButtons() {
	return (
		<Frame>
			<SectionTitle>HoverButtons</SectionTitle>
			<main className='h-96 w-96 bg-green-700 flex flex-col items-center justify-center gap-8'>
				<HoverButton shadow='hover:drop-shadow-lg' />
				<HoverButton shadow='hover:drop-shadow-xl' />
				<HoverButton shadow='hover:drop-shadow-2xl' />
			</main>
			<SrcButton src='https://100dayscss.com/days/78/' />
		</Frame>
	);
}

function HoverButton({ shadow }) {
	return (
		<button
			className={`${shadow} px-16 py-4 text-xl font-Roboto-Condensed tracking-widest font-bold ring-1 ring-neutral-500 bg-rose-700 hover:scale-110 transition duration-150 `}>
			Hover me
		</button>
	);
}
