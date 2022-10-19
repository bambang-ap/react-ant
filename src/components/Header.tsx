import React from 'react';

import {
	BellOutlined,
	MenuOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from '@ant-design/icons';
import {Badge, Col, Image, Input, Row} from 'antd';

import {useResponsive} from '@hooks';

export const Header = () => {
	const {isXs} = useResponsive();

	if (!isXs) return null;

	return (
		<Row className="header" gutter={[8, 8]}>
			<Col span={2}>
				<MenuOutlined />
			</Col>
			<Col span={2}>
				<Image src="https://via.placeholder.com/350x150" />
			</Col>
			<Col span={16}>
				<Input prefix={<SearchOutlined />} />
			</Col>
			<Col span={2}>
				<Badge size="small" count={5}>
					<BellOutlined />
				</Badge>
			</Col>
			<Col span={2}>
				<Badge size="small" count={0}>
					<ShoppingCartOutlined />
				</Badge>
			</Col>
		</Row>
	);
};
