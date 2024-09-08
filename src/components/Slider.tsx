import { useTranslation } from 'react-i18next';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import db from '../data/db.json';

const sliderImages = db.sliderImages;

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 5,
		slidesToSlide: 1,
	},
	tablet: {
		breakpoint: { max: 1280, min: 768 },
		items: 3,
		slidesToSlide: 1,
	},
	mobile: {
		breakpoint: { max: 767, min: 640 },
		items: 2,
		slidesToSlide: 1,
	},
	smMobile: {
		breakpoint: { max: 639, min: 0 },
		items: 1,
		slidesToSlide: 1,
	},
};

const sliderImageUrl = sliderImages.map((image) => {
	return { url: image };
});

const Slider = (): JSX.Element => {
	const { t } = useTranslation();

	return (
		<article className="xl:my-16 my-6 px-4 xl:px-0">
			<h2 className="xl:text-[40px] text-[32px] xl:mb-16 mb-6">{t('Our Partners')}</h2>

			<div className="w-[80%] mx-auto relative flex flex-col-reverse left-[10%] md:left-[5%] xl:left-0">
				<Carousel
					responsive={responsive}
					arrows={false}
					renderButtonGroupOutside={true}
					customButtonGroup={<ButtonGroup />}
					infinite={true}
					autoPlay={true}
				>
					{sliderImageUrl.map((imageUrl, index) => {
						return (
							<div className="overflow-hidden relative left-[10%] sm:left-0" key={index}>
								<div>
									<img src={imageUrl.url} alt="movie" />
								</div>
							</div>
						);
					})}
				</Carousel>
			</div>
		</article>
	);
};
export default Slider;

const ButtonGroup = ({ next, previous }: any) => {
	return (
		<div className="flex justify-between items-center sm:w-[110%] w-[120%] relative right-20 top-20">
			<button className="block" onClick={() => previous()}>
				<BsChevronLeft size={32} />
			</button>
			<button onClick={() => next()}>
				<span className="block">
					<BsChevronRight size={32} />
				</span>
			</button>
		</div>
	);
};
