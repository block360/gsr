import Web3 from "web3";

export const getWeb3 = () => {
	return new Web3(
		"https://goerli.infura.io/v3/4c4fe9e4e2744002915318bd0e4a7dfc"
	);
};

export const connectToContract = async (contractAbi: any, address: string) => {
	try {
		const web3 = getWeb3();
		return new web3.eth.Contract(contractAbi, address);
	} catch (error) {
		console.error(error);
		throw new Error(error as string);
	}
};
