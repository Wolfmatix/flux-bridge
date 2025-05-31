'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';

export default function Home() {
  const { address, isConnected } = useAccount();
  const [ethAmount, setEthAmount] = useState('');
  const [solEstimate, setSolEstimate] = useState('');
  const [error, setError] = useState('');

  const handleEstimate = () => {
    setError('');
    const eth = parseFloat(ethAmount);
    if (isNaN(eth) || eth <= 0) {
      setError('Enter a valid, positive ETH amount.');
      setSolEstimate('');
      return;
    }
    // In production, fetch the actual rate from an API
    const sol = (eth * 70).toFixed(2); // mock rate
    setSolEstimate(sol);
  };

  const handleBridge = async () => {
    setError('');
    if (!ethAmount || !solEstimate) {
      setError('Enter amount and estimate first.');
      return;
    }
    // Placeholder for actual bridge logic
    alert(`Bridging ${ethAmount} ETH to approx. ${solEstimate} SOL`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#141E30] to-[#243B55] text-white flex flex-col items-center justify-center px-4 py-8">
      <div className="mb-10">
        <Image
          src="/file_000000006e7461f7968520cf14f5790a.png"
          alt="Flux"
          width={800}
          height={400}
          className="rounded-xl shadow-2xl"
        />
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          Flux Bridge
        </h1>
        <p className="mb-8 text-gray-300 text-lg">
          Bridge ETH ↔ SOL seamlessly across Base and Solana.
        </p>
      </div>
      <div className="w-full max-w-md bg-zinc-900 bg-opacity-80 p-8 rounded-3xl shadow-2xl mt-8">
        {!isConnected ? (
          <ConnectButton />
        ) : (
          <>
            <label className="block mb-2 text-md font-medium">Amount (ETH)</label>
            <input
              type="number"
              value={ethAmount}
              onChange={(e) => setEthAmount(e.target.value)}
              placeholder="0.05"
              className="w-full px-4 py-2 rounded-lg text-black mb-4"
              min="0"
              step="any"
            />
            <button
              onClick={handleEstimate}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 py-2 rounded-lg mb-4 font-semibold"
            >
              Estimate SOL
            </button>
            {error && (
              <div className="mb-4 text-red-400 text-md">{error}</div>
            )}
            {solEstimate && !error && (
              <p className="mb-4 text-green-400 text-lg">
                You’ll receive ~{solEstimate} SOL
              </p>
            )}
            <button
              onClick={handleBridge}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-2 rounded-lg font-semibold"
            >
              Bridge Now
            </button>
          </>
        )}
      </div>
    </main>
  );
}
