import {Row, Col, Button} from 'antd';

import {Product} from './Product';

export const BusinessPackages = () => {
	return (
		<div>
			<Row className="section-title">
				<Col span={12}>Business Packages</Col>
				<Col span={12}>
					<Button type="link">See all</Button>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Product imgUrl={`https://via.placeholder.com/150x150`} />
				</Col>
			</Row>
		</div>
	);
};
