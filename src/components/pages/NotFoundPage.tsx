import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
	return (
		<div>
			This page doesn't exist. Go <Link to="/">MAIN</Link>
		</div>
	);
};

export default NotFoundPage;