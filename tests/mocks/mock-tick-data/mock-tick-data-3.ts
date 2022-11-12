import { Side } from '../../../src/enums';

const open = '25.00123';
const high = '25.00123';
const close = '10.00123';
const tickIndetifier = '11/30/2022-10:14';

const mockTickData3 = [
	{
		size: '205',
		price: open,
		side: Side.Buy,
		tickIndetifier,
	},
	{
		size: '103',
		price: '13.00123',
		side: Side.Sell,
		tickIndetifier,
	},
	{
		size: '303',
		price: '17.00123',
		side: Side.Buy,
		tickIndetifier,
	},
	{
		size: '50',
		price: close,
		side: Side.Sell,
		tickIndetifier,
	},
];

const candlestick3 = {
	open,
	close,
	high,
	low: close,
};

const expectedFootprint3 = {
	sellVolume: '153',
	buyVolume: '508',
	totalVolume: '661',
	deltaVolume: '355',
};

export { mockTickData3, candlestick3, expectedFootprint3 };
