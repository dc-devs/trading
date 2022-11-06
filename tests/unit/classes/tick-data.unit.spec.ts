import { jest } from '@jest/globals';
import { Side } from '../../../src/enums';
import TickData from '../../../src/classes/tick-data';

jest.mock('../../../src/classes/tick', () => {
	return jest.fn().mockImplementation(() => {
		return {
			update: jest.fn(),
		};
	});
});

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
	});
});
