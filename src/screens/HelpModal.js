import React, { useState } from "react";

import { Modal, Button } from "react-bootstrap";

import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import { Fab } from "@material-ui/core";

import InteractivePyramid from "../components/interactive pyramid/InteractivePyramid";
import Rectangle from "../components/rectangle/Rectangle";
import  Help  from "../components/help/Help";

function HelpModal({history}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedNumber, setSelectedNumber] = useState(1);

  

  const routeChange = () => {
    history.goBack();
  };

  return (
    <div className="help-modal">
  <button className='btn btn-link' onClick={handleShow}>
  <Help/>
  </button>


  <Modal show={show} onHide={handleClose} animation={false}>
    <Modal.Header closeButton>
      <Modal.Title>Numbers 1 to 10</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <InteractivePyramid setSelectedNumber={setSelectedNumber} />
    <h3 className="selected">{selectedNumber}</h3>
    <Rectangle selectedNumber={selectedNumber} />
    </Modal.Body>
    <Modal.Footer>
    <div className="next-btn">
    <Fab color="secondary" aria-label="edit">
      <button className="btn btn-link" onClick={routeChange}>
        <ArrowForwardSharpIcon />
      </button>
    </Fab>
  </div>
     
    </Modal.Footer>
  </Modal>
     
    </div>
  );
}

export default HelpModal;
