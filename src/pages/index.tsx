import Image from "next/image"

import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from "@/styles/pages/home"

import 'keen-slider/keen-slider.min.css'
import { GetStaticProps } from "next/types"
import { stripe } from "@/lib/stripe"
import Stripe from "stripe"
import Link from "next/link"
import Head from "next/head"
import { ShoppingCartButton } from "@/styles/pages/app"
import { Handbag } from "phosphor-react"

interface HomeProps {
  products: {
    id: string,
    name: string,
    imageUrl: string,
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.6,
      spacing: 48
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => (
          <Link key={product.id} href={`product/${product.id}`} prefetch={false}>
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>

                <ShoppingCartButton color="green">
                  <Handbag size={32} weight="bold"/>
                </ShoppingCartButton>
              </footer>
            </Product>
          </Link>
        ))}

      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products
    .list({ expand: ['data.default_price']})
  
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount! / 100)

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formattedPrice
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}