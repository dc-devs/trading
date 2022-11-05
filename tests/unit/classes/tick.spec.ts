import { jest } from '@jest/globals';
import { Side } from '../../../src/enums';
import Tick from '../../../src/classes/tick';

jest.mock('../../src/classes/footprint', () => {
	return jest.fn().mockImplementation(() => {
		return {
			values: jest.fn(),
			update: jest.fn(),
		};
	});
});

jest.mock('../../src/classes/candlestick', () => {
	return jest.fn().mockImplementation(() => {
		return {
			values: jest.fn(),
			update: jest.fn(),
		};
	});
});

describe('Tick', () => {
	let tick: Tick;

	beforeEach(() => {
		tick = new Tick();
	});

	it('should be a class', () => {
		expect(tick instanceof Tick).toBe(true);
	});

	describe('when instantiated', () => {
		it('should have expected default values', () => {
			expect(tick.foootprint).toBeDefined();
			expect(tick.candlestick).toBeDefined();
		});
	});

	describe('update', () => {
		it('should be a function', () => {
			expect(typeof tick.update).toBe('function');
		});

		describe('when called', () => {
			describe('with buy side execution data', () => {
				const size = '100';
				const price = '.00923';
				const side = Side.Buy;

				beforeEach(() => {
					tick.update({ price, size, side });
				});

				it('should update the footprint and canldestick with expected values', () => {
					expect(tick.candlestick.update).toHaveBeenCalledWith({
						price,
					});
					expect(tick.foootprint.update).toHaveBeenCalledWith({
						size,
						side,
					});
				});
			});

			describe('with sell side execution data', () => {
				const size = '1';
				const price = '1000000';
				const side = Side.Sell;

				beforeEach(() => {
					tick.update({ price, size, side });
				});

				it('should update the footprint and canldestick with expected values', () => {
					expect(tick.candlestick.update).toHaveBeenCalledWith({
						price,
					});
					expect(tick.foootprint.update).toHaveBeenCalledWith({
						size,
						side,
					});
				});
			});
		});
	});
});
