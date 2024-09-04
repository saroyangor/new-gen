import partner1 from '../assets/partner1.png';
import partner2 from '../assets/partner2.png';
import partner3 from '../assets/partner3.png';
import partner4 from '../assets/partner4.png';
import partner5 from '../assets/partner5.png';
import partner6 from '../assets/partner6.png';
import partner7 from '../assets/partner7.png';
import partner8 from '../assets/partner8.png';
import partner9 from '../assets/partner9.png';
import partner10 from '../assets/partner10.png';
import partner11 from '../assets/partner11.png';

const partners = [
	partner1,
	partner2,
	partner3,
	partner4,
	partner5,
	partner6,
	partner7,
	partner8,
	partner9,
	partner10,
	partner11,
];

const PartnersPage = (): JSX.Element => {
	return (
		<article className="my-16 container mx-auto">
			<h1 className="text-[64px] mb-16">Our partners</h1>

			<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
				{partners.map((image) => (
					<div
						key={image}
						className={`h-[330px] w-full border border-black flex justify-center items-center ${image === partner10 ? 'bg-[#6e4885]' : ''}`}
					>
						<img src={image} alt="partner" />
					</div>
				))}
			</section>
		</article>
	);
};

export default PartnersPage;
