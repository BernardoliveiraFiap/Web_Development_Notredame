import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
			}}
		>
			<FaSpinner className="loading-icon" />
		</div>
	);
};

export default Loading;
