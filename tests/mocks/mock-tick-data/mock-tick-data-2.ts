import { Side } from '../../../src/enums';

const open = '22.00123';
const close = '12.00123';
const high = '23.00123';
const low = '11.00123';
const tickIndetifier = '11/30/2022-10:13';

const mockTickData2 = [
	{
		size: '202',
		price: open,
		side: Side.Buy,
		tickIndetifier,
	},
	{
		size: '101',
		price: low,
		side: Side.Sell,
		tickIndetifier,
	},
	{
		size: '203',
		price: high,
		side: Side.Buy,
		tickIndetifier,
	},
	{
		size: '102',
		price: close,
		side: Side.Sell,
		tickIndetifier,
	},
];

const candlestick2 = {
	open,
	close,
	high,
	low,
};

const expectedFootprint2 = {
	sellVolume: '203',
	buyVolume: '405',
	totalVolume: '608',
	deltaVolume: '202',
};

export { mockTickData2, candlestick2, expectedFootprint2 };
