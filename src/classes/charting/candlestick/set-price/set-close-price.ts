import { ISetPriceOptions } from '../interfaces';

const setClosePrice = ({ priceBn, candlestick }: ISetPriceOptions) => {
	candlestick.close.set({ value: priceBn });
};

export default setClosePrice;
