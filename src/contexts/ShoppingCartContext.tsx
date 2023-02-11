import { ShoppingCartModal } from "@/components/ShoppingCartModal"
import { createContext, useContext, useState } from "react"

interface Product {
  id: string
}

interface ShoppingCartContextData {
  openModal: boolean
  toggleOpenModal: (open: boolean) => void
  products: Product[]
  addProduct: (product: Product) => void
}

interface ShoppingCartProviderProps {
  children: React.ReactNode
}

const ShoppingCartContext = createContext({} as ShoppingCartContextData)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [openModal, setOpenModal] = useState(false)
  const [products, setProducts] = useState<Product[]>([])


  function addProduct(product: Product) {
    setProducts([...products, product])
  }

  function toggleOpenModal(open: boolean) {
    setOpenModal(open)
  }

  return (
    <ShoppingCartContext.Provider value={{ openModal, toggleOpenModal, products, addProduct }}>
      {children}

      <ShoppingCartModal />
    </ShoppingCartContext.Provider>
  )
}