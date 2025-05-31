import './globals.css'
import { ReactNode } from 'react'
import { WagmiConfig } from 'wagmi'
import { wagmiConfig } from '../lib/wagmi'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WagmiConfig config={wagmiConfig}>
          {children}
        </WagmiConfig>
      </body>
    </html>
  )
}
