import BigNumber from 'bignumber.js';
import { ICandlestick } from '../../../interfaces';
import {
	setLowPrice,
	setOpenPrice,
	setHighPrice,
	setClosePrice,
	setInitialLowPrice,
} from '../set-price';

interface IOptions {
	price: string;
	candlestick: ICandlestick;
}

const update = ({ price, candlestick }: IOptions) => {
	const priceBn = BigNumber(price);

	setInitialLowPrice({ priceBn, candlestick });
	setOpenPrice({ priceBn, candlestick });
	setLowPrice({ priceBn, candlestick });
	setHighPrice({ priceBn, candlestick });
	setClosePrice({ priceBn, candlestick });
};

export default update;
