
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="Flux Bridge" />
        <meta property="og:image" content="https://fluxbridge.xyz/og.png" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="https://fluxbridge.xyz/og.png" />
        <meta name="fc:frame:button:1" content="Bridge Now" />
        <meta name="fc:frame:post_url" content="https://fluxbridge.xyz" />
      </head>
      <body></body>
    </html>
  `);
}
