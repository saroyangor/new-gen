import Gallery from '../components/Gallery.tsx';
import { useTranslation } from 'react-i18next';

const MediaPage = ({ aboutRef }: { aboutRef: React.RefObject<HTMLDivElement> }): JSX.Element => {
	const { t } = useTranslation();
	return (
		<article className="xl:mt-16 mt-6">
			<h1 className="xl:text-[64px] text-[40px] xl:mb-16 mb-6 px-4 xl:px-0">
				{t('Media library')}
			</h1>
			<Gallery aboutRef={aboutRef} />
		</article>
	);
};

export default MediaPage;
