import WebSocket from 'ws';
import {
	setOnOpen,
	setOnClose,
	setOnError,
	setOnMessage,
	connectToWebSocket,
} from './actions';

interface IInitOptions {
	webSocketTimeOut?: number;
	onErrorMessage?: CallableFunction;
	onLevel2Message?: CallableFunction;
	onExecutionOrder?: CallableFunction;
}

interface IInitReturn {
	connectId: string;
	kuWebSocket: WebSocket;
}

class KuWebSocket {
	constructor() {}

	init = async ({
		webSocketTimeOut,
		onErrorMessage = () => {},
		onLevel2Message = () => {},
		onExecutionOrder = () => {},
	}: IInitOptions): Promise<IInitReturn> => {
		const { kuWebSocket, pingInterval, connectId } =
			await connectToWebSocket();

		await setOnOpen({
			connectId,
			kuWebSocket,
			pingInterval,
			webSocketTimeOut,
		});

		kuWebSocket.onmessage = setOnMessage({
			onErrorMessage,
			onLevel2Message,
			onExecutionOrder,
		});

		kuWebSocket.onclose = setOnClose();
		kuWebSocket.onerror = setOnError({ kuWebSocket });

		return { kuWebSocket, connectId };
	};
}

export default KuWebSocket;
