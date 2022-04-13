import axios from 'axios';


const url = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
}) 


export const API = {
  getAllPokemons: async (limite: string | undefined, offset:string | undefined) => {
    const request = await url.get(`?limit=${limite}&offset=${offset}`)
    return request.data.results
  },
  getPokeData: async (name: string) => {
      try {
        const request = await url.get(`/${name}`)
        return request.data
      } catch (error) {
        console.log('Deu algum erro')
      }

  }
}