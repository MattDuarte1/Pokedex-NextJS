import {useRouter} from 'next/router'

export const NotFoundPoke = () => {
  const { query } = useRouter()
  return (
    <>
    <h1 style={{fontSize:'30px', fontWeight: '500'}}>O Pokemon: <span style={{color:'red', fontWeight: '900'}}>{query.name}</span> não existe</h1>
    </>
  )
}