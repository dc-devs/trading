enum Message {
	Code = 'code:',
	Error = 'error:',
	MessageRecieved = '[KuSocket] Message Recieved',
	ConnectionEstablished = '[KuSocket] Connection Established',
	ConnectionClosedCleanly = '[KuSocket] Connection Closed Cleanly',
	ConnectionDied = '[KuSocket] Connection Died (server process killed or network down)',
	ConnectionError = '[KuSocket] Connection Error',
}

export default Message;
