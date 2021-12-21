import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Button, Container, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Logo from "../assest/Logo.png";
import { NavLink, useHistory } from "react-router-dom";
import { useTypeSelector } from "../hooks/useTypeSelector";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
  BASKET_ROUTE,
} from "../utils/consts";
import { useDispatch } from "react-redux";
import { logOut } from "../store/action-creators/user";
const NavBar: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useTypeSelector((state) => state.user);
  const Out = () => {
    dispatch(logOut());
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to={SHOP_ROUTE}>
          <Image src={Logo} width={150} />
        </NavLink>
        {user ? (
          <Nav className="ml-auto">
            <Button
              className="mr-4"
              variant={"outline-light"}
              onClick={() => Out()}
            >
              Выйти
            </Button>
            <Button
              className="mr-4"
              variant={"outline-light"}
              onClick={() => history.push(ADMIN_ROUTE)}
            >
              Админ
            </Button>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(BASKET_ROUTE)}
            >
              Корзина
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant={"outline-light"}
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
