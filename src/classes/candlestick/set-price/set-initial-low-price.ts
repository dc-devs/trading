import { ISetPriceOptions } from '../interfaces';

const setInitialLowPrice = ({ priceBn, candlestick }: ISetPriceOptions) => {
	const hasLowestPriceBeenSet = candlestick.low.value !== '0';

	if (!hasLowestPriceBeenSet) {
		candlestick.low.set({ value: priceBn });
	}
};

export default setInitialLowPrice;
