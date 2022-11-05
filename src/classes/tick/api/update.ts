import Tick from '../tick';
import { Side } from '../../../enums';

interface IOptions {
	tick: Tick; 
	side: Side;
	size: string;
	price: string;
}

const update = ({ price, size, side, tick }: IOptions) => {
	tick.candlestick.update({ price });
	tick.foootprint.update({ size, side });
};

export default update;
