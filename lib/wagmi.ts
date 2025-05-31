import { createConfig, configureChains } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient } = configureChains(
  [mainnet],
  [publicProvider()],
)

export const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  // Remove 'chains' here!
})

// If you need chains elsewhere, export them:
export { chains }
