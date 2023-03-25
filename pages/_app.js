/* eslint-disable react/prop-types */
import '../styles/globals.css'
import { AuthProvider } from '../firebase/context'
import Layout from '../components/Layout'

function MyApp ({ Component, pageProps }) {
  return (

      <AuthProvider>
        <Layout>
         <Component {...pageProps} />
         </Layout>
      </AuthProvider>

  )
}

export default MyApp
