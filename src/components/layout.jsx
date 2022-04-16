import Helmet from 'react-helmet'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({title, children}) {
  return (
    <div className='flex flex-col min-h-screen'>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <Navbar/>
        <main className='flex-1'>
            {children}
        </main>
        <Footer/>
    </div>
  )
}
