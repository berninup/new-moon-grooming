import { Nav, Navbar } from "react-bootstrap"

function NavBar() {
  return (
   
    <Navbar>
    <Nav fill fixed="top" variant='tabs' defaultActiveKey='#home' >
        <Nav.Item>
            <Nav.Link href='#home'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href='#about'>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link >Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link>Home</Nav.Link>
        </Nav.Item>
    </Nav>
    </Navbar>
  )
}

export default NavBar