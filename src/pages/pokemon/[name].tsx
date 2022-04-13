/* eslint-disable @next/next/no-img-element */
import {GetStaticProps} from 'next'
import { ParsedUrlQuery } from 'querystring';
import { API } from '../../api';
import * as C from './style'
import { useEffect, useState } from 'react';
import {useRouter} from 'next/router'
import { NotFoundPoke } from '../../components/NotFoundPoke';
import { ShowPokePage } from '../../components/ShowPokePage';
import {BsArrowLeftCircleFill} from 'react-icons/bs'


const Pokemon = ({Pokemon = null, error}:any) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [states, setStates] = useState(false)
  const { query } = useRouter();
  const router = useRouter()

  useEffect(() => {
    setStates(true)
    setLoading(true)
    if(error === true) {
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }

    if(error === false) {
      setTimeout(() => {
        setLoading(false)
        setStates(false)
      }, 2000);
    }

  },[query, error, Pokemon])


  const handleHomePage = () => {
      router.push('/')
  }

  return (
    <C.Content>
      <C.Backarrow>
       <BsArrowLeftCircleFill  onClick={handleHomePage} color='rgba(1,1,1,.5)' size={70}/>
      </C.Backarrow>
      {error && loading === false &&
        <NotFoundPoke />
      }

      {states && loading === true &&
      <C.Spinner></C.Spinner>}

      {Pokemon  && loading === false && error === false &&
      <ShowPokePage nome={Pokemon?.nome} img={Pokemon?.sprites.other.dream_world.front_default} status={Pokemon.status} tipos={Pokemon.tipos}/>
    }

     </C.Content>
  )
}

export default Pokemon;


export const getStaticPaths = async () => {
  const pokemons = await API.getAllPokemons("50", "0");

  const paths = pokemons.map((Pokemon:any) => ({
    params: { name: Pokemon.name.toString() }
  }))

  return { paths, fallback: "blocking" }

}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps = async (context) => {

  const { name } = context.params as Params

  const res = await API.getPokeData(`${name}`)
  if(!res) {
    return { props: { error: true }}
  }else {

   const resultado = {nome: res.name, sprites: res.sprites, status: res.stats, tipos: res.types}

  return {
    props: {
      Pokemon: resultado,
      error: false
      }
    }
  }
}