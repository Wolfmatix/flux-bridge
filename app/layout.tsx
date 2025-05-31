import './globals.css'
import { WagmiProvider } from '../components/WagmiProvider'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WagmiProvider>
          {children}
        </WagmiProvider>
      </body>
    </html>
  )
}
