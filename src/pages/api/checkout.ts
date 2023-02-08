import { stripe } from "@/lib/stripe";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const priceId: string = req.body.priceId;
  const successUrl = `${process.env.NEXT_PUBLIC_URL}/success`;
  const cancelUrl = `${process.env.NEXT_PUBLIC_URL}/`;

  if (!priceId) {
    return res.status(400).json({
      error: {
        message: 'Missing priceId'
      }
    })
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ]
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}