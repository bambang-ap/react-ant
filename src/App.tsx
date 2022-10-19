import './App.less';

import React from 'react';

import {Banner, Features, Header, Industries, MostWanted} from '@components';

function App() {
	return (
		<>
			<Header />
			<Banner />
			<Features />
			<MostWanted />
			<Industries />
		</>
	);
}

export default App;
