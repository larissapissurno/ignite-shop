import { useShoppingCart } from '@/contexts/ShoppingCartContext';
import { CloseButton, Content, Overlay } from '@/styles/components/shoppingCartModal';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';

export function ShoppingCartModal() {
  const { openModal, toggleOpenModal } = useShoppingCart()

  return (    
    <Dialog.Root open={openModal} onOpenChange={toggleOpenModal}>
      {/* <Dialog.Trigger /> */}
      <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Title>Sacola de compras</Dialog.Title>
          <CloseButton>
            <X size={24} />
          </CloseButton>
          

          <p>form goes in here</p>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>  
  )
}