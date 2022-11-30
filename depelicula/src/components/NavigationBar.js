import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../images/logo.png';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddFilmModal({ showModal, setShowModal }) {

  const [title, setTitle] = useState();
  const [genre, setGenre] = useState();
  const [release_date, setReleaseDate] = useState();
  const [summary, setSummary] = useState();
  const [posterURL, setPosterURL] = useState();
  const [trailerURL, setTrailerURL] = useState();
  const [msg, setMsg] = useState("");

  const [show, setShow] = useState(showModal);

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  function closeModal() {
    setShow(false);
    setShowModal(false);
  }

  const handleSubmit = async e => {

    await fetch('http://localhost:8080/films/addFilm',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            genre: genre,
            release_date: release_date,
            summary: summary,
            poster: posterURL,
            trailer_url: trailerURL
        })
    }).then(response => response.json())
      .then(data => {
            if (data == null) {
                setMsg("Error");
            }
            else {
                closeModal();
                window.location.reload();
            }
        })
  }

  return (
    <div>
      <Modal show={show} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>NEW FILM</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Film title..."
              autoFocus
              onChange={e => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Genre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Film genre..."
              autoFocus
              onChange={e => setGenre(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Release date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Film release date..."
              autoFocus
              onChange={e => setReleaseDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Summary</Form.Label>
            <Form.Control
              type="text"
              placeholder="Film summary..."
              autoFocus
              onChange={e => setSummary(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Poster URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="URL of the film poster..."
              autoFocus
              onChange={e => setPosterURL(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Trailer URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="URL of the film trailer..."
              autoFocus
              onChange={e => setTrailerURL(e.target.value)}
            />
          </Form.Group>
          <label style={{ color: 'red', padding: '9px', fontSize: '15px', fontFamily: 'Calibri', fontStretch: '50%' }}>{msg}</label>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit} type="submit">
          Add
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}

function DeleteFilmModal({ showModal, setShowModal }) {

  const [title, setTitle] = useState();
  const [msg, setMsg] = useState("");

  const [show, setShow] = useState(showModal);

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  function closeModal() {
    setShow(false);
    setShowModal(false);
  }

  const handleSubmit = async e => {

    await fetch('http://localhost:8080/films/deleteFilm',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: title
    }).then(response => response)
      .then(data => {
            if (data.ok == false) {
                setMsg("This film doesn't exist!");
            }
            else {
                setMsg("");
                closeModal();
                window.location.reload();
            }
        })
  }

  return (
    <div>
      <Modal show={show} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>DELETE FILM</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Film title..."
              autoFocus
              onChange={e => setTitle(e.target.value)}
            />
          </Form.Group>
          <label style={{ color: 'red', padding: '9px', fontSize: '15px', fontFamily: 'Calibri', fontStretch: '50%' }}>{msg}</label>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit} type="submit">
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}

function UpdateFilmModal({ showModal, setShowModal }) {

  const [title, setTitle] = useState();
  const [genre, setGenre] = useState();
  const [release_date, setReleaseDate] = useState();
  const [summary, setSummary] = useState();
  const [posterURL, setPosterURL] = useState();
  const [trailerURL, setTrailerURL] = useState();
  const [msg, setMsg] = useState("");

  const [show, setShow] = useState(showModal);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  function closeModal() {
    setShow(false);
    setShowModal(false);
    setShowForm(false);
    setMsg("");
  }

  const handleCheck = async e => {

    await fetch('http://localhost:8080/films/filmExists',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: title
    }).then(response => response.json())
      .then(async data => {
        console.log(data);
            if (data == null) {
                setMsg("This film doesn't exist!");
                setShowForm(false);
            }
            else {

              await fetch('http://localhost:8080/films/search/' + title)
                .then(response => response.json())
                .then(data => {
                  setGenre(data.genre);
                  setReleaseDate(data.release_date);
                  setSummary(data.summary);
                  setPosterURL(data.poster);
                  setTrailerURL(data.trailer_url);
                  setMsg("");
                  setShowForm(true);
                })
            }
        })
  }

  const handleSubmit = async e => {

    await fetch('http://localhost:8080/films/updateFilm',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title,
          genre: genre,
          release_date: release_date,
          summary: summary,
          poster: posterURL,
          trailer_url: trailerURL
      })
    }).then(response => response.json())
      .then(data => {
        console.log(data);
            if (data == null) {
                setMsg("Error");
            }
            else {
                setMsg("");
                closeModal();
            }
        })
  }

  return (
    <div>
      <Modal show={show} onHide={closeModal}>
      <Modal.Header>
        <Modal.Title>UPDATE FILM</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title of the film you want to update</Form.Label>
            <Form.Control
              type="text"
              placeholder="Film title..."
              autoFocus
              onChange={e => setTitle(e.target.value)}
            />
            <br></br>
            <Button variant="primary" onClick={handleCheck}>
              Check
            </Button>
          </Form.Group>
          <label style={{ color: 'red', padding: '9px', fontSize: '15px', fontFamily: 'Calibri', fontStretch: '50%' }}>{msg}</label>
          {showForm && 
          <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Film genre..."
                autoFocus
                value={genre}
                onChange={e => setGenre(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Release date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Film release date..."
                autoFocus
                value={release_date}
                onChange={e => setReleaseDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Summary</Form.Label>
              <Form.Control
                type="text"
                placeholder="Film summary..."
                autoFocus
                value={summary}
                onChange={e => setSummary(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="URL of the film poster..."
                autoFocus
                value={posterURL}
                onChange={e => setPosterURL(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Trailer URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="URL of the film trailer..."
                autoFocus
                value={trailerURL}
                onChange={e => setTrailerURL(e.target.value)}
              />
            </Form.Group>
          </div>}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit} type="submit">
          Update
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}

function AdminOptions() {

  const [addModalIsOpen, setAddIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteIsOpen] = useState(false);
  const [updateModalIsOpen, setUpdateIsOpen] = useState(false);

  function openAddModal() {
    setAddIsOpen(true);
  }

  function openDeleteModal() {
    setDeleteIsOpen(true);
  }

  function openUpdateModal() {
    setUpdateIsOpen(true);
  }

  return(
      <Dropdown className={styles.adminButton}>
        <DropdownToggle variant="secondary" id="admin-dropdown">Administrator Options</DropdownToggle>
        <DropdownMenu variant="dark" container="body">
          <Dropdown.Header>Films</Dropdown.Header>
          <DropdownItem href="#" onClick={openAddModal}>​➕​ Add new film</DropdownItem>
          <DropdownItem href="#" onClick={openDeleteModal}>❌ Delete existing film</DropdownItem>
          <DropdownItem href="#" onClick={openUpdateModal}>​✏️​ Update data from existing film</DropdownItem>
          <Dropdown.Divider></Dropdown.Divider>
          <Dropdown.Header>Series</Dropdown.Header>
          <DropdownItem href="#">​➕​ Add new series</DropdownItem>
          <DropdownItem href="#">❌ Delete existing series</DropdownItem>
          <DropdownItem href="#">​✏️​ Update data from existing series</DropdownItem>
        </DropdownMenu>
        <AddFilmModal showModal={addModalIsOpen} setShowModal={setAddIsOpen}></AddFilmModal>
        <DeleteFilmModal showModal={deleteModalIsOpen} setShowModal={setDeleteIsOpen}></DeleteFilmModal>
        <UpdateFilmModal showModal={updateModalIsOpen} setShowModal={setUpdateIsOpen}></UpdateFilmModal>
      </Dropdown>
  );
}

export function NavigationBar({ token })
{
  token = JSON.parse(localStorage.getItem("token"));

  function LoginButton() {
    return(
        <div className={styles.lgButton}>
          <Link to={"/login"}>
            <input className="btn btn-success me-md-3" type="button" value="Sign In"></input>
          </Link>
        </div>
    );
  }

  function LogoutButton() {
    return(
      <div>
        <p className={styles.userText}>{"Welcome @" + token.username + "!"}</p>
        <Link to={"/login"}>
            <input className="btn btn-danger me-md-3" type="button" value="Log Out" onClick={handleLogout}></input>
        </Link>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.setItem("token", null);
  }

  function Registered() {    
    if (token != null) {
      return <LogoutButton />;
    }
    return <LoginButton />;
  }

  function ShowAdminOptions() {
    if (token != null) {
      if (token.roles.includes("ROLE_ADMIN")) return <AdminOptions></AdminOptions>
    }
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/films"><img src={Logo} alt="Logo" width={150} height={50}></img></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 py-2 shadow-3"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            <NavDropdown title={<span className="text-dark my-auto">Films</span>} id="navbarScrollingDropdown" className={styles.navBarFirstOption}>
              <Link to="/series" className={styles.dropdownOption}><NavDropdown.Item href="/series">​👽​ Science Fiction</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link to="/animes" className={styles.dropdownOption}><NavDropdown.Item href="/animes">😂​ Comedy</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link to="/animes" className={styles.dropdownOption}><NavDropdown.Item href="/animes">😱​​ Horror</NavDropdown.Item></Link>
            </NavDropdown>
            <NavDropdown title={<span className="text-dark my-auto">Series</span>} id="navbarScrollingDropdown" className={styles.navBarOption}>
              <Link to="/series" className={styles.dropdownOption}><NavDropdown.Item href="/series">​🎬​ Series</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link to="/animes" className={styles.dropdownOption}><NavDropdown.Item href="/animes">🍥 ​Anime</NavDropdown.Item></Link>
            </NavDropdown>
          </Nav>
          <ShowAdminOptions></ShowAdminOptions>
          <SearchForm token={token}></SearchForm>
          <Registered></Registered>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
