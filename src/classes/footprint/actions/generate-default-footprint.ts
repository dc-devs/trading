import BigNumber from 'bignumber.js';
import { IFootprint } from '../../../interfaces';

const generateDefaultFootprint = (): IFootprint => {
	return {
		sellVolume: {
			value: '0',
			bn: new BigNumber(0),
		},
		buyVolume: {
			value: '0',
			bn: new BigNumber(0),
		},
		totalVolume: {
			value: '0',
			bn: new BigNumber(0),
		},
		deltaVolume: {
			value: '0',
			bn: new BigNumber(0),
		},
	};
};

export default generateDefaultFootprint;
