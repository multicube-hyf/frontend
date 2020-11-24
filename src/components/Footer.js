import React from "react";
import {useHistory} from 'react-router-dom'
import Help from "../components/help/Help";
import { Fab } from "@material-ui/core";





function Footer() {
  const history = useHistory()
  const handlerHelp=()=>{
    history.push('/help/')
  }

  return (
    <div className="footer">
      <Fab color="secondary" aria-label="edit">
      <button className="btn btn-link" onClick={handlerHelp}><Help/></button>
			 </Fab>
		  </div>
  );
}

export default Footer;

