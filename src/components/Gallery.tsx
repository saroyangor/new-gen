import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';
import gallery4 from '../assets/gallery4.png';
import gallery5 from '../assets/gallery5.png';

const firstLine = [
	{ src: gallery1, title: 'New Generation' },
	{ src: gallery2, title: 'New Generation' },
];
const secondLine = [
	{ src: gallery3, title: 'New Generation' },
	{ src: gallery4, title: 'New Generation' },
	{ src: gallery5, title: 'New Generation' },
];

const Gallery = (): JSX.Element => {
	return (
		<article className="my-16 grid grid-cols-6">
			{firstLine.map((image) => (
				<div key={image.src} className="gallery-item col-span-3 relative">
					<img src={image.src} alt={image.title} />
					<h3 className="absolute text-white text-[64px] bottom-1 left-1/2 translate-x-[-50%] whitespace-nowrap text-center hidden">
						{image.title}
					</h3>
				</div>
			))}
			{secondLine.map((image) => (
				<div key={image.src} className="gallery-item col-span-2 relative">
					<img src={image.src} alt={image.title} />
					<h3 className="absolute text-white text-[64px] bottom-1 left-1/2 translate-x-[-50%] whitespace-nowrap text-center hidden">
						{image.title}
					</h3>
				</div>
			))}
		</article>
	);
};

export default Gallery;
