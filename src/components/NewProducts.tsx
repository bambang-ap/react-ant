import {Row, Col, Button} from 'antd';

import {GUTTER} from '@constants';

import {Product} from './Product';

export const NewProducts = () => {
	return (
		<div>
			<Row className="section-title">
				<Col span={12}>New Products</Col>
				<Col span={12}>
					<Button type="link">See all</Button>
				</Col>
			</Row>
			<Row gutter={GUTTER}>
				<Col span={12}>
					<Product imgUrl={`https://via.placeholder.com/150x150`} />
				</Col>
				<Col span={12}>
					<Product imgUrl={`https://via.placeholder.com/150x150`} />
				</Col>
			</Row>
		</div>
	);
};
