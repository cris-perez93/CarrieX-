
import Head from 'next/head'
import Header from '../Header'
import SideBar from '../Sidebar'

const Layout = (props) => {
  return (
        <>
    <Head>
        <title>mediamarkt-erp-delivery</title>

         <link rel="preconnect" href="https://fonts.googleapis.com"/>
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
         <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;600;900&display=swap" rel="stylesheet"/>
    </Head>
       <Header />
       <SideBar/>
    </>
  )
}

export default Layout
