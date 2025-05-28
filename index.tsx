
import Head from 'next/head';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <Head>
        <title>Flux Bridge</title>
        <meta property="og:title" content="Flux Bridge" />
        <meta property="og:image" content="/og.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1 className="text-4xl font-bold mb-8">Flux Bridge</h1>
      <ConnectButton />
      {isConnected && (
        <iframe
          src="https://app.socket.tech/widget?sourceChainId=8453&destinationChainId=101&sourceToken=eth&destinationToken=sol&recipientWalletChainId=101&customDestinationAddressRequired=true&singleTxOnly=true&feePercentage=1&feeRecipient=0xfd0725B9fD15B983514b8B99fb70e2ae018c9a8D"
          style={{ width: '100%', height: '600px', border: 'none', marginTop: '2rem' }}
        ></iframe>
      )}
    </div>
  );
}
