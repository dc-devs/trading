interface IOptions {
	size: string;
	price: string;
	tickIndentifier: string;
}

const update = ({ size, price, tickIndentifier }: IOptions) => {
	console.log({ size, price, tickIndentifier });
	// const sizeBN = new BigNumber(size);
	// const priceBN = new BigNumber(price);
};

export default update;
