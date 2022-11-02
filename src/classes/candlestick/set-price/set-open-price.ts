import { setValueBn } from '../../../utils';
import { ISetPriceOptions } from '../interfaces';

const setOpenPrice = ({ priceBn, candlestick }: ISetPriceOptions) => {
	const isFirstPrice = candlestick.open.value === '0';

	if (isFirstPrice) {
		setValueBn({
			priceBn,
			valueBnObject: candlestick.open,
		});
	}
};

export default setOpenPrice;
