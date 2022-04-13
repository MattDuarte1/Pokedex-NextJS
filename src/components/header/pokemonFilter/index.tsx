import * as C from './style';
import {BiSearch} from 'react-icons/bi'
import { useState } from 'react';
import {useRouter} from 'next/router'

export const PokemonFilterArea = () => {
  const [dropActive, setDropActive] = useState(false);
  const [searchInfo, setSearchInfo] = useState<string>("")
  const router = useRouter();

  const handleChangeInfoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchInfo(e.target.value.toLowerCase())
  }

  const handleSearch = () => {
    if(searchInfo) {
      setDropActive(false)
      router.push({
        pathname: '/pokemon/[name]',
        query: { name: searchInfo}
      })
    } else {
      return alert("Digite primeiro um Pokemon ou Id para busca")
    }
  }

  
  return (
    <>
    <C.PokeFilter dropActive={dropActive}>
    <C.ToggleDropDown dropActive={dropActive} onClick={() => setDropActive(!dropActive)}>
        <span></span>
        <span></span>
        <span></span>
      </C.ToggleDropDown>
    <C.Area>
      <C.FilterSearchArea>
        <label style={{display:'flex', justifyContent:"center"}} htmlFor="InpuSearchPoke">Procurar</label>
        <div style={{display: 'flex', justifyContent:"center", alignItems: "center"}}>
          <input type="text" name='InpuSearchPoke' value={searchInfo} onChange={(e) => handleChangeInfoInput(e)} />
          <button onClick={handleSearch}><BiSearch color='white' size={30}/></button>
        </div>
      </C.FilterSearchArea>
    </C.Area>
    <C.Area>
      <C.InfoSearch>
        <h1>Realize a Busca pelo Pokémon pelo nome ou usando o número</h1>
      </C.InfoSearch>
    </C.Area>
  </C.PokeFilter>
  </>
  )
}