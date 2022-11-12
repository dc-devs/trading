// TODO : KuCoin Tied here
import { Symbol } from '../ku-coin/enums';
import TickData from '../charting/tick-data';
import { Side, Exchange } from '../../enums';
import { ISubscriptions } from '../../interfaces';
import KuSubscription from '../ku-coin/ku-subscription/ku-subscription';

interface IUpdateOptions {
	price: string;
	size: string;
	side: Side;
	tickIndetifier: string;
}

interface IConstructorOptions {
	market: Symbol;
	exchange: Exchange;
	timeout?: number;
	subscriptions: ISubscriptions;
}

class Subscription {
	market: Symbol;
	exchange: Exchange;
	tickData?: TickData;
	subscriptions: ISubscriptions;
	timeout: number | undefined;

	constructor({
		market,
		exchange,
		timeout,
		subscriptions,
	}: IConstructorOptions) {
		this.market = market;
		this.timeout = timeout;
		this.exchange = exchange;
		this.subscriptions = subscriptions;
	}

	async init() {
		const tickData = new TickData({
			market: this.market,
			exchange: this.exchange,
		});
		const onExecutionOrder = ({
			size,
			side,
			price,
			tickIndetifier,
		}: IUpdateOptions) => {
			tickData.update({ size, side, price, tickIndetifier });
		};

		// get KuSubscription from ClientSubscriptions
		const kuSubscription = await new KuSubscription({
			symbol: this.market,
		}).init({
			onExecutionOrder,
			timeout: this.timeout,
		});

		if (this.subscriptions?.executionOrders) {
			await kuSubscription.subscribeToExecutionOders();
		}

		this.tickData = tickData;

		return this;
	}
}

export default Subscription;
