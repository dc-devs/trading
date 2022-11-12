import WebSocket from 'ws';

interface ISetWebSocketTimeOutOptions {
	kuWebSocket: WebSocket;
	webSocketTimeOut: number | undefined;
}

const setWebSocketTimeOut = ({
	kuWebSocket,
	webSocketTimeOut,
}: ISetWebSocketTimeOutOptions) => {
	if (webSocketTimeOut) {
		setTimeout(() => {
			kuWebSocket.close();
		}, webSocketTimeOut);
	}
};

export default setWebSocketTimeOut;
