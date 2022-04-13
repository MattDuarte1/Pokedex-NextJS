import * as C from './style'


type statusProps = {
  status: {
    base_stat: number,
      effort: number,
      stat: {
        name: string,
        url: string,
      }
  }  
}


export const Status = ({status}: statusProps) => {
  return (
    <C.Container>
      <C.Title>{status.stat.name}</C.Title>
      <C.Box>
        <h1>{status.base_stat}</h1>
      </C.Box>
    </C.Container>
  )
}