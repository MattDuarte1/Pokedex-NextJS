import {GetStaticProps} from 'next'
import {API} from '../api'
import  PokemonItem  from '../components/PokemonItem'
import * as C from '../styles/indexStyle'
import Link from '../components/Link'



interface pokeProps {
  name: string,
  url: string,
}


type PokeProps = {
  AllPokes: pokeProps;
}

const Home = ({AllPokes}:PokeProps) => {
  return(
    <C.Content>
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

