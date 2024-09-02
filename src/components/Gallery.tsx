import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';
import gallery4 from '../assets/gallery4.png';
import gallery5 from '../assets/gallery5.png';

const Gallery = (): JSX.Element => {
	return (
		<article className="my-16 grid grid-cols-6">
			<img src={gallery1} alt="gallery image 1" className="col-span-3" />
			<img src={gallery2} alt="gallery image 2" className="col-span-3" />
			<img src={gallery3} alt="gallery image 3" className="col-span-2" />
			<img src={gallery4} alt="gallery image 4" className="col-span-2" />
			<img src={gallery5} alt="gallery image 5" className="col-span-2" />
		</article>
	);
};

export default Gallery;
