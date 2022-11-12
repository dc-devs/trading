import { jest } from '@jest/globals';
import { Side, Exchange } from '../../../../src/enums';
import { Symbol } from '../../../../src/classes/ku-coin/enums';
import TickData from '../../../../src/classes/charting/tick-data';

const update = jest.fn();
jest.mock('../../../../src/classes/charting/tick', () => {
	return jest.fn().mockImplementation(() => {
		return {
			update,
		};
	});
});

describe('TickData', () => {
	let tickData: TickData;

	beforeEach(() => {
		update.mockReset();

		tickData = new TickData({
			market: Symbol.MATIC_USDT,
			exchange: Exchange.KuCoin,
		});
	});

	it('should be a class', () => {
		expect(tickData instanceof TickData).toBe(true);
	});

	describe('when instantiated', () => {
		it('should have expected default values', () => {
			expect(tickData.ticks).toEqual({});
			expect(tickData.market).toEqual(Symbol.MATIC_USDT);
			expect(tickData.exchange).toEqual(Exchange.KuCoin);
		});
	});

	describe('update', () => {
		it('should be a function', () => {
			expect(typeof tickData.update).toBe('function');
		});

		describe('when called', () => {
			describe('with buy side execution data', () => {
				const size = '100';
				const price = '.00923';
				const side = Side.Buy;
				const tickIndetifier = '10/31/2022-9:18';

				beforeEach(() => {
					tickData.update({ price, size, side, tickIndetifier });
				});

				it('should update the footprint and canldestickData with expected values', () => {
					expect(
						tickData.ticks[tickIndetifier].update,
					).toHaveBeenCalledWith({
						price,
						size,
						side,
					});
				});
			});

			describe('with buy side execution data', () => {
				const size = '110';
				const price = '100000.00923';
				const side = Side.Sell;
				const tickIndetifier = '11/30/2022-10:12';

				beforeEach(() => {
					tickData.update({ price, size, side, tickIndetifier });
				});

				it('should update the footprint and canldestickData with expected values', () => {
					expect(
						tickData.ticks[tickIndetifier].update,
					).toHaveBeenCalledWith({
						price,
						size,
						side,
					});
				});
			});
		});

		describe('when called with a set of tick data', () => {
			let tickDatas: any[];

			beforeEach(() => {
				tickDatas = [
					{
						size: '105',
						price: '15.00123',
						side: Side.Sell,
						tickIndetifier: '11/30/2022-10:11',
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
						tickIndetifier: '11/30/2022-10:14',
					},
					{
						size: '202',
						price: '22.00123',
						side: Side.Buy,
						tickIndetifier: '11/30/2022-10:15',
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

				tickKeys.forEach((tickKey: string, index: number) => {
					const tick = ticks[tickKey];
					const tickData = tickDatas[index];
					delete tickData.tickIndetifier;

					expect(tick.update).toHaveBeenCalledWith(tickData);
				});
			});
		});
	});
});
