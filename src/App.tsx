import './styles/App.scss';

import React from 'react';

import {
	Banner,
	Features,
	Header,
	Industries,
	MostWanted,
	NewProducts,
	BusinessPackages,
	CreditProducts,
	AllProducts,
} from '@components';

function App() {
	return (
		<>
			<Header />
			<Banner />
			<Features />
			<MostWanted />
			<Industries />
			<NewProducts />
			<BusinessPackages />
			<CreditProducts />
			<AllProducts />
		</>
	);
}

export default App;
