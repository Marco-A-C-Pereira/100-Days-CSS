import React from 'react';
import {
	Bars3Icon,
	FolderIcon,
	EllipsisVerticalIcon,
	PaperClipIcon,
	FaceSmileIcon,
	MicrophoneIcon,
} from '@heroicons/react/24/outline';

const contacts = [
	{
		user: 'Funsies',
		profilePicture: '/assets/Fashion/ClownWorld2.jpg',
		messages: [
			{ content: 'a', origin: 'Lain', seen: true },
			{ content: 'b', origin: 'Funsies', seen: false },
			{
				content: 'Hey I was wondering ....',
				origin: 'Funsies',
				seen: false,
			},
		],
	},
	{
		user: 'Мальчик',
		profilePicture:
			'/assets/Fashion/NuclearWinterFashion1.jpg',
		messages: [
			{ content: 'a', origin: 'Lain', seen: true },
			{ content: 'b', origin: 'Мальчик', seen: false },
			{ content: 'b', origin: 'Мальчик', seen: false },
			{ content: 'b', origin: 'Мальчик', seen: false },
			{ content: 'b', origin: 'Мальчик', seen: false },
			{ content: 'b', origin: 'Мальчик', seen: false },
			{ content: 'b', origin: 'Мальчик', seen: false },
			{
				content: 'я использовал переводчик гугл',
				origin: 'Мальчик',
				seen: false,
			},
		],
	},
	{
		user: 'The Real Lain',
		profilePicture: '/assets/Lainpfp.jpg',
		messages: [
			{
				origin: 'Real Lain',
				content: 'Why dont you get back on the wired ?',
				seen: true,
				timeStamp: '11:12',
			},
			{
				origin: 'Lain',
				content: 'Who are you ?',
				seen: true,
				timeStamp: '12:52',
			},
			{
				origin: 'Real Lain',
				content: 'Of course Im you',
				seen: true,
				timeStamp: '12:53',
			},
			{
				origin: 'Lain',
				content: 'Lair + Fake + L + Ratio',
				seen: true,
				timeStamp: '12:53',
			},
			{
				origin: 'Lain',
				content: 'Full cap frfrfrfr GTFO of my DMS',
				seen: true,
				timeStamp: '12:53',
			},
		],
	},
];

const folders = [
	{
		title: 'Tech',
		unreadChats: '50',
	},
	{
		title: 'Kroom',
		unreadChats: '5',
	},
	{
		title: 'Anime',
		unreadChats: '200',
	},
];

export default function DirectMessaging() {
	return (
		<div className='bg-cyan-900 h-screen flex items-center justify-center'>
			<section className='flex w-8/12 mx-auto'>
				<OuterBar />
				<MessageBar />
				<ChatWindow />
			</section>
		</div>
	);
}

function OuterBar() {
	return (
		<section className='bg-green-700 flex flex-col gap-8 w-24 p-4'>
			<Bars3Icon className='h-12 p-2 shrink-0 text-neutral-200' />
			{folders.map((folder) => {
				return (
					<SidebarFolder
						key={folder.title}
						title={folder.title}
						unreadChats={folder.unreadChats}
					/>
				);
			})}
		</section>
	);
}

function SidebarFolder({ title, unreadChats }) {
	return (
		<div className=' text-center font-bold text-lg tracking-wide relative text-neutral-200'>
			<p className='absolute text-sm font-bold bg-red-400 py-1 px-2 rounded-full right-0 top-0'>
				{unreadChats}
			</p>
			<FolderIcon className='p-2' />
			<p className='break-words leading-5'>{title}</p>
		</div>
	);
}

function MessageBar() {
	return (
		<section className='bg-green-400 flex flex-col w-1/3 overflow-hidden'>
			{contacts.map((contact) => {
				return (
					<MessagePreview
						key={contact.user}
						contactInfo={contact}
					/>
				);
			})}
		</section>
	);
}

function MessagePreview({ contactInfo, active = false }) {
	let lastMessage = contactInfo.messages.slice(-1);
	let unreadMessages = contactInfo.messages.filter(
		(msg) => msg.origin !== 'Lain' && msg.seen === false
	).length;

	console.log(lastMessage[0].timeStamp);

	return (
		<article className='flex justify-between h-24 bg-green-600 hover:bg-green-500 p-3 font-Prompt'>
			<img
				src={
					contactInfo.profilePicture
						? contactInfo.profilePicture
						: '/public/assets/Lainpfp.jpg'
				}
				className='rounded-full h-full'
			/>
			<div className='mr-auto ml-4 flex flex-col justify-evenly overflow-hidden text-neutral-200'>
				<p className='font-bold text-lg'>
					{contactInfo.user}
				</p>
				<p className='whitespace-nowrap'>
					{lastMessage[0].content}
				</p>
			</div>
			<div className='flex flex-col justify-evenly ml-4'>
				<p className='text-neutral-200'>
					{lastMessage[0].timeStamp
						? lastMessage[0].timeStamp
						: `${Math.floor(
								Math.random() * 24
						  )}:${Math.floor(Math.random() * 60)} `}
				</p>
				<p
					className={`font-bold bg-red-400 py-1 px-2 rounded-full text-center ${
						unreadMessages > 0 ? '' : 'opacity-0'
					}`}>
					{unreadMessages}
				</p>
			</div>
		</article>
	);
}

function ChatWindow() {
	return (
		<section className='bg-purple-100 flex flex-col w-2/3'>
			<TopChatWindow />
			<ChatBox />
			<TextField />
		</section>
	);
}

function TopChatWindow() {
	return (
		<div className=' bg-green-700 text-neutral-200 flex justify-between p-4'>
			<div className='flex flex-col justify-between w-fit shrink-0'>
				<p className='font-bold text-xl'>The Real Lain</p>
				<p className=''>Online</p>
			</div>
			<EllipsisVerticalIcon className='aspect-square h-14' />
		</div>
	);
}

function ChatBox() {
	const selectedContact = contacts[2].messages;

	return (
		<div className='bg-green-800 p-4 flex flex-col gap-8'>
			{selectedContact.map((msg) => {
				return (
					<MessageBubble
						key={msg.content}
						content={msg.content}
						timestamp={msg.timeStamp}
						sender={msg.origin}
					/>
				);
			})}
		</div>
	);
}

function MessageBubble({ content, timestamp, sender }) {
	return (
		<article
			className={`bg-green-400 font-medium p-4 rounded-lg w-fit max-w-xs ${
				sender === 'Lain' ? 'ml-auto' : ''
			}`}>
			<p className='break-words text-lg'>{content}</p>
			<p className='text-sm text-end'>{timestamp}</p>
		</article>
	);
}

function TextField() {
	return (
		<div className='bg-green-700 text-neutral-200 h-16 p-2 flex gap-4'>
			<PaperClipIcon className='h-full rotate-[135deg] w-fit shrink-0' />
			<input
				type='text'
				name=''
				id=''
				className='w-full rounded-lg bg-neutral-200'
			/>
			<FaceSmileIcon className='shrink-0' />
			<MicrophoneIcon className='shrink-0' />
		</div>
	);
}
