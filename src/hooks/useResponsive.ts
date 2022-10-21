import {Grid} from 'antd';
import {Breakpoint} from 'antd/lib/_util/responsiveObserve';

export const useResponsive = () => {
	const screens = Grid.useBreakpoint();

	const [type] = (Object.entries(screens)
		.reverse()
		.find(([, show]) => show) ?? ['xs', true]) as [Breakpoint, boolean];

	const isXxl = type === 'xxl';
	const isXl = type === 'xl';
	const isLg = type === 'lg';
	const isMd = type === 'md';
	const isSm = type === 'sm';
	const isXs = type === 'xs';

	return {
		isXxl,
		isXl,
		isLg,
		isMd,
		isSm,
		isXs,
		minWidthXxl: 1200,
		minWidthXl: 980,
		minWidthLg: 750,
		minWidthMd: 550,
		minWidthSm: 240,
		minWidthXs: 160,
	};
};
