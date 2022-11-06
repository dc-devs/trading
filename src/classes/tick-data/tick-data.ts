import { update } from './api';
import { ITick, ITickData } from '../../interfaces';

interface IUpdateOptions {
	price: string;
	size: string;
	side: string;
	tickIndetifier: string;
}

class TickData {
	tickData: ITickData;
	ticks: ITick[];

	constructor() {
		this.ticks = [];
		this.tickData = {};
	}

	update({ price, size, side, tickIndetifier }: IUpdateOptions) {
		update({
			price,
			size,
			side,
			tickIndetifier,
			tickData: this.tickData,
		});
	}
}

export default TickData;
