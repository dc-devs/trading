// TickData consumes a match execution data obj,
// decides which tick this data belongs to
// and either creates a new tick, or updates current accoordingly
// Assuming 1 min ticks for now, how we'll be aggregating this data...
// this is the part where we're not sure how we'll aggregate / store
// said collected data,
class TickData {
	values: {};

	constructor() {
		this.values = {};
	}
}

export default TickData;
