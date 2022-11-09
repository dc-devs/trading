import { Side } from '../../src/enums';
import Tick from '../../src/classes/tick';
import { ICandlestick, IFootprint } from '../../src/interfaces';
import { generateDefaultFootprint } from '../../src/classes/footprint/actions';
import { generateDefaultCandlestick } from '../../src/classes/candlestick/actions';

describe('Tick', () => {
	let tick: Tick;
	let defaultFootprint: IFootprint;
	let defaultCandlestick: ICandlestick;

	beforeEach(() => {
		tick = new Tick();
		defaultFootprint = generateDefaultFootprint();
		defaultCandlestick = generateDefaultCandlestick();
	});

	it('should be a class', () => {
		expect(tick instanceof Tick).toBe(true);
	});

	describe('when instantiated', () => {
		it('should have expected default values', () => {
			expect(tick.footprint.values).toEqual(defaultFootprint);
			expect(tick.candlestick.values).toEqual(defaultCandlestick);
		});
	});

	describe('update', () => {
		it('should be a function', () => {
			expect(typeof tick.update).toBe('function');
		});

		describe('when called with a set of tick data', () => {
			beforeEach(() => {
				const buys = [
					{
						size: '200',
						price: '20.00123',
						side: Side.Buy,
					},
					{
						size: '201',
						price: '21.00123',
						side: Side.Buy,
					},
					{
						size: '202',
						price: '22.00123',
						side: Side.Buy,
					},
					{
						size: '203',
						price: '23.00123',
						side: Side.Buy,
					},
					{
						size: '205',
						price: '25.00123',
						side: Side.Buy,
					},
				];

				const sells = [
					{
						size: '100',
						price: '10.00123',
						side: Side.Sell,
					},
					{
						size: '101',
						price: '11.00123',
						side: Side.Sell,
					},
					{
						size: '102',
						price: '12.00123',
						side: Side.Sell,
					},
					{
						size: '103',
						price: '13.00123',
						side: Side.Sell,
					},
					{
						size: '105',
						price: '15.00123',
						side: Side.Sell,
					},
				];

				const tickData = [...buys, ...sells];

				tickData.forEach(({ size, price, side }) => {
					tick.update({
						price,
						size,
						side,
					});
				});
			});

			it('should update state tick with expected values', () => {
				const { open, close, high, low } = tick.candlestick.values;
				const { sellVolume, buyVolume, totalVolume, deltaVolume } =
					tick.footprint.values;

				// Candlestick
				expect(open.value).toEqual('20.00123');
				expect(close.value).toEqual('15.00123');
				expect(high.value).toEqual('25.00123');
				expect(low.value).toEqual('10.00123');

				// Footprint
				expect(sellVolume.value).toEqual('511');
				expect(buyVolume.value).toEqual('1011');
				expect(totalVolume.value).toEqual('1522');
				expect(deltaVolume.value).toEqual('500');
			});
		});
	});
});
