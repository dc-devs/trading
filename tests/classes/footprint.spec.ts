import { Side } from '../../src/classes/footprint/enums';
import Footprint from '../../src/classes/footprint';
import { generateDefaultFootprint } from '../../src/classes/footprint/actions';

/// Create TickValue
// which as a update function,
// and exposes bn and value
// candlestick.close.update({ priceBn });

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

		describe('when called', () => {
			describe("and the side is 'buy'", () => {
				it('should update the footprint with the expected values', () => {
					const size = '100';
					const side = Side.Buy;

					footprint.update({ size, side });

					const { buyVolume, sellVolume, totalVolume, deltaVolume } =
						footprint.values;

					expect(buyVolume.value).toBe(size);
					expect(sellVolume.value).toBe('0');
					expect(totalVolume.value).toBe(size);
					expect(deltaVolume.value).toBe(size);
				});
			});
			describe("and the side is 'sell'", () => {
				it('should update the footprint with the expected values', () => {
					const size = '100';
					const side = Side.Sell;

					footprint.update({ size, side });

					const { buyVolume, sellVolume, totalVolume, deltaVolume } =
						footprint.values;

					expect(buyVolume.value).toBe('0');
					expect(sellVolume.value).toBe(size);
					expect(totalVolume.value).toBe(size);
					expect(deltaVolume.value).toBe(`-${size}`);
				});
			});
		});
	});
});
