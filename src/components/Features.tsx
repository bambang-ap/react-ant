import React from 'react';

import {Col, Image, Row} from 'antd';

import {GUTTER} from '@constants';

export const Features = () => {
	const list = Array.from({length: 5});

	return (
		<Row className="features-part" gutter={GUTTER}>
			{list.map(() => (
				<Col flex="1">
					<Image preview={false} src="https://via.placeholder.com/150x150" />
					<span>Rice Insurance</span>
				</Col>
			))}
		</Row>
	);
};
