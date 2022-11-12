import { ICandlestick } from '../../../interfaces';
import { update, generateDefaultCandlestick } from './actions';

interface IUpdateOptions {
	price: string;
}

// price float limit 9 decimals
class Candlestick {
	values: ICandlestick;

	constructor() {
		this.values = generateDefaultCandlestick();
	}

	update({ price }: IUpdateOptions) {
		update({ price, candlestick: this.values });
	}
}

export default Candlestick;
