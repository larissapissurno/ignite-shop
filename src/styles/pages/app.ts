import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: '1180px',
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const ShoppingCartButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$gray800',
  color: '$gray300',

  width: '3rem',
  height: '3rem',
  borderRadius: '6px',
  border: 'none',

  position: 'relative',

  span: {
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '50%',
    backgroundColor: '$green500',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    color: '$white',
    fontWeight: 'bold',
    fontSize: '$sm',

    position: 'absolute',
    top: '-0.75rem',
    right: '-0.75rem',
  },

  variants: {
    color: {
      gray: {
        backgroundColor: '$gray800',
        cursor: 'not-allowed',
      },
      green: {
        backgroundColor: '$green500',
        color: '$white',
        cursor: 'pointer',

        '&:hover': {
          backgroundColor: '$green300',
          transition: 'background-color 0.2s',
        }
      }
    },
    empty: {
      true: {}
    }
  },

  compoundVariants: [
    {
      color: 'gray',
      empty: true,
      css: {
        color: '$gray300',
      }
    },
    {
      color: 'gray',
      empty: false,
      css: {
        color: '$gray100',
      }
    }
  ],

  defaultVariants: {
    color: 'gray',
    empty: true,
  }
})

