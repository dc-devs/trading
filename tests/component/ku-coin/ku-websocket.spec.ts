import KuWebSocket from '../../../src/classes/ku-coin/ku-webSocket';

describe('KuWebSocket', () => {
	let kuWebSocket: KuWebSocket;

	beforeEach(() => {
		kuWebSocket = new KuWebSocket();
	});

	it('should be a class', () => {
		expect(kuWebSocket instanceof KuWebSocket).toBe(true);
	});

	// describe('orderBookSubscription', () => {
	// 	it('should be a function', () => {

	// 	});

	// });
});
