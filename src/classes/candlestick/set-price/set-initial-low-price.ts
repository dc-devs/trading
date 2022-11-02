import { setValueBn } from '../../../utils';
import { ISetPriceOptions } from '../interfaces';

const setInitialLowPrice = ({ priceBn, candlestick }: ISetPriceOptions) => {
	const hasLowestPriceBeenSet = candlestick.low.value !== '0';

	if (!hasLowestPriceBeenSet) {
		setValueBn({
			priceBn,
			valueBnObject: candlestick.low,
		});
	}
};

export default setInitialLowPrice;