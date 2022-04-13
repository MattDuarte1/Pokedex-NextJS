import { ReactNode } from 'react';
import * as C from './style'

interface bodyProps {
  children: ReactNode
}

const Body = ({children}: bodyProps) => {

  return(
    <C.Container>
        {children}
    </C.Container>
    
  )
}


export default Body;