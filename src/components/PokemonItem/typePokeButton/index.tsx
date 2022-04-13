import * as C from './style'

type dataProps = {
  data: {
    type: {
      name: string
    }
  },
  colorButton: string
}

export const TypePokeButton = ({data, colorButton}: dataProps) => {
  return (

    <C.Container backgroundColor={colorButton}>
    {data.type.name}
    </C.Container>

  )
}