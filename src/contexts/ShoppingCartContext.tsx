import { ShoppingCartModal } from '@/components/ShoppingCartModal'
import axios from 'axios'
import { createContext, ReactNode, useContext, useState } from 'react'

interface Product {
  id: string
  defaultPriceId: string
  description: string
  imageUrl: string
  name: string
  price: string
}

interface ShoppingCartContextData {
  openModal: boolean
  toggleOpenModal: (open: boolean) => void
  products: Product[]
  addProduct: (product: Product) => void
  showShoppingCart: boolean
  setShowShoppingCart: (show: boolean) => void
  checkoutSingleItem: (defaultPriceId: string) => Promise<string>
}

interface ShoppingCartProviderProps {
  children: ReactNode
}

const ShoppingCartContext = createContext({} as ShoppingCartContextData)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [openModal, setOpenModal] = useState(false)
  const [showShoppingCart, setShowShoppingCart] = useState(true)
  const [products, setProducts] = useState<Product[]>([])

  function addProduct(product: Product) {
    setProducts([...products, product])
  }

  function toggleOpenModal(open: boolean) {
    setOpenModal(open)
  }

  async function checkoutSingleItem(defaultPriceId: string): Promise<string> {
    return axios
      .post('/api/checkout', {
        priceId: defaultPriceId,
      })
      .then((response) => response.data?.checkoutUrl)
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        openModal,
        toggleOpenModal,
        products,
        addProduct,
        showShoppingCart,
        setShowShoppingCart,
        checkoutSingleItem,
      }}
    >
      {children}

      <ShoppingCartModal />
    </ShoppingCartContext.Provider>
  )
}
