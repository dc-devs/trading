import { update } from './api';
import { Side } from '../../enums';
import { ITickData } from '../../interfaces';

interface IUpdateOptions {
	price: string;
	size: string;
	side: Side;
	tickIndetifier: string;
}

class TickData {
	ticks: ITickData;

	constructor() {
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
