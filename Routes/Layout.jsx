import { Outlet} from "react-router-dom"
import Header from "../components/Header"


const Layout = () => {
  return (
    <>
      <main>
        <Header/>

        
      <div>
        <Outlet/>
      </div>
      </main>
    </>
  )
}

export default Layout