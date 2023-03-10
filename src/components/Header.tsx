import { HeaderContainer } from '@/styles/components/header'
import { ShoppingCartButton } from '@/styles/pages/app'
import Image from 'next/image'
import logo from '@/assets/logo.svg'
import { Handbag } from 'phosphor-react'
import { useShoppingCart } from '@/contexts/ShoppingCartContext'

export function Header() {
  const { toggleOpenModal, showShoppingCart } = useShoppingCart()

  const empty = false
  return (
    <HeaderContainer centralized={!showShoppingCart}>
      <Image src={logo} alt="" />

      {showShoppingCart && (
        <ShoppingCartButton empty={empty} onClick={() => toggleOpenModal(true)}>
          <Handbag size={24} />

          {!empty && <span>{2}</span>}
        </ShoppingCartButton>
      )}
    </HeaderContainer>
  )
}
