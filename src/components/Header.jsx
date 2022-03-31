import moon from "../images/moon-and-paw.png"
import NavBar from "./Navbar"

function Header() {
  return (
    
    <div className="header">
        <a className="logo" href="#home">
          <img className="logo" src={moon} alt='moon logo' />
        </a>
        <h1 className="title"> New Moon Grooming</h1>
        
    </div>
  )
}

export default Header