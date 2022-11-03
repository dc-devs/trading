import BigNumber from 'bignumber.js';
import TickValue from '../../tick-value';
import { ICandlestick } from '../../../interfaces';

const getDefaultCandleStick = (): ICandlestick => {
	const priceBn = BigNumber(0);

	return {
		open: new TickValue({ value: priceBn }),
		close: new TickValue({ value: priceBn }),
		high: new TickValue({ value: priceBn }),
		low: new TickValue({ value: priceBn }),
	};
};

export default getDefaultCandleStick;
