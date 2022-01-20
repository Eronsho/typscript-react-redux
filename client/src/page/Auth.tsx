import React, { useContext, useState } from "react";
import { Card, Button, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation, NavLink, useHistory } from "react-router-dom";
import {
  addLoginUseerRequest,
  addUseerRequest,
} from "../store/action-creators/user";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const click = async () => {
    try {
      let data;
      if (isLogin) {
        dispatch(addLoginUseerRequest({ email, password }));
        console.log(data);
      } else {
        dispatch(addUseerRequest({ email, password }));
      }
      history.push(SHOP_ROUTE);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center "
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 468 }} className="p-5">
        <h2 className="m-avto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex  flex-column">
          {isLogin ? (
            <div>
              <Form.Control
                className="mt-4"
                placeholder="Ввеедите ваш email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
              <Form.Control
                className="mt-4"
                placeholder="Ввеедите ваш password..."
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </div>
          ) : (
            <div>
              <Form.Control
                className="mt-4"
                placeholder="Ввеедите ваш email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
              <Form.Control
                className="mt-4"
                placeholder="Ввеедите ваш password..."
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </div>
          )}
          <Row className="d-flex justify-content-between mt-4 pl-4 pr-4">
            {isLogin ? (
              <div>
                нет аккаунта?
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
              </div>
            ) : (
              <div>
                есть аккаунта? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
              </div>
            )}
            <Button
              className="mt-3 align-self-end"
              onClick={click}
              variant={"outline-success"}
            >
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};
export default Auth;
