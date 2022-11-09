import { Side } from '../../src/enums';
import TickData from '../../src/classes/tick-data';
import Footprint from '../../src/classes/footprint';
import Candlestick from '../../src/classes/candlestick';

describe('TickData', () => {
	let tickData: TickData;

	beforeEach(() => {
		tickData = new TickData();
	});

	it('should be a class', () => {
		expect(tickData instanceof TickData).toBe(true);
	});

	describe('when instantiated', () => {
		it('should have expected default values', () => {
			expect(tickData.ticks).toEqual({});
		});
	});

	describe('update', () => {
		it('should be a function', () => {
			expect(typeof tickData.update).toBe('function');
		});

		describe('when called with a set of tick data', () => {
			beforeEach(() => {
				const tickDatas = [
					{
						size: '105',
						price: '15.00123',
						side: Side.Sell,
						tickIndetifier: '11/30/2022-10:12',
					},
					{
						size: '200',
						price: '20.00123',
						side: Side.Buy,
						tickIndetifier: '11/30/2022-10:12',
					},
					{
						size: '100',
						price: '10.00123',
						side: Side.Sell,
						tickIndetifier: '11/30/2022-10:13',
					},
					{
						size: '201',
						price: '21.00123',
						side: Side.Buy,
						tickIndetifier: '11/30/2022-10:13',
					},
					{
						size: '202',
						price: '22.00123',
						side: Side.Buy,
						tickIndetifier: '11/30/2022-10:14',
					},
					{
						size: '101',
						price: '11.00123',
						side: Side.Sell,
						tickIndetifier: '11/30/2022-10:14',
					},
					{
						size: '203',
						price: '23.00123',
						side: Side.Buy,
						tickIndetifier: '11/30/2022-10:15',
					},
					{
						size: '102',
						price: '12.00123',
						side: Side.Sell,
						tickIndetifier: '11/30/2022-10:15',
					},
					{
						size: '205',
						price: '25.00123',
						side: Side.Buy,
						tickIndetifier: '11/30/2022-10:16',
					},
					{
						size: '103',
						price: '13.00123',
						side: Side.Sell,
						tickIndetifier: '11/30/2022-10:16',
					},
				];

				tickDatas.forEach(({ size, price, side, tickIndetifier }) => {
					tickData.update({
						size,
						side,
						price,
						tickIndetifier,
					});
				});
			});

			it('should update state tick with expected values', () => {
				const { ticks } = tickData;
				const tickKeys = Object.keys(ticks);

				expect(tickKeys.length).toEqual(5);

				tickKeys.forEach((tickKey: string) => {
					const tick = ticks[tickKey];
					const { footprint, candlestick } = tick;

					expect(footprint instanceof Footprint).toBe(true);
					expect(candlestick instanceof Candlestick).toBe(true);
				});
			});
		});
	});
});
