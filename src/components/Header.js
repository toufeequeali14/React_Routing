import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'



const Header = ({ navMargin }) => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Toufeeque</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link as={Link} to='/projects'>Projects</Nav.Link> */}

       
            <Nav.Link as={Link} to='/projects'>Projects</Nav.Link>
            
            <NavDropdown title="Reviews" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to='/buyer'>Buyer Review</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Seller Review
              </NavDropdown.Item>


            </NavDropdown>
            <Nav.Link as={Link} to='contact'>
              Contact Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">

            
            <Button variant="outline-primary">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header;
