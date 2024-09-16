export const Alert = ({ type, text }: { type: string; text: string }) => {
	return (
		<div className="fixed top-24 left-0 right-0 flex justify-center items-center">
			<div
				className={`p-2 ${
					type === 'danger' ? 'bg-red-800 text-white' : 'bg-green-800 text-white'
				} items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`}
				role="alert"
			>
				<p
					className={`flex rounded-full ${
						type === 'danger' ? 'bg-red-500 text-red-800' : 'bg-green-500 text-green-800'
					} uppercase px-2 py-1 text-xs font-semibold mr-3`}
				>
					{type === 'danger' ? 'Failed' : 'Success'}
				</p>
				<p className="mr-2 text-left">{text}</p>
			</div>
		</div>
	);
};
