/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { API } from '../../api'
import * as C from './style'
import { TypePokeButton } from './typePokeButton'

interface dataProps {
  data : {
    name: string,
    url: string
  }
}


 const PokemonItem = ({data}: dataProps) => {


  const [pokeData, setPokeData] = useState({
    logo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    backgroundImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
    types: []
  })
  const [typePoke, setTypePoke] = useState("") 
  const [loading, setLoading] = useState(true)



  const searchDataPokes = async (pokeName: string) => {
      const res = await API.getPokeData(pokeName)
       return setPokeData(
        {logo: res.sprites.front_default, 
        backgroundImg: res.sprites.other.dream_world.front_default, 
        types: res.types})
  }

  useEffect(() => {
      if(!!data) {
        searchDataPokes(data.name)
      }

  },[data])


  type typeProps = {
    type: {
      name: string,
      url: string
    }
  }



  
  // Passa a cor para o PokeContainer baseado no tipo do pokemon
  useEffect(() => {
    if(!!pokeData.types) {
      pokeData.types.map((item:typeProps) => {
        switch (item.type.name) {
          case 'grass':
            setLoading(current => current ? !current : current)
            return setTypePoke(current => current === "#3C1742" ? current ='#6BD425' : '#6BD425')
          case "fire":
            setLoading(current => current ? !current : current)
            return setTypePoke("#FF0022")
          case "bug":
            setLoading(current => current ? !current : current)
            return setTypePoke('#849324')
          case "water":
            setLoading(current => current ? !current : current)
            return setTypePoke("#4592c4")
          case "flying": 
            setLoading(current => current ? !current : current)
            return setTypePoke((current) => current === "#FF0022" ? current : "#5D737E")
          case "normal":
            setLoading(current => current ? !current : current)
            return setTypePoke("#282B28")
          case "poison":
            setLoading(current => current ? !current : current)
            return setTypePoke((current) => current === "#5D737E" ? current = "#3C1742" : current === "#6BD425" ? "#6BD425" : current === "#849324" ? "#849324" : "#3C1742")
          case "rock":
            setLoading(current => current ? !current : current)
            return setTypePoke("#61707D")
          case "electric":
            setLoading(current => current ? !current : current)
            return setTypePoke("#F1D302")
          case "psychic":
            setLoading(current => current ? !current : current)
            return setTypePoke("#D76A03")
          case "fighting":
            setLoading(current => current ? !current : current)
            return setTypePoke(current => current === "#4592c4" ? "#4592c4" : "#731DD8")
          case 'fairy':
            setLoading(current => current ? !current : current)
            return setTypePoke((current) => current === "#282B28" ? current ="#FF206E" : "#FF206E" )
          case 'ground':
            setLoading(current => current ? !current : current)
            return setTypePoke(current => current === "#3C1742" ? current = "#3C1742" : "#591F0A")
          default:
            setLoading(false)
            break;
        }
      })
    }
  },[pokeData])



  return (!!loading ?
    <C.PokeLoadingContainer>
    <C.Spinner>

    </C.Spinner>
  </C.PokeLoadingContainer> 
  :
  <C.PokeContainer backgroundColor={typePoke} pokeUrl={pokeData.backgroundImg}> 
  <C.Title>{data.name}</C.Title>
   <img src={pokeData.logo} alt="" />
  <C.Description>
    {pokeData.types.map((item, index) => (
      <TypePokeButton key={index} data={item} colorButton={typePoke}/>
    ))}
  </C.Description>
</C.PokeContainer>   
  
  )

}


export default React.memo(PokemonItem);

