import './globals.css'
miConfig } from 'wagmi'
import { wagmiConfig } from '../lib/wagmi'

export default function RootLayout({ children }) {
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
