import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 89,90</span>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum a quae commodi animi. Saepe, placeat odit aliquam inventore minus cupiditate animi libero eos fugit architecto aliquid excepturi, harum, delectus ducimus.</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}