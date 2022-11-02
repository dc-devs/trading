import { setValueBn } from '../../../utils';
import { ISetPriceOptions } from '../interfaces';

const setHighPrice = ({ priceBn, candlestick }: ISetPriceOptions) => {
	const isHighestPrice = candlestick.high.bn.comparedTo(priceBn) === -1;

	if (isHighestPrice) {
		setValueBn({
			priceBn,
			property: candlestick.high,
		});
	}
};

export default setHighPrice;
