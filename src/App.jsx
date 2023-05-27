import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/shared/Navbar';
import Hdayscss from './pages/Hdayscss';

import * as HD from './components/100Days';
import * as DUI from './components/DailyUI';

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route path='100DaysCSS'>
					<Route
						index
						element={<Hdayscss />}
					/>
					<Route
						path='1'
						element={<HD.PriceTable />}
					/>
					<Route
						path='2'
						element={<HD.InfiniteCircle />}
					/>
					<Route
						path='3'
						element={<HD.HoverButton />}
					/>
					<Route
						path='4'
						element={<HD.SpinningEllipses />}
					/>
					<Route
						path='5'
						element={<HD.SparkleCheckbox />}
					/>
					<Route
						path='6'
						element={<HD.RotatingParasol />}
					/>
					<Route
						path='7'
						element={<HD.Recording />}
					/>
					<Route
						path='8'
						element={<HD.Eye />}
					/>
					<Route
						path='9'
						element={<HD.CalendarDays />}
					/>
					<Route
						path='10'
						element={<HD.MorseCodeKeyboard />}
					/>
					<Route
						path='11'
						element={<HD.Rings />}
					/>
					<Route
						path='12'
						element={<HD.WordCarrousel />}
					/>
					<Route
						path='13'
						element={<HD.Pagination />}
					/>
					<Route
						path='14'
						element={<HD.SphereIllusion />}
					/>
					<Route
						path='15'
						element={<HD.SecretKey />}
					/>
					<Route
						path='16'
						element={<HD.MotionBlur />}
					/>
					<Route
						path='17'
						element={<HD.HoverButtons />}
					/>
				</Route>
				<Route path='/DailyUI'>
					<Route
						path='1'
						element={<DUI.SignUp />}
					/>
					<Route
						path='2'
						element={<DUI.CreditCardCheckout />}
					/>
					<Route
						path='3'
						element={<DUI.LandingPage />}
					/>
					<Route
						path='4'
						element={<DUI.Calculator />}
					/>
					<Route
						path='6'
						element={<DUI.UserProfile />}
					/>
					<Route
						path='7'
						element={<DUI.Settings />}
					/>
					<Route
						path='8'
						element={<DUI.ErrorPage404 />}
					/>
					<Route
						path='9'
						element={<DUI.MusicPlayer />}
					/>
					<Route
						path='10'
						element={<DUI.ShareScreen />}
					/>
					<Route
						path='11'
						element={<DUI.FlashMessage />}
					/>
					<Route
						path='12'
						element={<DUI.ECommerce />}
					/>
					<Route
						path='13'
						element={<DUI.DirectMessaging />}
					/>
					<Route
						path='14'
						element={<DUI.CountdownTimer />}
					/>
				</Route>
				<Route path='/Progress' />
			</Routes>
		</>
	);
}
