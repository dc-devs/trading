import BigNumber from 'bignumber.js';
import { ICandlestick } from '../../../../interfaces';

interface ISetPriceOptions {
	priceBn: BigNumber;
	candlestick: ICandlestick;
}

export default ISetPriceOptions;
