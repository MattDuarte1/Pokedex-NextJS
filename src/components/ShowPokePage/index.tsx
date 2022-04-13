/* eslint-disable @next/next/no-img-element */
import Link from '../Link'
import { Status } from './Status'
import * as C from './style'

interface dataProps {
  nome: string,
  img: string,
  status: [
    {
      base_stat: number,
      effort: number,
      stat: {
        name: string,
        url: string,
      }
    }
  ],
  tipos: any,
}

export const ShowPokePage = ({nome, img, status}: dataProps) => {
  return(
  <C.PokeContainer>
    <C.TitlePoke>{nome}</C.TitlePoke>
    <img src={img} alt="" />
    <Link href='/'>
      Clique aqui para voltar
    </Link>
    <C.TitlePokeInfo>Informações</C.TitlePokeInfo>
    <C.StatusMainContainer>
      {!!status &&
      status.map((item, index) => (
        <Status key={index} status={item}/>
      ))}
    </C.StatusMainContainer>
  </C.PokeContainer>
  )
}