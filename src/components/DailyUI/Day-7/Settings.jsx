import React from 'react';

export default function Settings() {
	return (
		<main className='bg-slate-900 h-screen'>
			<div className='flex justify-center text-slate-200 h-full'>
				<AsideBar />
				<div className='ml-12 mt-8 child:mb-4 flex flex-col justify-around'>
					<SettingTitle />
					<Separator />
					<UserSettings />
					<Separator />
					<BottomArea />
				</div>
			</div>
		</main>
	);
}

const availableSocials = ['Twitter', 'VK', 'Discord'];

function Separator() {
	return <hr className='opacity-40 bg-slate-200 my-8' />;
}

function SettingTitle() {
	return (
		<section className=''>
			<h1 className='text-3xl'>User Settings</h1>
			<p className='text-lg text-slate-300'>
				Change preferences related to your account
			</p>
		</section>
	);
}

function SocialsBox({ icon }) {
	return (
		<label className='flex gap-2 items-end'>
			<img
				className='h-10'
				src={`/assets/icons/${icon}.png`}
			/>
			<input
				className='text-black bg-slate-200 mt-4 w-60 py-1 px-4 text-lg '
				type='text'
			/>
		</label>
	);
}

function TextInput({
	labelText,
	labelDesc,
	type = 'text',
}) {
	return (
		<label className=''>
			<p className='tracking-wide text-xl leading-none'>
				{labelText}
			</p>
			<p className='tracking-wide text-lg color-slate-300'>
				{labelDesc}
			</p>
			<input
				className='text-black bg-slate-200 mt-4 w-60 py-1 px-4 text-lg '
				type={type}
			/>
		</label>
	);
}

function Checkbox({ labelText }) {
	return (
		<label className='flex gap-4 items-center'>
			<p className='text-xl'>{labelText}</p>
			<div className='relative w-10 h-5 rounded-full bg-slate-200 '>
				<input
					type='checkbox'
					className='appearance-none peer group inline'
				/>
				<div className='h-5 w-5 rounded-full bg-blue-700 peer-checked:ml-auto peer-checked:bg-green-600 ' />
			</div>
		</label>
	);
}

function SameLineWrapper({ children }) {
	return (
		<div className='flex gap-x-8 gap-y-4 flex-wrap'>
			{children}
		</div>
	);
}

function AsideBar() {
	return (
		<aside className=' pr-16 py-8  border-r border-opacity-40 border-slate-200 uppercase'>
			<p className='text-2xl '>Settings:</p>
			<ul className='text-xl mt-8 flex flex-col gap-y-6 '>
				<li className=' text-indigo-400'>User</li>
				<li className=' '>Notifications</li>
				<li className=' '>Search</li>
				<li className=' '>Premium</li>
				<li className=' '>Risky</li>
			</ul>
		</aside>
	);
}

function UserSettings() {
	return (
		<section className='text-lg '>
			<div className='flex flex-col pl-4 gap-y-8'>
				<TextInput
					labelText='Display Name:'
					labelDesc='The name that will be displayed when other user access your profile'
				/>

				<TextInput
					labelText='Pronouns:'
					labelDesc='It will be displayed next to your name'
				/>

				<label>
					<p className='text-xl leading-none'>Bio:</p>
					<p className='tracking-wide text-lg color-slate-300'>
						Tell us something about yourself
					</p>
					<textarea
						className='text-black bg-slate-200 mt-4 w-60 py-1 px-4 text-lg '
						type='tex'
					/>
				</label>

				<Checkbox labelText='Allow my profile to be indexed on search engines:' />
				<Checkbox labelText='Display my E-mail:' />
				<Checkbox labelText='Display my age:' />

				<div className=''>
					<p className='tracking-wide text-xl leading-none'>
						Socials
					</p>
					<p className='tracking-wide text-lg color-slate-300'>
						Other ways to contact you
					</p>

					<SameLineWrapper>
						{availableSocials.map((socialName) => {
							return (
								<SocialsBox
									key={socialName}
									icon={socialName}
								/>
							);
						})}
					</SameLineWrapper>
				</div>
			</div>
		</section>
	);
}

function BottomArea() {
	return (
		<section className=' flex justify-center p-4 '>
			<button className='bg-green-400 text-black font-bold rounded-sm px-4 py-2 text-xl'>
				Save Changes
			</button>
		</section>
	);
}
