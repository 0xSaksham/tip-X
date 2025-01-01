import { http, createConfig } from "wagmi";
import { base, baseSepolia, localhost, mainnet, sepolia } from "wagmi/chains";

export const config = createConfig({
  chains: [mainnet, sepolia],
  ssr: true,
  transports: {
    [mainnet.id]: http(
      `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
    ),
    [sepolia.id]: http(
      `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
    ),
    [base.id]: http(
      `https://base-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
    ),
    [baseSepolia.id]: http(
      `https://base-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
    ),
    [localhost.id]: http(),
  },
});
