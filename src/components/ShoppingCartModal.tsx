import { useShoppingCart } from '@/contexts/ShoppingCartContext';
import { CloseButton, Content, Item, ItemImageContainer, ItemInfoContainer, ItemsContainer, Overlay } from '@/styles/components/shoppingCartModal';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { X } from 'phosphor-react';

export function ShoppingCartModal() {
  const { openModal, toggleOpenModal } = useShoppingCart()

  return (    
    <Dialog.Root open={openModal} onOpenChange={toggleOpenModal}>
      <Dialog.Portal>
        <Content>
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
        </Content>
      </Dialog.Portal>
    </Dialog.Root>  
  )
}