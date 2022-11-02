import { setValueBn } from '../../../utils';
import { ISetPriceOptions } from '../interfaces';

const setLowPrice = ({ priceBn, candlestick }: ISetPriceOptions) => {
	const isLowestPrice = candlestick.low.bn.comparedTo(priceBn) === 1;

	if (isLowestPrice) {
		setValueBn({
			priceBn,
			valueBnObject: candlestick.low,
		});
	}
};

export default setLowPrice;
