import BigNumber from "bignumber.js";
import IValueBn from "./i-value-bn";

interface ISetValueOptions {
	priceBn: BigNumber;
	valueBnObject: IValueBn;
}

export default ISetValueOptions;