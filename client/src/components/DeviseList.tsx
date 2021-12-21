import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import DeviceItem from "./DeviceItem";
import { Device, TypeBrand } from "../types/device";
import { useHistory } from "react-router-dom";
type DeviceListProps = {
  device: Device[];
};
const DeviceList: React.FC<DeviceListProps> = (device) => {
  const history = useHistory();
  const url = history.location.pathname;
  return (
    <Row className="d-flex">
      {device.device[0] ? (
        device.device.map((devices) => (
          <DeviceItem key={devices.id} devices={devices} />
        ))
      ) : url !== "/basket" ? (
        <Alert variant="info">Товара нет в наличии</Alert>
      ) : (
        <Alert variant="info">Корзина пуста</Alert>
      )}
    </Row>
  );
};

export default DeviceList;
