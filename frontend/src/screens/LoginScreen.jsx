import { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { useLoginUserMutation } from "../slices/userApiSlice";
import { useDispatch, useSelector } from 'react-redux'
import { setCredentails } from '../slices/authSlice'
import { toast } from "react-toastify";

function LoginScreen() {

  const { userInfo } = useSelector((state) => state.auth)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [userLogin] = useLoginUserMutation()

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let res = await userLogin({ email, password }).unwrap()
      await dispatch(setCredentails(res))
      navigate('/')
    } catch (error) {
      console.log(error?.data?.message || error?.message)
      toast.error(error?.data?.message || error?.message)
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [userInfo])

  return (
    <FormContainer>
      <h1>Sign In</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New Customer? <Link to={"/register"}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
}


export default LoginScreen