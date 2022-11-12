import { update } from './api';
import { ITickData } from '../../../interfaces';
import { Side, Exchange } from '../../../enums';

interface IUpdateOptions {
	price: string;
	size: string;
	side: Side;
	tickIndetifier: string;
}

interface IConstructorOptions {
	market: string;
	exchange: Exchange;
}

class TickData {
	market: string;
	exchange: string;
	ticks: ITickData;

	constructor({ market, exchange }: IConstructorOptions) {
		this.market = market;
		this.exchange = exchange;
		this.ticks = {};
	}

	update({ price, size, side, tickIndetifier }: IUpdateOptions) {
		update({
			price,
			size,
			side,
			tickIndetifier,
			ticks: this.ticks,
		});
	}
}

export default TickData;
