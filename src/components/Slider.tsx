import { useTranslation } from 'react-i18next';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider2.png';
import slider3 from '../assets/slider3.png';
import slider4 from '../assets/slider4.png';
import slider5 from '../assets/slider5.png';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 5,
		slidesToSlide: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 768 },
		items: 3,
		slidesToSlide: 1,
	},
	mobile: {
		breakpoint: { max: 767, min: 464 },
		items: 2,
		slidesToSlide: 1,
	},
};
const sliderImageUrl = [
	{
		url: slider1,
	},
	{
		url: slider2,
	},
	{
		url: slider3,
	},
	{
		url: slider4,
	},
	{
		url: slider5,
	},
];
const Slider = (): JSX.Element => {
	const { t } = useTranslation();

	return (
		<article className="my-16">
			<h2 className="font-semibold text-[40px] mb-16">{t('Our Partners')}</h2>

			<div className="w-[85%] mx-auto relative flex flex-col-reverse">
				<Carousel
					responsive={responsive}
					arrows={false}
					renderButtonGroupOutside={true}
					customButtonGroup={<ButtonGroup />}
					infinite={true}
				>
					{sliderImageUrl.map((imageUrl, index) => {
						return (
							<div className="overflow-hidden" key={index}>
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
		<div className="flex justify-between items-center w-[110%] relative right-20 top-20">
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
