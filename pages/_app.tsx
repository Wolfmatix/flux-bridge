import '../styles/globals.css'
import type { AppProps } from 'next/app'

// Wagmi and RainbowKit providers
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { mainnet, polygon } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient } = configureChains(
  [mainnet, polygon],
  [publicProvider()]
)
const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Component {...pageProps} />
    </WagmiConfig>
  )
}

export default MyApp
