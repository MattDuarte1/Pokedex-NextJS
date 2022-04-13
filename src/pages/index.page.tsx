import {GetStaticProps} from 'next'
import {API} from '../api'
import  PokemonItem  from '../components/PokemonItem'
import * as C from '../styles/indexStyle'
import Link from '../components/Link'
import Head from 'next/head'



interface pokeProps {
  name: string,
  url: string,
  map:any,
}


type PokeProps = {
  AllPokes: pokeProps;
}

const Home = ({AllPokes}:PokeProps) => {
  return(
    <C.Content>
      <Head>
        <title>PokeDex - Feito por Mateus Duarte</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {!!AllPokes && AllPokes.map((item:pokeProps, index:number) => (
        <div key={index} >
         <Link href={`/pokemon/${item.name}`}>
            <PokemonItem data={item}/>
        </Link>
        </div>
      ))}
    </C.Content>
  )
}


export default Home;


export const getStaticProps:GetStaticProps = async () => {
  const Pokemons = await API.getAllPokemons("50", "0");
  
  return {
    props: {
      AllPokes: Pokemons
    },
    revalidate: 7200
  }
}

