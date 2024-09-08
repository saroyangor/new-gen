import Tickets from '../components/Tickets.tsx';
import Gallery from '../components/Gallery.tsx';
import About from '../components/About.tsx';
import Slider from '../components/Slider.tsx';

const HomePage = (): JSX.Element => {
	return (
		<article className="xl:mt-16 mt-6">
			<Tickets />
			<Gallery />
			<About />
			<Slider />
		</article>
	);
};

export default HomePage;
