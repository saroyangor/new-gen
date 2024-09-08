import { Link } from 'react-router-dom';

import { gallery } from '../data/db.json';

const firstLine = gallery.firstLine;
const secondLine = gallery.secondLine;

const Gallery = (): JSX.Element => {
	return (
		<article className="xl:my-16 my-6 grid grid-cols-6">
			{firstLine.map((image) => (
				<div key={image.src} className="gallery-item xl:col-span-3 col-span-6 relative">
					<Link to={`/media/${image.id}`}>
						<img src={image.src} alt={image.title} className="w-full min-h-[350px] xl:h-fit" />
						<h3 className="absolute text-white text-[64px] bottom-1 left-1/2 translate-x-[-50%] whitespace-nowrap text-center hidden">
							{image.title}
						</h3>
					</Link>
				</div>
			))}
			{secondLine.map((image) => (
				<div key={image.src} className="gallery-item xl:col-span-2 col-span-6 relative">
					<Link to={`/media/${image.id}`}>
						<img src={image.src} alt={image.title} className="w-full min-h-[320px] xl:h-fit" />
						<h3 className="absolute text-white text-[64px] bottom-1 left-1/2 translate-x-[-50%] whitespace-nowrap text-center hidden">
							{image.title}
						</h3>
					</Link>
				</div>
			))}
		</article>
	);
};

export default Gallery;
