import Tickets from '../components/Tickets.tsx';
import banner from '../assets/banner.png';
import About from '../components/About.tsx';
import Gallery from '../components/Gallery.tsx';

const HomePage = (): JSX.Element => {
	return (
		<article className="mt-32">
			<Tickets />
			<img src={banner} alt="Banner" className="my-16 mx-auto" />
			<About />
			<Gallery />
		</article>
	);
};

export default HomePage;
