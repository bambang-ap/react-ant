import {useMemo} from 'react';

import {Row, Col, Button} from 'antd';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';

import {useResponsive} from '@hooks';

import {Product} from './Product';

function getRandomInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const AllProducts = () => {
	const {
		minWidthXxl,
		minWidthXl,
		minWidthLg,
		minWidthMd,
		minWidthSm,
		minWidthXs,
	} = useResponsive();

	const childElements = useMemo(
		() =>
			Array.from({length: 10}).map(() => {
				const size = getRandomInt(50, 250);
				return (
					<Product imgUrl={`https://via.placeholder.com/${200}x${size}`} />
				);
			}),
		[],
	);

	return (
		<div>
			<Row className="section-title">
				<Col span={12}>All Products</Col>
				<Col span={12}>
					<Button type="link">See all</Button>
				</Col>
			</Row>
			<ResponsiveMasonry
				columnsCountBreakPoints={{
					[minWidthXxl]: 6,
					[minWidthXl]: 5,
					[minWidthLg]: 4,
					[minWidthMd]: 3,
					[minWidthSm]: 2,
					[minWidthXs]: 1,
				}}>
				<Masonry gutter="0.5rem">{childElements}</Masonry>
			</ResponsiveMasonry>
		</div>
	);
};
