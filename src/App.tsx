import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage.tsx';
import EventsPage from './pages/EventsPage.tsx';
import MediaPage from './pages/MediaPage.tsx';
import MediaItemPage from './pages/MediaItemPage.tsx';
import PressPage from './pages/PressPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import PartnersPage from './pages/PartnersPage.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

const App = (): JSX.Element => {
	return (
		<div>
			<Header />
			<main className="container max-w-[1216px] mx-auto">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/events" element={<EventsPage />} />
					<Route path="/media" element={<MediaPage />} />
					<Route path="/media/:id" element={<MediaItemPage />} />
					<Route path="/press" element={<PressPage />} />
					<Route path="/partners" element={<PartnersPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default App;
