import WebSocket from 'ws';
import { Symbol } from '../enums';
import KuWebSocket from '../ku-webSocket';
import KuGenerateMessage from '../ku-generate-message';

interface IConstructorOptions {
	// TODO: Update symbol to Market? Its Ku Specific...
	// Maybe need a way to convert Market Symbol to KuSymbol...
	symbol: Symbol;
}

interface IInitOptions {
	timeout?: number;
	onExecutionOrder: CallableFunction;
}

class KuSubscription {
	symbol: Symbol;
	kuWebSocket?: WebSocket;
	kuGenerateMessage?: KuGenerateMessage;

	constructor({ symbol }: IConstructorOptions) {
		this.symbol = symbol;
	}

	async init({ timeout, onExecutionOrder }: IInitOptions) {
		const { kuWebSocket, connectId } = await new KuWebSocket().init({
			webSocketTimeOut: timeout,
			onExecutionOrder,
		});

		this.kuWebSocket = kuWebSocket;
		this.kuGenerateMessage = new KuGenerateMessage({ connectId });

		return this;
	}

	async subscribeToExecutionOders() {
		const matchExecutionSubscriptionMessage =
			this.kuGenerateMessage?.matchExecutionSubscription({
				symbol: this.symbol,
			});

		await this.kuWebSocket?.send(matchExecutionSubscriptionMessage);
	}
}

export default KuSubscription;

// Handle Orberbook Subscription Next ..
// ---------------------------------------------------------
// const orderBookSubscriptionMessage =
// 	kuGenerateMessage.orderBookSubscription({
// 		symbol: Symbol.MATIC_USDT,
// 	});
// await kuWebSocket.send(orderBookSubscriptionMessage);
