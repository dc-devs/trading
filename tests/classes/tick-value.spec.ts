import BigNumber from 'bignumber.js';
import TickValue from '../../src/classes/tick-value';

describe('TickValue', () => {
	let priceBn: BigNumber;
	let tickValue: TickValue;

	beforeEach(() => {
		priceBn = BigNumber(100.15);
		tickValue = new TickValue({ priceBn });
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

	describe('update', () => {
		it('should be a function', () => {
			expect(typeof tickValue.update).toBe('function');
		});

		describe('when called', () => {
			it('should should update the tick value', () => {
				const priceBn = new BigNumber(1000.55);
				tickValue.update({ priceBn });

				expect(tickValue.bn).toEqual(priceBn);
				expect(tickValue.value).toEqual(priceBn.toString());
			});
		});
	});
});
