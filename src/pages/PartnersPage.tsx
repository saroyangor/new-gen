import { partners } from '../data/db.json';

const PartnersPage = (): JSX.Element => {
	return (
		<article className="my-16 container mx-auto px-4 xl:px-0">
			<h1 className="text-[64px] mb-16">Our partners</h1>

			<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
				{partners.map((image: string) => (
					<div
						key={image}
						className={`h-[330px] w-full border border-black flex justify-center items-center ${image === partners[9] ? 'bg-[#6e4885]' : ''}`}
					>
						<img src={image} alt="partner" />
					</div>
				))}
			</section>
		</article>
	);
};

export default PartnersPage;
