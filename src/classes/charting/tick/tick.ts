import Footprint from '../footprint';
import { Side } from '../../../enums';
import Candlestick from '../candlestick';

interface IUpdateOptions {
	side: Side;
	size: string;
	price: string;
}

class Tick {
	footprint: Footprint;
	candlestick: Candlestick;

	constructor() {
		this.footprint = new Footprint();
		this.candlestick = new Candlestick();
	}

	update({ price, size, side }: IUpdateOptions) {
		this.candlestick.update({ price });
		this.footprint.update({ size, side });
	}
}

export default Tick;
