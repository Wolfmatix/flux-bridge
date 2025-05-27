import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <Card className="w-full max-w-md text-center border border-white bg-neutral-900 rounded-2xl shadow-xl p-4">
        <CardContent>
          <h1 className="text-3xl font-bold mb-4">FLUX Bridge</h1>
          <p className="mb-6">Bridge ETH from Base to SOL on Solana or vice versa — fast, cheap, onchain.</p>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">Connect Wallet</Button>
        </CardContent>
      </Card>
    </main>
  );
}