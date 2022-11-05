import { Side } from '../../../enums';
import BigNumber from 'bignumber.js';
import { IFootprint } from '../../../interfaces';

interface IOptions {
	size: string;
	side: string;
	footprint: IFootprint;
}

const update = ({ size, side, footprint }: IOptions) => {
	const sizeBn = new BigNumber(size);

	if (side === Side.Buy) {
		footprint.buyVolume.add({ value: sizeBn });
	}

	if (side === Side.Sell) {
		footprint.sellVolume.add({ value: sizeBn });
	}

	const deltaBn = footprint.buyVolume.bn.minus(footprint.sellVolume.bn);
	footprint.deltaVolume.set({ value: deltaBn });

	footprint.totalVolume.add({ value: sizeBn });
};

export default update;
