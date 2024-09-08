import Gallery from '../components/Gallery.tsx';

const MediaPage = (): JSX.Element => {
	return (
		<article className="xl:mt-16 mt-6">
			<h1 className="xl:text-[64px] text-[40px] xl:mb-16 mb-6 px-4 xl:px-0">Media library</h1>
			<Gallery />
		</article>
	);
};

export default MediaPage;
