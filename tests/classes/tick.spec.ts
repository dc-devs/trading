import Tick from '../../src/classes/tick';
import { generateDefaultFootprint } from '../../src/classes/footprint/actions';
import { generateDefaultCandlestick } from '../../src/classes/candlestick/actions';

describe('Tick', () => {
	let tick: Tick;
	const defaultFootprint = generateDefaultFootprint();
	const defaultCandlestick = generateDefaultCandlestick();

	beforeEach(() => {
		tick = new Tick();
	});

	it('should be a class', () => {
		expect(tick instanceof Tick).toBe(true);
	});

	describe('when instantiated', () => {
		it('should have expected default values', () => {
			expect(tick.foootprint.values).toEqual(defaultFootprint);
			expect(tick.candlestick.values).toEqual(defaultCandlestick);
		});
	});

	describe('update', () => {
		it('should be a function', () => {
			expect(typeof tick.update).toBe('function');
		});

		describe('when called', () => {
			it('should update the footprint and canldestick values', () => {});
		});
	});
});
