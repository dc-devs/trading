import { ISetPriceOptions } from '../interfaces';

const setLowPrice = ({ priceBn, candlestick }: ISetPriceOptions) => {
	const isLowestPrice = candlestick.low.bn.comparedTo(priceBn) === 1;

	if (isLowestPrice) {
		candlestick.low.update({ priceBn });
	}
};

export default setLowPrice;
