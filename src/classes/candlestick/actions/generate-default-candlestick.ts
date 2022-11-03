import BigNumber from 'bignumber.js';
import TickValue from '../../tick-value';
import { ICandlestick } from '../../../interfaces';

const getDefaultCandleStick = (): ICandlestick => {
	const priceBn = BigNumber(0);

	return {
		open: new TickValue({ priceBn }),
		close: new TickValue({ priceBn }),
		high: new TickValue({ priceBn }),
		low: new TickValue({ priceBn }),
	};
};

export default getDefaultCandleStick;
