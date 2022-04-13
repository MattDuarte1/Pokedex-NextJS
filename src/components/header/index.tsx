import { PokemonFilterArea } from './pokemonFilter/index';
import * as C from './style'
import Images from 'next/image';
import {useRouter} from 'next/router'

export const Header = () => {
  const router = useRouter();


  return (
    <C.Container>
        <C.Wrapper>
        <Images src='/images/logo.png' width={100} height={100} />
          <C.ContentWrapper>
            <C.ButtonPersonalizado onClick={() => router.push("/")} color='red' heightBorderBottomLeft="8px">
             Home
            </C.ButtonPersonalizado>
            <C.ButtonPersonalizado onClick={() => router.push("https://pokeapi.co/")} color='#F2BB05'>
                  API
            </C.ButtonPersonalizado>
            <C.ButtonPersonalizado onClick={() => {router.push("https://github.com/MattDuarte1/Pokedex-NextJS.git")}} color='#90F3FF' heightBorderBottomRight="8px">
                Github
            </C.ButtonPersonalizado>
          </C.ContentWrapper>
        </C.Wrapper>
      <PokemonFilterArea />
    </C.Container>
  )
}