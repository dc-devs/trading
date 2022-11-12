import BigNumber from 'bignumber.js';
import TickValue from '../../../../src/classes/charting/tick-value';

describe('TickValue', () => {
	let priceBn: BigNumber;
	let tickValue: TickValue;

	beforeEach(() => {
		priceBn = BigNumber(100);
		tickValue = new TickValue({ value: priceBn });
	});

	it('should be a class', () => {
		expect(tickValue instanceof TickValue).toBe(true);
	});

	describe('when instantiated', () => {
		it('should have expected default values', () => {
			expect(tickValue.bn).toEqual(priceBn);
			expect(tickValue.value).toEqual(priceBn.toString());
		});
	});

	describe('set', () => {
		it('should be a function', () => {
			expect(typeof tickValue.set).toBe('function');
		});

		describe('when called', () => {
			it('should set the tick value', () => {
				const priceBn = new BigNumber(1000.55);
				tickValue.set({ value: priceBn });

				expect(tickValue.bn).toEqual(priceBn);
				expect(tickValue.value).toEqual(priceBn.toString());
			});
		});
	});

	describe('add', () => {
		it('should be a function', () => {
			expect(typeof tickValue.add).toBe('function');
		});

		describe('when called', () => {
			it('should add the value', () => {
				const priceBn = new BigNumber(1000);
				const priceBnToAdd = new BigNumber(1000);
				const expectedPriceBn = priceBn.plus(priceBnToAdd);

				tickValue.set({ value: priceBn });
				tickValue.add({ value: priceBnToAdd });

				expect(tickValue.bn).toEqual(expectedPriceBn);
				expect(tickValue.value).toEqual(expectedPriceBn.toString());
			});
		});
	});

	describe('subtract', () => {
		it('should be a function', () => {
			expect(typeof tickValue.subtract).toBe('function');
		});

		describe('when called', () => {
			it('should subtract the value', () => {
				const priceBn = new BigNumber(1000);
				const priceBnToSubtract = new BigNumber(500);
				const expectedPriceBn = priceBn.minus(priceBnToSubtract);

				tickValue.set({ value: priceBn });
				tickValue.subtract({ value: priceBnToSubtract });

				expect(tickValue.bn).toEqual(expectedPriceBn);
				expect(tickValue.value).toEqual(expectedPriceBn.toString());
			});
		});
	});
});
