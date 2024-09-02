import Tickets from '../components/Tickets.tsx';
import Gallery from '../components/Gallery.tsx';
import About from '../components/About.tsx';
import Slider from '../components/Slider.tsx';

const HomePage = (): JSX.Element => {
	return (
		<article className="mt-32">
			<Tickets />
			<Gallery />
			<About />
			<Slider />
		</article>
	);
};

export default HomePage;
