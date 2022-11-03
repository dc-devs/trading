import { ISetPriceOptions } from '../interfaces';

const setInitialLowPrice = ({ priceBn, candlestick }: ISetPriceOptions) => {
	const hasLowestPriceBeenSet = candlestick.low.value !== '0';

	if (!hasLowestPriceBeenSet) {
		candlestick.low.update({ priceBn });
	}
};

export default setInitialLowPrice;
