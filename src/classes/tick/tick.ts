import { update } from './api';
import { Side } from '../../enums';
import Footprint from '../footprint';
import Candlestick from '../candlestick';

interface IUpdateOptions {
	side: Side;
	size: string;
	price: string;
}

class Tick {
	foootprint: Footprint;
	candlestick: Candlestick;

	constructor() {
		this.foootprint = new Footprint();
		this.candlestick = new Candlestick();
	}

	update({ price, size, side }: IUpdateOptions) {
		update({ price, size, side, tick: this });
	}
}

export default Tick;
