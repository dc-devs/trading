import WebSocket from 'ws';

interface ISetPingIntervalOptions {
	pingInterval: number;
	kuWebSocket: WebSocket;
	pingMessage: string;
}

const setPingInterval = ({
	kuWebSocket,
	pingMessage,
	pingInterval,
}: ISetPingIntervalOptions) => {
	setInterval(() => {
		kuWebSocket.send(pingMessage);
		console.log('[KuSocket] Message Sent', pingMessage);
	}, pingInterval);
};

export default setPingInterval;
