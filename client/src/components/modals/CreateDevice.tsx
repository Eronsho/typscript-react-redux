import React, { useState, useEffect } from "react";
import { fetchDevice } from "../../store/action-creators/device";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { fetchType, selectedTypes } from "../../store/action-creators/type";
import { fetcBrand, selectedBrands } from "../../store/action-creators/brand";
import { Modal, Dropdown, Button, Form, Col, Row } from "react-bootstrap";
import { Info, TypeBrand } from "../../types/device";
import { createDevice } from "../../http/deviceApi";
type сreateListProps = {
  show: boolean;
  onHide: () => void;
};

const CreateDevice: React.FC<сreateListProps> = ({ show, onHide }) => {
  const { device } = useTypeSelector((state) => state.device);
  const { type } = useTypeSelector((state) => state.type);
  const { brand } = useTypeSelector((state) => state.brand);
  const { selectedBrand } = useTypeSelector((state) => state.brandId);
  const { selectedType } = useTypeSelector((state) => state.typeId);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState<File>();
  const [info, setInfo] = useState<Info[]>([]);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchDevice(null, null, 1, 4));
  //   dispatch(fetchType());
  //   dispatch(fetcBrand());
  // }, []);
  const setSelectedBrand = (brand: TypeBrand) => {
    dispatch(selectedBrands(brand));
  };
  const setSelectedType = (type: TypeBrand) => {
    dispatch(selectedTypes(type));
  };
  const selectFile = (e: any) => {
    setFile(e.target.files[0]);
  };
  const addInfo = () => {
    setInfo([...info, { number: Date.now(), title: "", description: "" }]);
  };
  const removeInfo = (number: number | undefined) => {
    setInfo(info.filter((i) => i.number !== number));
  };
  const changeInfo = (
    key: string,
    value: string,
    number: number | undefined
  ) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };
  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file as any);
    formData.append("brandId", selectedBrand.id as any);
    formData.append("typeId", selectedType.id as any);
    formData.append("info", JSON.stringify(info));
    createDevice(formData);
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить дивайся
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {selectedType?.name || "Выберите тип"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {type.map((type: TypeBrand) => (
                <Dropdown.Item
                  key={type.id}
                  onClick={() => setSelectedType(type)}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {selectedBrand?.name || "Выберите брэнд"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {brand.map((brand: TypeBrand) => (
                <Dropdown.Item
                  key={brand.id}
                  onClick={() => setSelectedBrand(brand)}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3"
            placeholder="Введите название устройства"
          ></Form.Control>
          <Form.Control
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-3"
            type="number"
            placeholder="Введите стоимость устройства"
          ></Form.Control>
          <Form.Control
            onChange={selectFile}
            className="mt-3"
            type="file"
          ></Form.Control>
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Добавить новое свойство
          </Button>
          {info.map((i) => (
            <Row className="mt-4">
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) =>
                    changeInfo("title", e.target.value, i.number)
                  }
                  placeholder="Введите название свойства"
                ></Form.Control>
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) =>
                    changeInfo("description", e.target.value, i.number)
                  }
                  placeholder="Введите описание свойства "
                ></Form.Control>
              </Col>
              <Col md={4}>
                <Button onClick={() => removeInfo(i.number)}>Удалить</Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-succes" onClick={addDevice}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
