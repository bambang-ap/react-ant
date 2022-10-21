import React from 'react';

import {Descriptions, Image} from 'antd';

export const Industry = () => {
	return (
		<div>
			<Image preview={false} src="https://via.placeholder.com/150x150" />
			<Descriptions>
				<Descriptions.Item>BIS Flee & Shampoo</Descriptions.Item>
				<Descriptions.Item>85.000/bottle</Descriptions.Item>
			</Descriptions>
		</div>
	);
};
