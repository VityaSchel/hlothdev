type Network = {
	address: string;
	trustWalletId: number;
	ledgerLiveName: string;
	metaMask?: true;
};

export const iban = "ES3101829003990206087791";

export const networks = {
	eth: {
		address: "0xE3e548ae4f1f74195857084ED335EF89C29Ce43c",
		trustWalletId: 60,
		ledgerLiveName: "ethereum",
		metaMask: true,
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

type Token = {
	network: NetworkName;
	contract: string;
	ledgerLiveName: string;
};

const tokens = {
	usdtErc20: {
		network: "eth",
		contract: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
		ledgerLiveName: "ethereum/erc20/usd_tether__erc20_",
	},
	usdtTrc20: {
		network: "tron",
		contract: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
		ledgerLiveName: "tron/trc20/tr7nhqjekqxgtci8q8zy4pl8otszgjlj6t",
	},
} as const satisfies Record<string, Token>;

export type ClickToPay = Partial<
	Record<"trustWallet" | "metaMask" | "ledgerLive", string>
>;

export const clickToPayCoin = (
	networkName: NetworkName,
	token?: Token,
): ClickToPay => {
	const { address, trustWalletId, ledgerLiveName, metaMask }: Network =
		networks[networkName];
	return {
		trustWallet: `https://link.trustwallet.com/send?asset=c${trustWalletId}${token ? `_t${token.contract}` : ""}&address=${address}`,
		...(metaMask && {
			metaMask: token
				? `https://metamask.app.link/send/${token.contract}/transfer?address=${address}`
				: `https://metamask.app.link/send/${address}`,
		}),
		ledgerLive: `ledgerlive://send?currency=${token?.ledgerLiveName ?? ledgerLiveName}&recipient=${address}`,
	};
};

export const clickToPayToken = (token: keyof typeof tokens) =>
	clickToPayCoin(tokens[token].network, tokens[token]);
