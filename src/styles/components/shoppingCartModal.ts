import * as Dialog from "@radix-ui/react-dialog"
import { styled } from ".."

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0, // shorthand for top, right, bottom, left
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
})

export const Content = styled(Dialog.Content, {
  minWidth: '32rem',
  height: '100vh',
  padding: '2.5rem 3rem',
  backgroundColor: '$gray800',

  position: 'fixed',
  top: 0,
  right: 0
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  backgroundColor: 'transparent',
  border: 'none',

  top: '1rem',
  right: '1rem',

  lineHeight: 0,
  cursor: 'pointer',

  color: '$gray500',

})