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
import { X } from 'phosphor-react'

export function ShoppingCartModal() {
  const { openModal, toggleOpenModal } = useShoppingCart()

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
              <Item>
                <ItemImageContainer>
                  {/* <Image src={} /> */}
                </ItemImageContainer>

                <ItemInfoContainer>
                  <span>Camiseta Beyond the Limits</span>
                  <strong>R$ 79,90</strong>
                  <button>Remover</button>
                </ItemInfoContainer>
              </Item>

              <Item>
                <ItemImageContainer>
                  {/* <Image src={} /> */}
                </ItemImageContainer>

                <ItemInfoContainer>
                  <span>Camiseta Beyond the Limits</span>
                  <strong>R$ 79,90</strong>
                  <button>Remover</button>
                </ItemInfoContainer>
              </Item>

              <Item>
                <ItemImageContainer>
                  {/* <Image src={} /> */}
                </ItemImageContainer>

                <ItemInfoContainer>
                  <span>Camiseta Beyond the Limits</span>
                  <strong>R$ 79,90</strong>
                  <button>Remover</button>
                </ItemInfoContainer>
              </Item>
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
