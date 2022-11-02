import Footprint from '../../src/classes/footprint';
import { generateDefaultFootprint } from '../../src/classes/footprint/actions';

describe('Footprint', () => {
	let footprint: Footprint;
	const defaultFootprint = generateDefaultFootprint();

	beforeEach(() => {
		footprint = new Footprint();
	});

	it('should be a class', () => {
		expect(footprint instanceof Footprint).toBe(true);
	});

	describe('when instantiated', () => {
		it('should have default values', () => {
			expect(footprint.values).toEqual(defaultFootprint);
		});
	});

	describe('values', () => {
		it('should be an object', () => {
			expect(typeof footprint.values).toBe('object');
		});

		describe('when accessed', () => {
			it('should return the current state of the footprint', () => {
				expect(footprint.values).toEqual(defaultFootprint);
			});
		});
	});

	describe('update', () => {
		it('should be a function', () => {
			expect(typeof footprint.update).toBe('function');
		});
	});
});
