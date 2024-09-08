import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { mediaItems } from '../data/db.json';

const MediaItemPage = (): JSX.Element => {
	const { t } = useTranslation();
	const { id } = useParams();

	const item = mediaItems.find((item: any) => item.id === Number(id));

	if (!item) {
		return <h1 className="text-[64px] mb-16">Something went wrong, please try again!</h1>;
	}

	return (
		<article className="mb-16">
			{item.poster && item.title && (
				<div
					className="bg-cover h-[600px] w-screen bg-center relative right-1/4 translate-x-4 flex justify-center items-center"
					style={{ backgroundImage: `url(${item.poster})` }}
				>
					<h1 className="text-[64px] text-white text-center max-w-[1000px]">{t(item.title)}</h1>
				</div>
			)}

			{item.texts && (
				<div className="flex flex-col gap-y-4 my-16">
					{item.texts.map((text: string) => (
						<p key={text} className="font-roboto whitespace-pre-line">
							{t(text)}
						</p>
					))}
				</div>
			)}

			{item.videoURL && (
				<iframe
					src={item.videoURL}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					className="w-full h-[600px] my-16"
				/>
			)}

			{item.gallery && (
				<div className="grid grid-cols-3">
					{item.gallery.map((image: string, index: number) => (
						<img className="w-full" key={image} src={image} alt={item.title + index} />
					))}
				</div>
			)}
		</article>
	);
};

export default MediaItemPage;
