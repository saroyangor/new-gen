import { useState } from 'react';

import { press } from '../data/db.json';

const PressPage = (): JSX.Element => {
	const [page, setPage] = useState(1);

	const totalPages = Math.ceil(press.length / 12);

	return (
		<article className="my-16">
			<h1 className="text-[64px] mb-16">Our Press</h1>
			<section className="flex gap-y-7 gap-x-11 flex-wrap">
				{press.slice((page - 1) * 12, page * 12).map((p) => (
					<a key={p.id} target="_blank" href={p.link} className="block">
						<img src={p.image} alt={p.title} className="mb-6" />
						<h3 className="mb-3 font-roboto text-2xl font-bold">{p.title}</h3>
						<p className="font-roboto">{p.date}</p>
					</a>
				))}
			</section>

			{totalPages > 1 && (
				<div className="flex justify-center mt-16 gap-x-7">
					{[...Array(totalPages)].map((_, i) => (
						<button
							key={i}
							type="button"
							className={`border-2 border-black rounded-full w-10 h-10 font-roboto ${i + 1 === page ? 'bg-black text-white' : ''}`}
							onClick={() => {
								setPage(i + 1);
								window.scrollTo(0, 0);
							}}
						>
							{i + 1}
						</button>
					))}
				</div>
			)}
		</article>
	);
};

export default PressPage;
