import { setValueBn } from '../../../utils';
import { ISetPriceOptions } from '../interfaces';

const setClosePrice = ({ priceBn, candlestick }: ISetPriceOptions) => {
	setValueBn({
		priceBn,
		valueBnObject: candlestick.close,
	});
};

export default setClosePrice;
