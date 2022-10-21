import React from 'react';

import {Image} from 'antd';

export const Industry = () => {
	return (
		<div className="industry">
			<Image preview={false} src="https://via.placeholder.com/150x150" />
			<div className="description">
				<span>Peternakan</span>
				<p>Saatnya bercocok tanam</p>
			</div>
		</div>
	);
};
