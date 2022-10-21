import React from 'react';

import {Button, Col, Row} from 'antd';

import {Industry} from '@components';

export const Industries = () => (
	<div>
		<Row className="section-title">
			<Col span={12}>Choose Industry</Col>
			<Col span={12}>
				<Button type="link">See all</Button>
			</Col>
		</Row>
		<Row>
			<Col span={8}>
				<Industry />
			</Col>
			<Col span={8}>
				<Industry />
			</Col>
			<Col span={8}>
				<Industry />
			</Col>
		</Row>
	</div>
);
