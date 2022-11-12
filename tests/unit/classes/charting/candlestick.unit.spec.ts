import { ICandlestick } from '../../../../src/interfaces';
import Candlestick from '../../../../src/classes/charting/candlestick';
import { generateDefaultCandlestick } from '../../../../src/classes/charting/candlestick/actions';

describe('Candlestick', () => {
	let candlestick: Candlestick;
	let defaultCandlestick: ICandlestick;

	beforeEach(() => {
		candlestick = new Candlestick();
		defaultCandlestick = generateDefaultCandlestick();
	});

	it('should be a class', () => {
		expect(candlestick instanceof Candlestick).toBe(true);
	});

	describe('when instantiated', () => {
		it('should have default values', () => {
			expect(candlestick.values).toEqual(defaultCandlestick);
		});
	});

	describe('values', () => {
		it('should be an object', () => {
			expect(typeof candlestick.values).toBe('object');
		});

		describe('when accessed', () => {
			it('should return the current state of the candlestick', () => {
				expect(candlestick.values).toEqual(defaultCandlestick);
			});
		});
	});

	describe('update', () => {
		it('should be a function', () => {
			expect(typeof candlestick.update).toBe('function');
		});

		describe('when called', () => {
			const price = '10';

			beforeEach(() => {
				candlestick.update({ price });
			});

			it('should update state of the candlestick to the expected values', () => {
				const { open, close, high, low } = candlestick.values;

				expect(open.value).toEqual(price);
				expect(close.value).toEqual(price);
				expect(high.value).toEqual(price);
				expect(low.value).toEqual(price);
			});
		});

		describe('when called with 10 distinct prices (set 1)', () => {
			const openPrice = '0.9132';
			const closePrice = '0.9124';
			const highPrice = '0.9139';
			const lowPrice = '0.9101';

			beforeEach(() => {
				const prices = [
					openPrice,
					'0.9133',
					'0.9134',
					'0.9135',
					highPrice,
					'0.9129',
					'0.9127',
					'0.9125',
					'0.9118',
					'0.9117',
					'0.9119',
					lowPrice,
					'0.9123',
					closePrice,
				];

				prices.forEach((price) => {
					candlestick.update({ price });
				});
			});

			it('should update state of the candlestick to the expected values', () => {
				const { open, close, high, low } = candlestick.values;

				expect(open.value).toEqual(openPrice);
				expect(close.value).toEqual(closePrice);
				expect(high.value).toEqual(highPrice);
				expect(low.value).toEqual(lowPrice);
			});
		});

		describe('when called with 10 distinct prices (set 2)', () => {
			const openPrice = '99.93';
			const closePrice = '105.95';
			const highPrice = '110.23';
			const lowPrice = '89.19';

			beforeEach(() => {
				const prices = [
					openPrice,
					'107.9133',
					'105.9134',
					'108.9135',
					'110.22',
					highPrice,
					'99.9129',
					'91.9127',
					'92.9125',
					'95.9118',
					'89.20',
					lowPrice,
					'106.9123',
					closePrice,
				];

				prices.forEach((price) => {
					candlestick.update({ price });
				});
			});

			it('should update state of the candlestick to the expected values', () => {
				const { open, close, high, low } = candlestick.values;

				expect(open.value).toEqual(openPrice);
				expect(close.value).toEqual(closePrice);
				expect(high.value).toEqual(highPrice);
				expect(low.value).toEqual(lowPrice);
			});
		});

		describe('when called with 10 distinct prices (set 3)', () => {
			const openPrice = '0.000009132';
			const closePrice = '0.000009124';
			const highPrice = '0.000009139';
			const lowPrice = '0.000009101';

			beforeEach(() => {
				const prices = [
					openPrice,
					'0.000009133',
					'0.000009134',
					'0.000009135',
					highPrice,
					'0.000009129',
					'0.000009127',
					'0.000009125',
					'0.000009118',
					'0.000009117',
					'0.000009119',
					lowPrice,
					'0.000009123',
					closePrice,
				];

				prices.forEach((price) => {
					candlestick.update({ price });
				});
			});

			it('should update state of the candlestick to the expected values', () => {
				const { open, close, high, low } = candlestick.values;

				expect(open.value).toEqual(openPrice);
				expect(close.value).toEqual(closePrice);
				expect(high.value).toEqual(highPrice);
				expect(low.value).toEqual(lowPrice);
			});
		});

		describe('when called with 10 distinct prices (set 4)', () => {
			const openPrice = '2100000.000009132';
			const closePrice = '3100000.000009124';
			const highPrice = '5100000.000009139';
			const lowPrice = '1100000.000009101';

			beforeEach(() => {
				const prices = [
					openPrice,
					'1278564.000009133',
					'1345693.000009134',
					'1378965.000009135',
					highPrice,
					'3378434.000009129',
					'1378864.000009127',
					'3276534.000009125',
					'2465834.000009118',
					'4274568.000009117',
					'4876893.000009119',
					lowPrice,
					'1987659.000009123',
					closePrice,
				];

				prices.forEach((price) => {
					candlestick.update({ price });
				});
			});

			it('should update state of the candlestick to the expected values', () => {
				const { open, close, high, low } = candlestick.values;

				expect(open.value).toEqual(openPrice);
				expect(close.value).toEqual(closePrice);
				expect(high.value).toEqual(highPrice);
				expect(low.value).toEqual(lowPrice);
			});
		});
	});
});
