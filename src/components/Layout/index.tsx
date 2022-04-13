import { ReactElement } from 'react'
import Body from '../Body'
import { Header } from '../header'


interface Props {
  children: ReactElement
}


export const Layout = ({children}: Props) => {
  return (
    <>
    <Header />
      <Body>
        {children}
      </Body>
    </>
  )
}