import BigNumber from 'bignumber.js';
import { ICandlestick } from '../../../interfaces';

interface IOptions {
	price: string;
	candlestick: ICandlestick;
}

const update = ({ price, candlestick }: IOptions) => {
	const priceBn = BigNumber(price);

	// Function - updateCandlestick
	// ----------------------------------
	const hasLowestPriceBeenSet = candlestick.low.value !== '0';

	if (!hasLowestPriceBeenSet) {
		candlestick.low.bn = priceBn;
		candlestick.low.value = candlestick.low.bn.toString();;
	}

	const isFirstPrice = candlestick.open.value === '0';
	const isLowestPrice = candlestick.low.bn.comparedTo(priceBn) === 1;
	const isHighestPrice = candlestick.high.bn.comparedTo(priceBn) === -1;

	if (isFirstPrice) {
		candlestick.open.bn = priceBn;
		candlestick.open.value = candlestick.open.bn.toString();
	}

	if (isLowestPrice) {
		candlestick.low.bn = priceBn;
		candlestick.low.value = candlestick.low.bn.toString();;
	}

	if (isHighestPrice) {
		candlestick.high.bn = priceBn;
		candlestick.high.value = candlestick.high.bn.toString();;
	}

	candlestick.close.bn = priceBn;
	candlestick.close.value = candlestick.close.bn.toString();
	// ----------------------------------
};

export default update;
