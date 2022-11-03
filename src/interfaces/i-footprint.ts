import { TickValue } from '../classes';

interface IFootprint {
	sellVolume: TickValue;
	buyVolume: TickValue;
	totalVolume: TickValue;
	deltaVolume: TickValue;
}

export default IFootprint;
