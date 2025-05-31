'use client'

import { WagmiConfig } from 'wagmi'
import { createConfig, configureChains } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient } = configureChains(
  [mainnet],
  [publicProvider()],
)

const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
})

export function WagmiProvider({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}
