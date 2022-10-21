import React from 'react';

import {StarOutlined} from '@ant-design/icons';
import {Image} from 'antd';

type Props = {
	imgUrl?: string;
	title?: string;
	price?: string;
};

export const Product = (props: Props) => {
	const {
		imgUrl = 'https://via.placeholder.com/150x150',
		title = 'BIS Flee & Shampoo',
		price = '85.000/bottle',
	} = props;
	return (
		<div className="product">
			<span className="rating">
				<StarOutlined /> 4.5
			</span>

			<Image preview={false} src={imgUrl} />

			<p>{title}</p>
			<p>{price}</p>
		</div>
	);
};
