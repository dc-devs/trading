import {
	candlestick1,
	mockTickData1,
	expectedFootprint1,
} from './mock-tick-data-1';
import {
	candlestick2,
	mockTickData2,
	expectedFootprint2,
} from './mock-tick-data-2';
import {
	candlestick3,
	mockTickData3,
	expectedFootprint3,
} from './mock-tick-data-3';

const mockTickData = [...mockTickData1, ...mockTickData2, ...mockTickData3];
const expectedCandleSticks = [candlestick1, candlestick2, candlestick3];
const expectedFootprints = [
	expectedFootprint1,
	expectedFootprint2,
	expectedFootprint3,
];

export { mockTickData, expectedCandleSticks, expectedFootprints };
