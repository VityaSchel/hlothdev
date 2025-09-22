type Network = {
	address: string;
	trustWalletId: number;
	ledgerLiveName: string;
};

export const moneroAddress =
	"43MTCc7BsyZip4YUpRSqGahUPf8NefifvW6KXEXttTXicTbMfAehtny26HuU84pzQNQmodxzWoTaPAL5aqPjAUo4DtkvXBV";

export const networks = {
	eth: {
		address: "0xE3e548ae4f1f74195857084ED335EF89C29Ce43c",
		trustWalletId: 60,
		ledgerLiveName: "ethereum",
	},
	tron: {
		address: "THgEkWLWJsLFJ5FfQFCasF1zbwJNLHyrkF",
		trustWalletId: 195,
		ledgerLiveName: "tron",
	},
	btc: {
		address: "bc1q6l065yaa6zc2p4798rc9fcyud8mmny8sk8995f",
		trustWalletId: 0,
		ledgerLiveName: "bitcoin",
	},
	ltc: {
		address: "ltc1qnvzl0zgcg22tm269a6ny95ept93l6009348y3c",
		trustWalletId: 2,
		ledgerLiveName: "litecoin",
	},
} as const satisfies Record<string, Network>;

type NetworkName = keyof typeof networks;

export const tokens = {
	usdtErc20: {
		network: "eth",
		contract: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
	},
	usdtTrc20: {
		network: "tron",
		contract: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
	},
} as const satisfies Record<string, { network: NetworkName; contract: string }>;

type Token = keyof typeof tokens;

export const trustWalletToken = (token: Token) => {
	const { contract, network } = tokens[token];
	const coin = networks[network];
	return `https://link.trustwallet.com/send?asset=c${coin.trustWalletId}_t${contract}&address=${coin.address}`;
};

export const metaMaskToken = (token: Token) => {
	const { contract, network } = tokens[token];
	const coin = networks[network];
	return `https://metamask.app.link/send/${contract}/transfer?address=${coin.address}`;
};

export const trustWalletCoin = (coin: Network) => {
	return `https://link.trustwallet.com/send?asset=c${coin.trustWalletId}&address=${coin.address}`;
};

export const metaMaskCoin = (coin: "eth") => {
	return `https://metamask.app.link/send/${networks[coin].address}`;
};

export const ledgerLive = (coin: Network) => {
	return `ledgerlive://send?currency=${coin.ledgerLiveName}&recipient=${coin.address}`;
};

const walletNetworks: Record<string, NetworkName[]> = {
	trustWallet: ["eth", "tron", "btc", "ltc"],
	metamask: ["eth"],
	ledgerLive: ["eth", "tron", "btc", "ltc"],
};

export type ClickToPay = {
	trustWallet?: string;
	metamask?: string;
	ledgerLive?: string;
	monero?: string;
};

export const clickToPayToken = (token: Token) => {
	const links: ClickToPay = {};

	const networkName = tokens[token].network;
	if (walletNetworks.trustWallet.includes(networkName)) {
		links.trustWallet = trustWalletToken(token);
	}
	if (walletNetworks.metamask.includes(networkName)) {
		links.metamask = metaMaskToken(token);
	}
	if (walletNetworks.ledgerLive.includes(networkName)) {
		links.ledgerLive = ledgerLive(networks[networkName]);
	}

	return links;
};

export const clickToPayCoin = (networkName: NetworkName) => {
	const links: ClickToPay = {};

	const coin = networks[networkName];
	if (walletNetworks.trustWallet.includes(networkName)) {
		links.trustWallet = trustWalletCoin(coin);
	}
	if (networkName === "eth") {
		links.metamask = metaMaskCoin("eth");
	}
	if (walletNetworks.ledgerLive.includes(networkName)) {
		links.ledgerLive = ledgerLive(coin);
	}

	return links;
};
