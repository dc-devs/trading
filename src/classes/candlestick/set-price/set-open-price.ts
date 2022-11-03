import { ISetPriceOptions } from '../interfaces';

const setOpenPrice = ({ priceBn, candlestick }: ISetPriceOptions) => {
	const isFirstPrice = candlestick.open.value === '0';

	if (isFirstPrice) {
		candlestick.open.update({ priceBn });
	}
};

export default setOpenPrice;
