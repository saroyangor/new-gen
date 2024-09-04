import Gallery from '../components/Gallery.tsx';

const MediaPage = (): JSX.Element => {
	return (
		<article className="mt-16">
			<h1 className="text-[64px] mb-16">Media library</h1>
			<Gallery />
		</article>
	);
};

export default MediaPage;
