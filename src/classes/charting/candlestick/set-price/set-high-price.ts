import { ISetPriceOptions } from '../interfaces';

const setHighPrice = ({ priceBn, candlestick }: ISetPriceOptions) => {
	const isHighestPrice = candlestick.high.bn.comparedTo(priceBn) === -1;

	if (isHighestPrice) {
		candlestick.high.set({ value: priceBn });
	}
};

export default setHighPrice;
