import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { GlobalStyle } from '../styles/globalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
   <Layout>
      <Component {...pageProps} />
   </Layout>
   <GlobalStyle />
   </>
  )
}

export default MyApp
