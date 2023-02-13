import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    marginTop: '3rem',
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4
  },

  a: {
    marginTop: '5rem',
    display: 'block',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300'
    }
  }
})

export const ImageListContainer = styled('figure', {
  width: 316,
  padding: 0,
  position: 'relative',
  maxWidth: '100%',

  div: {
    maxWidth: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    boxShadow: '-10px 0px 38px 3px rgba(0,0,0,0.6)',
  },

  'div:nth-child(2)': {
    left: 'calc(100% - 228px)',
  },

  'div:last-child': {
    position: 'relative',
    left: 'calc(100% - 140px)',
  }
})

export const ImageContainer = styled('div', {
  width: 140,
  height: 145,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  padding: '0.25rem',
  // marginTop: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})
