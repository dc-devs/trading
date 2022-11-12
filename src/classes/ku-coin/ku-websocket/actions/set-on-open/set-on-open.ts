import WebSocket from 'ws';
import { Message } from '../../enums';
import KuGnerateMessage from '../../../ku-generate-message';
import { setPingInterval, setWebSocketTimeOut } from './utils';

interface IOptions {
	pingInterval: number;
	connectId: string;
	kuWebSocket: WebSocket;
	webSocketTimeOut: number | undefined;
}

const setOnOpen = ({
	connectId,
	kuWebSocket,
	pingInterval,
	webSocketTimeOut,
}: IOptions) => {
	return new Promise((resolve) => {
		kuWebSocket.onopen = () => {
			const kuWebSocketMessage = new KuGnerateMessage({
				connectId,
			});
			const pingMessage = kuWebSocketMessage.ping();

			setWebSocketTimeOut({ kuWebSocket, webSocketTimeOut });
			setPingInterval({ kuWebSocket, pingMessage, pingInterval });

			console.log(Message.ConnectionEstablished);

			resolve(true);
		};
	});
};

export default setOnOpen;
