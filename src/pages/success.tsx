import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";

export default function Success() {
  const userName = 'Larissa Pissurno';
  const productName = 'Camiseta Beyond the Limits';

  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>
      
      </ImageContainer>

      <p>
        Uhuul <strong>{userName}</strong>, {' '}
        sua <strong>{productName}</strong> {' '}
        já está a caminho da sua casa. 
      </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}