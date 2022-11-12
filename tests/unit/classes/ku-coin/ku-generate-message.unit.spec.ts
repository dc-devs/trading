import {
	Type,
	Topic,
	Symbol,
	Channel,
} from '../../../../src/classes/ku-coin/enums';
import KuGenerateMessage from '../../../../src/classes/ku-coin/ku-generate-message';

describe('KuGenerateMessage', () => {
	let kuGenerateMessage: KuGenerateMessage;
	const connectId = '123456789';

	beforeEach(() => {
		kuGenerateMessage = new KuGenerateMessage({ connectId });
	});

	it('should be a class', () => {
		expect(kuGenerateMessage instanceof KuGenerateMessage).toBe(true);
	});

	describe('orderBookSubscription', () => {
		it('should be a function', () => {
			expect(typeof kuGenerateMessage.orderBookSubscription).toBe(
				'function',
			);
		});

		describe('when called', () => {
			it('should return a orderBookSubscription message', () => {
				const symbol = `${Symbol.MATIC_USDT}`;
				const orderBookSubscriptionMessage =
					kuGenerateMessage.orderBookSubscription({
						symbol,
					});

				expect(JSON.parse(orderBookSubscriptionMessage)).toEqual({
					id: connectId,
					response: true,
					topic: `/${Channel.Market}/${Topic.Level2}:${Symbol.MATIC_USDT}`,
					type: Type.Subscribe,
				});
			});
		});
	});

	describe('matchExecutionSubscription', () => {
		it('should be a function', () => {
			expect(typeof kuGenerateMessage.matchExecutionSubscription).toBe(
				'function',
			);
		});

		describe('when called', () => {
			it('should return a matchExecutionSubscription message', () => {
				const symbol = `${Symbol.MATIC_USDT}`;
				const matchExecutionSubscriptionMessage =
					kuGenerateMessage.matchExecutionSubscription({
						symbol,
					});

				expect(JSON.parse(matchExecutionSubscriptionMessage)).toEqual({
					id: connectId,
					response: true,
					topic: `/${Channel.Market}/${Topic.Match}:${Symbol.MATIC_USDT}`,
					type: Type.Subscribe,
				});
			});
		});
	});

	describe('generatePingMessage', () => {
		it('should be a function', () => {
			expect(typeof kuGenerateMessage.ping).toBe('function');
		});

		describe('when called', () => {
			it('should return a ping message', () => {
				const pingMessage = kuGenerateMessage.ping();

				expect(JSON.parse(pingMessage)).toEqual({
					id: connectId,
					type: Type.Ping,
				});
			});
		});
	});
});
