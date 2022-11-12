import { Side } from '../../../src/enums';

const low = '10.00123';
const high = '21.00123';
const open = '15.00123';
const close = '20.00123';
const tickIndetifier = '11/30/2022-10:12';

const mockTickData1 = [
	{
		size: '105',
		price: open,
		side: Side.Sell,
		tickIndetifier,
	},
	{
		size: '100',
		price: low,
		side: Side.Sell,
		tickIndetifier,
	},
	{
		size: '201',
		price: high,
		side: Side.Buy,
		tickIndetifier,
	},
	{
		size: '200',
		price: close,
		side: Side.Buy,
		tickIndetifier,
	},
];

const candlestick1 = {
	open,
	close,
	high,
	low,
};

const expectedFootprint1 = {
	sellVolume: '205',
	buyVolume: '401',
	totalVolume: '606',
	deltaVolume: '196',
};

export { mockTickData1, candlestick1, expectedFootprint1 };
