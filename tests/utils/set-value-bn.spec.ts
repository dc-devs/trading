import BigNumber from 'bignumber.js';
import { IValueBn } from '../../src/interfaces';
import setValueBn from '../../src/utils/set-value-bn';

describe('setValueBn', () => {
	it('should be a function', () => {
		expect(typeof setValueBn).toBe('function');
	});

	describe('when passed a object and a BigNumber', () => {
		it('should return same object decorated with same BigNumber and sting value', () => {
			const openPrice: IValueBn = { value: '0', bn: BigNumber(0) };
			const priceBn = BigNumber(100.123);

			setValueBn({
				priceBn,
				valueBnObject: openPrice,
			});

			expect(openPrice.bn).toEqual(priceBn);
			expect(openPrice.value).toEqual('100.123');
		});
	});
});
