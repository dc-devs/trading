import { ISetValueOptions } from '../interfaces';

const setValueBn = ({ valueBnObject, priceBn }: ISetValueOptions) => {
	valueBnObject.bn = priceBn;
	valueBnObject.value = priceBn.toString();
};

export default setValueBn;
