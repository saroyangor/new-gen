import { useState } from 'react';

const useAlert = (): {
	alert: { show: boolean; text: string; type: string };
	showAlert: any;
	hideAlert: any;
} => {
	const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

	const showAlert = ({ text, type = 'danger' }: { text: string; type?: string }): void =>
		setAlert({ show: true, text, type });
	const hideAlert = (): void => setAlert({ show: false, text: '', type: 'danger' });

	return { alert, showAlert, hideAlert };
};

export default useAlert;
