import React, { useState} from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from 'axios';
import ErrorNotice from "../err/ErrorNotice";

function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();

      try {
        const {data} = await Axios.post('/api/users/signin',{email, password})
     
       localStorage.setItem('userData', JSON.stringify(data))
        props.history.push("/admin");
      } catch (err) {
        err.response.data.msg && setError(err.response.data.msg);
      }
    };
    return (
      <div className="SignIn">
      <div className="form-container">
        <Form className="form"  onSubmit={submitHandler}>
          <h3 className="text-center">
            <b>Sign-in</b>
          </h3>
          <h6 className="text-danger">
          {error && (<ErrorNotice message={error} clearError={() => setError(undefined)} />)}
          </h6>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <span className="mandatory">*</span>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
  
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <span className="mandatory">*</span>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            id="Submit"
            variant="outline-info"
            block
            type="submit"
           >
            Submit
          </Button>
          <Form.Text>Forgot password?</Form.Text>
          <Link to='/changepassword' className="btn btn-outline-dark create-acc mt-4 btn-lg btn-block" id="Change">
            Change Password
          </Link>
        </Form>
      </div>
      </div>
    );
  
}

export default Signin
