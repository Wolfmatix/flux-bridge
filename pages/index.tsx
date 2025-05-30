// pages/index.tsx
"use client";

import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ethers } from "ethers";
import { Socket } from "@socket.tech/plugin";
import Head from "next/head";
import Image from "next/image";
import banner from "../public/flux-banner.png";
import { Button } from "../button";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", () => window.location.reload());
      window.ethereum.on("chainChanged", () => window.location.reload());
    }
  }, []);

  const handleBridge = async () => {
    const minAmount = 0.0005;
    const inputAmount = parseFloat(amount);
    if (isNaN(inputAmount) || inputAmount < minAmount) {
      alert(`Minimum bridge amount is ${minAmount} ETH`);
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();

      // Send ETH to Socket SDK for bridging
      const socket = new Socket({
        apiKey: "YOUR_SOCKET_API_KEY",
        defaultSourceNetwork: "base",
        defaultDestNetwork: "solana",
        sourceTokenSymbol: "ETH",
        destTokenSymbol: "SOL",
        amount: inputAmount.toString(),
        userAddress: address,
        customFee: {
          percentage: 1,
          recipient: "0xfd0725B9fD15B983514b8B99fb70e2ae018c9a8D",
        },
      });

      await socket.initiateBridge();
      alert("Bridge transaction initiated!");
    } catch (err) {
      console.error(err);
      alert("Bridge failed. Check console for details.");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-8">
      <Head>
        <title>FLUX Bridge</title>
        <meta name="description" content="Bridge Base ETH to Solana SOL" />
        <meta property="og:image" content="/flux-banner.png" />
      </Head>
      <Image src={banner} alt="Flux banner" width={600} height={200} className="rounded-xl mb-6" />
      <h1 className="text-4xl font-bold mb-4">Flux Bridge</h1>
      <ConnectButton chainStatus="icon" />

      <div className="mt-8 space-y-4 w-full max-w-md">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 bg-gray-800 rounded-lg text-white placeholder-gray-400"
          placeholder="Enter ETH amount to bridge"
        />
        <Button onClick={handleBridge} className="w-full">
          Bridge ETH → SOL
        </Button>
      </div>
    </main>
  );
}
