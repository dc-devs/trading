import { Exchange } from './enums';
import { Symbol } from './classes/ku-coin/enums';
import Subscription from './classes/data-collection/subscription';

(async () => {
	const subscriptionParams = {
		timeout: 30000,
		exchange: Exchange.KuCoin,
		market: Symbol.MATIC_USDT,
		subscriptions: {
			executionOrders: true
		}
	};

	const subscription = await new Subscription(subscriptionParams).init();

	// Display Data
	// ------------------------------------------------------------
	setTimeout(() => {
		if (subscription?.tickData) {
			const { ticks } = subscription.tickData;

			Object.keys(ticks).forEach((tickKey) => {
				const tick = ticks[tickKey];

				console.log(tick.footprint.values);
				console.log(tick.candlestick.values);
			});
		}

		process.exit();
	}, 30500);
})();
