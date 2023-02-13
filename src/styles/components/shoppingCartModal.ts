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
  padding: '4.5rem 3rem 2.5rem', // top, right, bottom, left
  backgroundColor: '$gray800',
  boxShadow: '-10px 0px 38px 3px rgba(0,0,0,0.6)',

  position: 'fixed',
  top: 0,
  right: 0,

  h2: {
    fontSize: '$lg',
  }
})

export const ContentContainer = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  backgroundColor: 'transparent',
  border: 'none',

  top: '1.5rem',
  right: '1.5rem',

  lineHeight: 0,
  cursor: 'pointer',

  color: '$gray500',

})

export const ItemsContainer = styled('div', {
  marginTop: '2rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const Item = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '1.25rem',

  height: 102,
})

export const ItemImageContainer = styled('div', {
  height: '100%',
  width: 102,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8
})

export const ItemInfoContainer = styled('div', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',

  span: {
    fontSize: '$md',
    lineHeight: 1.6
  },

  strong: {
    fontSize: '$md',
    lineHeight: 1.6
  },

  button: {
    marginTop: 'auto',
    backgroundColor: 'transparent',
    border: 'none',

    fontWeight: 'bold',
    fontSize: 16,
    color: '$green500',

    cursor: 'pointer',

    textAlign: 'left',

    '&:hover': {
      color: '$green300',
      transition: 'color 0.2s'
    }
  }
})

export const CheckoutContainer = styled('div', {
  marginTop: 'auto',

  display: 'flex',
  flexDirection: 'column',
  gap: '3.5rem',

  button: {
    backgroundColor: '$green500',
    border: 'none',
    color: '$white',
    borderRadius: '8px',
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    width: '100%',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
      transition: 'background-color 0.2s'
    }
  }
})

export const CheckoutInfo = styled('div', {
  div: {
    display: 'flex',
    justifyContent: 'space-between',

    span: {
      fontSize: 16,
      lineHeight: 1.6,
    },

    strong: {
      fontSize: 16,
      lineHeight: 1.6,
    },

    'strong:nth-of-type(2)': {
      fontSize: '$xl',
    }
  }
})
