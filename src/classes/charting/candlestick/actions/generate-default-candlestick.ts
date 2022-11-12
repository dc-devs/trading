import BigNumber from 'bignumber.js';
import { ICandlestick } from '../../../../interfaces';
import TickValue from '../../tick-value';

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
