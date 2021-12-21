import React from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { Card, CloseButton, Col, Image } from "react-bootstrap";
import star from "../assest/star.png";

import { Device } from "../types/device";
import { DEVICE_ROUTE } from "../utils/consts";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteDeviceBasket } from "../store/action-creators/basket";
import { fetchOneDevice } from "../store/action-creators/oneDevice";

type DeviceListProps = {
  devices: Device;
};
const DeciceItem: React.FC<DeviceListProps> = ({ devices }) => {
  const { type } = useTypeSelector((state) => state.type);
  const { brand } = useTypeSelector((state) => state.brand);
  const { oneDevice } = useTypeSelector((state) => state.oneDevice);

  const history = useHistory();
  const url = history.location.pathname;
  console.log(history.location.pathname);
  const dispatch = useDispatch();
  const addOneDevice = (id: number) => {
    dispatch(fetchOneDevice(id));
    history.push(DEVICE_ROUTE + "/" + id);
  };
  return (
    <Col className="container-device" style={{ position: "relative" }} md={3}>
      {url === "/basket" ? (
        <CloseButton
          onClick={() => dispatch(deleteDeviceBasket(devices.id))}
          style={{ position: "absolute", top: 9, left: "93% ", zIndex: 99 }}
          className="btn-close"
          aria-label="Hide"
        />
      ) : (
        ""
      )}
      <Card
        onClick={() => addOneDevice(devices.id)}
        style={{ width: 210, cursor: "pointer" }}
        border={"light"}
        className="
justify-content-center
align-items-center mt-2"
      >
        <Image
          width={150}
          height={250}
          src={"http://localhost:5000/" + devices.img}
        />
        <div
          className="text-black-50 mt-1 d-flex  
     justify-content-between
    align-items-center"
        >
          {type.map((type) =>
            type.id === devices.typeId ? (
              <strong>{type.name}&nbsp; </strong>
            ) : (
              ""
            )
          )}
          {brand.map((brand) =>
            brand.id === devices.brandId ? (
              <strong>{brand.name}&nbsp; </strong>
            ) : (
              ""
            )
          )}

          <div className="d-flex align-items-center">
            <Image src={star} /> <small>{devices.rating} </small>
          </div>
        </div>
        <div>
          {devices.name}
          <small> от {devices.price} руб.</small>
        </div>
      </Card>
    </Col>
  );
};

export default DeciceItem;
