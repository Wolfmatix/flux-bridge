// app/page.tsx
'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';

export default function Home() {
  const { address, isConnected } = useAccount();
  const [ethAmount, setEthAmount] = useState('');
  const [solEstimate, setSolEstimate] = useState('');

  const handleEstimate = () => {
    const eth = parseFloat(ethAmount);
    if (!isNaN(eth)) {
      const sol = (eth * 70).toFixed(2); // mock rate
      setSolEstimate(sol);
    }
  };

  const handleBridge = () => {
    if (!ethAmount || !solEstimate) return alert('Enter amount first.');
    alert(`Bridging ${ethAmount} ETH Socket SDK or contract
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-8">
      <Image
        src="/file_000000006e7461f7968520cf14f5790a.png"
        alt="Flux"
        width={800}
        height={400}
        className="rounded-xl mb-6 shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-4">Flux Bridge</h1>
      <p className="mb-8 text-gray-400">Bridge ETH ↔ SOL seamlessly across Base and Solana.</p>

      {!isConnected ? (
        <ConnectButton />
      ) : (
        <div className="w-full max-w-md bg-zinc-900 p-6 rounded-xl shadow-lg">
          <label className="block mb-2 text-sm font-medium">Amount (ETH)</label>
          <input
            type="number"
            value={ethAmount}
            onChange={(e) => setEthAmount(e.target.value)}
            placeholder="0.05"
            className="w-full px-4 py-2 rounded-lg text-black mb-4"
          />
          <button
            onClick={handleEstimate}
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg mb-4"
          >
            Estimate SOL
          </button>
          {solEstimate && (
            <p className="mb-4 text-green-400">You’ll receive ~{solEstimate} SOL</p>
          )}
          <button
            onClick={handleBridge}
            className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg"
          >
            Bridge Now
          </button>
        </div>
      )}
    </main>
  );
}
