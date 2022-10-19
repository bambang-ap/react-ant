import React from 'react';

import {Col, Image, Row} from 'antd';

export const Banner = () => (
	<Row>
		<Col span={24}>
			<Image preview={false} src="https://via.placeholder.com/2000x1000" />
		</Col>
	</Row>
);
