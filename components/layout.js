import Menu from './Menu'
import Footer from './Footer'

const layout = ({children}) => {
  return (
    <>
        <Menu/>
        <main>{children}</main>
        <Footer/>
    </>
  )
}

export default layout