import { Exchange } from '../../../src/enums';
import { Symbol } from '../../../src/classes/ku-coin/enums';
import TickData from '../../../src/classes/charting/tick-data';
import {
	mockTickData,
	expectedFootprints,
	expectedCandleSticks,
} from '../../mocks/mock-tick-data';

describe('TickData', () => {
	let tickData: TickData;

	beforeEach(() => {
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
		});
	});

	describe('update', () => {
		it('should be a function', () => {
			expect(typeof tickData.update).toBe('function');
		});

		describe('when called with a set of tick data', () => {
			beforeEach(() => {
				mockTickData.forEach(
					({ size, price, side, tickIndetifier }) => {
						tickData.update({
							size,
							side,
							price,
							tickIndetifier,
						});
					},
				);
			});

			it('should update state tick with expected values', () => {
				const { ticks } = tickData;
				const tickKeys = Object.keys(ticks);

				expect(tickKeys.length).toEqual(3);

				tickKeys.forEach((tickKey: string, index: number) => {
					const tick = ticks[tickKey];
					const { footprint, candlestick } = tick;
					const expectedFootprint = expectedFootprints[index];
					const expectedCandleStick = expectedCandleSticks[index];

					expect(footprint.values.buyVolume.value).toBe(
						expectedFootprint.buyVolume,
					);
					expect(footprint.values.sellVolume.value).toBe(
						expectedFootprint.sellVolume,
					);
					expect(footprint.values.totalVolume.value).toBe(
						expectedFootprint.totalVolume,
					);
					expect(footprint.values.deltaVolume.value).toBe(
						expectedFootprint.deltaVolume,
					);

					expect(candlestick.values.high.value).toBe(
						expectedCandleStick.high,
					);
					expect(candlestick.values.low.value).toBe(
						expectedCandleStick.low,
					);
					expect(candlestick.values.open.value).toBe(
						expectedCandleStick.open,
					);
					expect(candlestick.values.close.value).toBe(
						expectedCandleStick.close,
					);
				});
			});
		});
	});
});
