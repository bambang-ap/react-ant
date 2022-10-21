import React from 'react';

import {Button, Col, Row} from 'antd';

import {Product} from '@components';
import {GUTTER} from '@constants';

export const MostWanted = () => (
	<div>
		<Row className="section-title">
			<Col span={12}>Most Wanted</Col>
			<Col span={12}>
				<Button type="link">See all</Button>
			</Col>
		</Row>
		<Row gutter={GUTTER}>
			<Col span={12}>
				<Product />
			</Col>
			<Col span={12}>
				<Product />
			</Col>
		</Row>
	</div>
);
