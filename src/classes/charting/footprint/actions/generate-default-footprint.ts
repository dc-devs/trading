import BigNumber from 'bignumber.js';
import TickValue from '../../tick-value';
import { IFootprint } from '../../../../interfaces';

const generateDefaultFootprint = (): IFootprint => {
	const sizeBn = new BigNumber(0);

	return {
		sellVolume: new TickValue({ value: sizeBn }),
		buyVolume: new TickValue({ value: sizeBn }),
		totalVolume: new TickValue({ value: sizeBn }),
		deltaVolume: new TickValue({ value: sizeBn }),
	};
};

export default generateDefaultFootprint;
