import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Container } from '@/styles/pages/app'
import { useState } from 'react'
import { ShoppingCartProvider, useShoppingCart } from '@/contexts/ShoppingCartContext'
import { Header } from '@/components/Header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Container>
        <ShoppingCartProvider>

          <Header />

          <Component {...pageProps} />

        </ShoppingCartProvider>
      </Container>
  )
}
