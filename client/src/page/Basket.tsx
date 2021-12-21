import React, { useEffect, useState } from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { Card, Button, Container, Form, Row, Col } from "react-bootstrap";
import { DeviceListBasket } from "../components/DeviceListBasket";
import DeviceList from "../components/DeviseList";
const Basket: React.FC = () => {
  const { device } = useTypeSelector((state) => state.backet);
  const [sumPrece, setsumPrece] = useState(0);

  useEffect(() => {
    setsumPrece(
      device.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
      }, 0)
    );
  }, [device]);
  return (
    <Container>
      <h3 className="row justify-content-md-center">Корзина</h3>
      <h5> Выберете устройства </h5>
      <Row className="mt-2">
        <Col md={9}>
          <DeviceList device={device} />
        </Col>
      </Row>
      {device.length > 0 ? (
        <Card className="text-center">
          <Card.Header>
            <Button variant="info">Прийты к оформление</Button>
          </Card.Header>
          <Card.Body>
            <Card.Title>Итого</Card.Title>
            <Card.Text>{sumPrece}₽&nbsp; сумма</Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            Доставка в течение 2 дней
          </Card.Footer>
        </Card>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Basket;
