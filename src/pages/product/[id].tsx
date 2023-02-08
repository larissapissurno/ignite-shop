import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import Stripe from "stripe"
import axios from 'axios'
import { useState } from "react"
import Head from "next/head"

interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: string
    description: number
    defaultPriceId: string
  }
}

export default function Product( { product }: ProductProps ) {
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false)
  
  async function handleBuyProduct() {
    try {
      setIsCheckoutLoading(true)
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCheckoutLoading(false)
      alert('Falha ao realizar a compra. Tente novamente mais tarde.')
    }

  }

  if (!product) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={480} />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button disabled={isCheckoutLoading} onClick={handleBuyProduct}>
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}


export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params?.id || ''

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  }).then(product => {
    const price = product.default_price as Stripe.Price
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount! / 100)

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formattedPrice,
      description: product.description,
      defaultPriceId: price.id
    }
  })

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}