import React, { useState } from "react";

import { Modal} from "react-bootstrap";


import InteractivePyramid from "../components/interactive pyramid/InteractivePyramid";
import Rectangle from "../components/rectangle/Rectangle";
import  Help  from "../components/help/Help";

function HelpModal({history}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedNumber, setSelectedNumber] = useState(1);


  return (
    <div className="help-modal">
  <button className='btn btn-link' onClick={handleShow}>
  <Help/>
  </button>


  <Modal show={show} onHide={handleClose} animation={false}>
    <Modal.Header closeButton>
      <Modal.Title>Help</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <InteractivePyramid setSelectedNumber={setSelectedNumber} />
    <h3 className="selected">{selectedNumber}</h3>
    <div className="ml-5"><Rectangle selectedNumber={selectedNumber} /></div>
    </Modal.Body>
    <Modal.Footer>
   
    </Modal.Footer>
  </Modal>
     
    </div>
  );
}

export default HelpModal;
