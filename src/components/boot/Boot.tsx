import {Offcanvas,Button} from 'react-bootstrap'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Boot() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
         <Button variant="dark" onClick={handleShow}>
            <svg width="32" height="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.75 5.75h14.5"></path>
            <path d="M4.75 18.25h14.5"></path>
            <path d="M4.75 12h14.5"></path>
              </svg>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>


    
    
    
    
    
    
    </>

    
   
  )
}
