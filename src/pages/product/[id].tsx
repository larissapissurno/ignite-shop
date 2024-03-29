import { stripe } from '@/lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Stripe from 'stripe'
import { useState } from 'react'
import Head from 'next/head'
import { useShoppingCart } from '@/contexts/ShoppingCartContext'

interface ProductProps {
  product: {
    id: string
    defaultPriceId: string
    description: string
    name: string
    imageUrl: string
    price: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false)
  const { addProduct, checkoutSingleItem } = useShoppingCart()

  function handleBuyProduct() {
    setIsCheckoutLoading(true)

    checkoutSingleItem(product.defaultPriceId)
      .then((checkoutUrl) => {
        window.location.href = checkoutUrl
      })
      .catch((error) => {
        console.log(error)
        alert('Falha ao realizar a compra. Tente novamente mais tarde.')
      })
      .finally(() => {
        setIsCheckoutLoading(false)
      })
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

          <div>
            <button
              disabled={isCheckoutLoading}
              onClick={() => addProduct(product)}
            >
              Adicionar na sacola
            </button>

            <button disabled={isCheckoutLoading} onClick={handleBuyProduct}>
              Comprar agora
            </button>
          </div>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id || ''

  const product = await stripe.products
    .retrieve(productId, {
      expand: ['default_price'],
    })
    .then((product) => {
      const price = product.default_price as Stripe.Price
      const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100)

      return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: formattedPrice,
        description: product.description,
        defaultPriceId: price.id,
      }
    })

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
