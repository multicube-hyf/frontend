import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import ClearIcon from '@material-ui/icons/Clear';
import { Fab } from "@material-ui/core";

import InteractivePyramid from "../components/interactive pyramid/InteractivePyramid";
import Rectangle from "../components/rectangle/Rectangle";

function Help() {
  const [selectedNumber, setSelectedNumber] = useState(1);

  const history = useHistory();

  const routeChange = () => {
    history.goBack();
  };

  return (
    <div>
      <InteractivePyramid setSelectedNumber={setSelectedNumber} />
      <h3 className="selected">{selectedNumber}</h3>
      <Rectangle selectedNumber={selectedNumber} />
      <div className="next-btn">
        <Fab color="secondary" aria-label="edit">
          <button className="btn btn-link" onClick={routeChange}>
            <ClearIcon />
          </button>
        </Fab>
      </div>
    </div>
  );
}

export default Help;
