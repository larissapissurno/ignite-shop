import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import logo from '@/assets/logo.svg'
import { Handbag } from 'phosphor-react'
import { Container, Header, ShoppingCartButton } from '@/styles/pages/app'
import Image from 'next/image'
import { useState } from 'react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [quantity, setQuantity] = useState(2)

  const empty = quantity === 0
  
  return (
    <Container>
      <Header>
        <Image src={logo} alt="" />

        <ShoppingCartButton empty={empty}>
          <Handbag size={24} />

          {!empty && <span>{quantity}</span>}
        </ShoppingCartButton>
      </Header>


      <Component {...pageProps} />
    </Container>
  )
}
