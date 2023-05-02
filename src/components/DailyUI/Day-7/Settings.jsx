import React from 'react';

export default function Settings() {
	return (
		<main className='bg-slate-900'>
			<div className='flex justify-center text-slate-200'>
				<AsideBar />
				<div className='ml-12 child:mb-4'>
					<UserSettings />
					<AccountSettings />
					<DangerZone />
				</div>
			</div>
			<BotomArea />
		</main>
	);
}

const avaibleSocials = ['Twitter', 'VK', 'Discord'];

function SettingTitle({ children, className }) {
	return (
		<h2 className={`text-2xl ${className} mb-2`}>
			{children}:
		</h2>
	);
}

function SocialsBox({ icon }) {
	return (
		<label className='flex gap-2'>
			<img
				className='h-6 w-6'
				src={`/assets/icons/${icon}.png`}
			/>
			<input
				className='text-black bg-gray-300'
				type='text'
			/>
		</label>
	);
}

function TextInput({ labelText, type = 'text' }) {
	return (
		<label className=''>
			<p className='tracking-wide text-xl'>{labelText}</p>
			<input
				className='text-black bg-gray-300'
				type='text'
			/>
		</label>
	);
}

function Checkbox({ labelText }) {
	return (
		<label className='flex gap-4 items-center'>
			<p className='text-xl'>{labelText}</p>
			<div className='relative w-10 h-5 rounded-full bg-gray-300 '>
				<input
					type='checkbox'
					className='appearance-none peer group inline'
				/>
				<div className='h-5 w-5 rounded-full bg-purple-700 peer-checked:ml-auto peer-checked:bg-green-600 ' />
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
		<aside className=' px-4 py-8  border-r border-slate-200 uppercase'>
			<p className='text-2xl '>Settings:</p>
			<ul className='text-xl mt-4 flex flex-col gap-y-2 '>
				<li className=' text-indigo-400'>User</li>
				<li className=' '>Account</li>
				<li className=' '>Risky</li>
			</ul>
		</aside>
	);
}

function UserSettings() {
	return (
		<section className='text-lg '>
			<SettingTitle className='text-2xl'>
				User Settings:
			</SettingTitle>
			<div className='flex flex-col pl-4 gap-y-2'>
				<SameLineWrapper>
					<TextInput labelText='Display Name:' />
					<TextInput labelText='Pronouns:' />
				</SameLineWrapper>
				<label>
					<p className='text-xl'>Bio:</p>
					<textarea
						className='text-black bg-gray-300 '
						type='tex'
					/>
				</label>
				<div className=''>
					<p>Socials:</p>
					<SameLineWrapper>
						{avaibleSocials.map((socialName) => {
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

function AccountSettings() {
	return (
		<section className='text-lg'>
			<SettingTitle className='text-2xl'>
				Account Settings:
			</SettingTitle>
			<div className='flex flex-col pl-4 gap-y-2'>
				<SameLineWrapper className='flex gap-8'>
					<Checkbox labelText='Display my age:' />
					<Checkbox labelText='Display possibly harmfull content:' />
				</SameLineWrapper>

				<SameLineWrapper className='flex gap-8'>
					<TextInput
						type='password'
						labelText='Reset Password:'
					/>
					<TextInput
						type='password'
						labelText='Confirm reset Password:'
					/>
				</SameLineWrapper>
			</div>
		</section>
	);
}

function DangerZone() {
	return (
		<section className=''>
			<SettingTitle className='text-red-600 '>
				DangerZone:
			</SettingTitle>
			<div className='flex'>
				<button className='bg-red-400 text-black font-bold rounded-sm px-2 py-1 text-xl'>
					Delete my Account
				</button>
			</div>
		</section>
	);
}

function BotomArea() {
	return (
		<section className='border-t border-slate-200 flex justify-center p-4'>
			<button className='bg-green-400 text-black font-bold rounded-sm px-2 py-1 text-xl  w-36'>
				Save Changes
			</button>
		</section>
	);
}
