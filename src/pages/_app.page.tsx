import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { GlobalStyle } from '../styles/globalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle />
   <Layout>
      <Component {...pageProps} />
   </Layout>
   </>
  )
}

export default MyApp
