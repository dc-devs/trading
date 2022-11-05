import { Side } from '../../src/enums';
import { IFootprint } from '../../src/interfaces';
import Footprint from '../../src/classes/footprint';
import { generateDefaultFootprint } from '../../src/classes/footprint/actions';

describe('Footprint', () => {
	let footprint: Footprint;
	let defaultFootprint: IFootprint;
	
	beforeEach(() => {
		footprint = new Footprint();
		defaultFootprint = generateDefaultFootprint();
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
			describe("with one volume size and the side is 'buy'", () => {
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

			describe("with one volume size and the side is 'sell'", () => {
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

			describe('when called with 10 distinct sizes', () => {
				describe('(set 1)', () => {
					beforeEach(() => {
						const buys = [
							{
								size: '200',
								side: Side.Buy,
							},
							{
								size: '201',
								side: Side.Buy,
							},
							{
								size: '202',
								side: Side.Buy,
							},
							{
								size: '203',
								side: Side.Buy,
							},
							{
								size: '205',
								side: Side.Buy,
							},
						];

						const sells = [
							{
								size: '100',
								side: Side.Sell,
							},
							{
								size: '101',
								side: Side.Sell,
							},
							{
								size: '102',
								side: Side.Sell,
							},
							{
								size: '103',
								side: Side.Sell,
							},
							{
								size: '105',
								side: Side.Sell,
							},
						];

						const tickData = [...buys, ...sells];

						tickData.forEach(({ size, side }) => {
							footprint.update({ size, side });
						});
					});

					it('should update state of the candlestick to the expected values', () => {
						const {
							sellVolume,
							buyVolume,
							totalVolume,
							deltaVolume,
						} = footprint.values;

						expect(sellVolume.value).toEqual('511');
						expect(buyVolume.value).toEqual('1011');
						expect(totalVolume.value).toEqual('1522');
						expect(deltaVolume.value).toEqual('500');
					});
				});

				describe('(set 2)', () => {
					beforeEach(() => {
						const buys = [
							{
								size: '100',
								side: Side.Buy,
							},
							{
								size: '101',
								side: Side.Buy,
							},
							{
								size: '102',
								side: Side.Buy,
							},
							{
								size: '103',
								side: Side.Buy,
							},
							{
								size: '105',
								side: Side.Buy,
							},
						];

						const sells = [
							{
								size: '200',
								side: Side.Sell,
							},
							{
								size: '201',
								side: Side.Sell,
							},
							{
								size: '202',
								side: Side.Sell,
							},
							{
								size: '203',
								side: Side.Sell,
							},
							{
								size: '205',
								side: Side.Sell,
							},
						];

						const tickData = [...buys, ...sells];

						tickData.forEach(({ size, side }) => {
							footprint.update({ size, side });
						});
					});

					it('should update state of the candlestick to the expected values', () => {
						const {
							sellVolume,
							buyVolume,
							totalVolume,
							deltaVolume,
						} = footprint.values;

						expect(buyVolume.value).toEqual('511');
						expect(sellVolume.value).toEqual('1011');
						expect(totalVolume.value).toEqual('1522');
						expect(deltaVolume.value).toEqual('-500');
					});
				});

				describe('(set 3)', () => {
					beforeEach(() => {
						const buys = [
							{
								size: '2100000.000009132',
								side: Side.Buy,
							},
							{
								size: '1345693.000009134',
								side: Side.Buy,
							},
							{
								size: '3100000.000009124',
								side: Side.Buy,
							},
							{
								size: '1378864.000009127',
								side: Side.Buy,
							},
							{
								size: '2465834.000009118',
								side: Side.Buy,
							},
							{
								size: '4876893.000009119',
								side: Side.Buy,
							},
							{
								size: '1987659.000009123',
								side: Side.Buy,
							},
						];

						const sells = [
							{
								size: '1278564.000009133',
								side: Side.Sell,
							},
							{
								size: '1378965.000009135',
								side: Side.Sell,
							},
							{
								size: '3378434.000009129',
								side: Side.Sell,
							},
							{
								size: '3276534.000009125',
								side: Side.Sell,
							},
							{
								size: '4274568.000009117',
								side: Side.Sell,
							},
							{
								size: '5100000.000009139',
								side: Side.Sell,
							},
							{
								size: '1100000.000009101',
								side: Side.Sell,
							},
						];

						const tickData = [...buys, ...sells];

						tickData.forEach(({ size, side }) => {
							footprint.update({ size, side });
						});
					});

					it('should update state of the candlestick to the expected values', () => {
						const {
							sellVolume,
							buyVolume,
							totalVolume,
							deltaVolume,
						} = footprint.values;

						expect(buyVolume.value).toEqual('17254943.000063877');
						expect(sellVolume.value).toEqual('19787065.000063879');
						expect(totalVolume.value).toEqual('37042008.000127756');
						expect(deltaVolume.value).toEqual('-2532122.000000002');
					});
				});
			});
		});
	});
});
