import { useShoppingCart } from '@/contexts/ShoppingCartContext'
import {
  CheckoutContainer,
  CheckoutInfo,
  CloseButton,
  Content,
  ContentContainer,
  Item,
  ItemImageContainer,
  ItemInfoContainer,
  ItemsContainer,
} from '@/styles/components/shoppingCartModal'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'

export function ShoppingCartModal() {
  const { openModal, toggleOpenModal, products } = useShoppingCart()
  console.log('products ===> ', products)
  return (
    <Dialog.Root open={openModal} onOpenChange={toggleOpenModal}>
      <Dialog.Portal>
        <Content>
          <ContentContainer>
            <Dialog.Title>Sacola de compras</Dialog.Title>
            <CloseButton>
              <X size={24} />
            </CloseButton>

            <ItemsContainer>
              {products.map((product) => (
                <Item key={product.id}>
                  <ItemImageContainer>
                    <Image src={product.imageUrl} alt="" fill />
                  </ItemImageContainer>

                  <ItemInfoContainer>
                    <span>{product.name}</span>
                    <strong>{product.price}</strong>
                    <button>Remover</button>
                  </ItemInfoContainer>
                </Item>
              ))}
            </ItemsContainer>

            <CheckoutContainer>
              <CheckoutInfo>
                <div>
                  <span>Quantidade</span>
                  <span>3 itens</span>
                </div>

                <div>
                  <strong>Valor total</strong>
                  <strong>R$ 270,00</strong>
                </div>
              </CheckoutInfo>

              <button>Finalizar compra</button>
            </CheckoutContainer>
          </ContentContainer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
