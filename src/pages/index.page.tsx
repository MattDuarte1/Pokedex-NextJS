import {GetStaticProps, NextPage} from 'next'
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

interface HomeProps {
  AllPokes: pokeProps,
  error: Boolean
}


const Home: NextPage | any  = ({AllPokes, error}: HomeProps) => {
  return(
    <C.Content>
       <Head>
        <title>PokeDex - Feito por Mateus Duarte</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {error === false && !!AllPokes && AllPokes.map((item:pokeProps, index:number) => (
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
  const Pokemons = await API.getAllPokemons("20", "0");

  if(!Pokemons) {
    return {
      props: {
        error: true
      }
    }
  }

  return {
    props: {
      AllPokes: Pokemons,
      error: false
    },
    revalidate: 7200
  }
}

