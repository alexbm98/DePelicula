import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../images/logo.png';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.css'

export default function NavigationBar()
{
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/films"><img src={Logo} alt="Logo" width={150} height={50}></img></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 py-3"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/films" className={styles.navBarFirstOption}>Films</Link>
            <Link to="/series" className={styles.navBarOption}>Series</Link>
            <Link to="/animes" className={styles.navBarOption}>Anime</Link>
          </Nav>
          <SearchForm></SearchForm>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
