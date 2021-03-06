import React, { useEffect, useState } from "react";
import {
  Container,
  Col,
  Image,
  Row,
  Button,
  Card,
  Spinner,
  ButtonGroup,
  Badge,
  Alert,
} from "react-bootstrap";
import BigStar from "../assest/bigStar.png";
import { useHistory, useParams } from "react-router-dom";
import { useTypeSelector } from "../hooks/useTypeSelector";

import { Device } from "../types/device";
import { StarRating } from "../components/StarRating";
import { useDispatch } from "react-redux";
import { addDeviceBasket } from "../store/action-creators/basket";
import { BASKET_ROUTE } from "../utils/consts";
type QuizParams = {
  id: string;
};
const DevicePage: React.FC = () => {
  const { oneDevice } = useTypeSelector((state) => state.oneDevice);
  const { id } = useParams<QuizParams>();
  const { type } = useTypeSelector((state) => state.type);
  const { brand } = useTypeSelector((state) => state.brand);
  const { device } = useTypeSelector((state) => state.backet);
  const { user } = useTypeSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  console.log(user);
  const addBacket = (devic: Device) => {
    dispatch(addDeviceBasket(devic));
  };

  const chek = device.findIndex(
    (currentValue) => currentValue.id == oneDevice?.id
  );

  console.log(chek);

  return (
    <>
      {oneDevice === null ? (
        <Spinner animation={"grow"} />
      ) : (
        <Container className="mt-3 ">
          <Row>
            <Col md={4}>
              <Image
                width={250}
                height={400}
                src={"http://localhost:5000/" + oneDevice.img}
              />
            </Col>
            <Col md={4}>
              <Row className="d-flex flex-colum align-items-center">
                <strong>
                  {type.map((type) =>
                    type.id === oneDevice!.typeId ? (
                      <strong>{type.name} </strong>
                    ) : (
                      ""
                    )
                  )}
                  {brand.map((brand) =>
                    brand.id === oneDevice!.brandId ? (
                      <strong>{brand.name} &nbsp;</strong>
                    ) : (
                      ""
                    )
                  )}
                  {oneDevice!.name}
                </strong>

                <div
                  className="d-flex align-items-center "
                  style={{
                    width: 340,
                    height: 240,
                    fontSize: 24,
                    backgroundSize: "cover",
                  }}
                >
                  ?????????????? &nbsp; <StarRating />
                </div>
              </Row>
            </Col>
            <Col md={4}>
              <Card
                className="d-flex flex-columm align-items-center justify-content-around"
                style={{
                  width: 300,
                  height: 300,
                  fontSize: 32,
                  border: "5px solid lightgray",
                }}
              >
                <h3> ???? {oneDevice!.price} ??????.</h3>
                {chek < 0 ? (
                  <>
                    {!user ? (
                      <Alert
                        style={{
                          textAlign: "center",
                          fontSize: 22,
                        }}
                        variant={"warning"}
                      >
                        ?????????????? ?????? ??????????????????????????????????
                      </Alert>
                    ) : (
                      <Button onClick={() => addBacket(oneDevice)}>
                        ???????????????? ?? ??????????????
                      </Button>
                    )}
                  </>
                ) : (
                  <>
                    <h5> ?????????? ???????????????? ?? ??????????????</h5>
                    <Button
                      onClick={() => history.push(BASKET_ROUTE)}
                      variant="primary"
                    >
                      ???????????? ?? ??????????????
                    </Button>
                  </>
                )}
              </Card>
            </Col>
          </Row>
          <Row className="d-flex flex-column">
            <h2>??????????????????????????</h2>
            {oneDevice!.info.map((info, index) => (
              <Row
                key={info.id}
                style={{
                  background: index % 2 === 0 ? "lightgray" : "transparent ",
                }}
              >
                {info.title}:{info.description}
              </Row>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default DevicePage;
