import React, { MouseEventHandler } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { TypeBrand } from "../types/device";
import { useDispatch } from "react-redux";
import { selectedTypes } from "../store/action-creators/type";
type TypeListProps = {
  types: TypeBrand[];
  selectedTypeId: TypeBrand;
};
const allType = {
  id: null,
  name: "все",
  createdAt: 1,
  updatedAt: 1,
};
const TypeBar: React.FC<TypeListProps> = ({ types, selectedTypeId }) => {
  const dispatch = useDispatch();
  const setSelectedType = (type: TypeBrand) => {
    dispatch(selectedTypes(type));
  };
  return (
    <ListGroup className="list-group">
      <ListGroup.Item
        style={{ cursor: "pointer" }}
        className="list-group-item"
        onClick={() => setSelectedType(allType)}
        active={selectedTypeId.id === null}
      >
        Все
      </ListGroup.Item>
      {types.map((type) => (
        <ListGroup.Item
          onClick={() => setSelectedType(type)}
          style={{ cursor: "pointer" }}
          className="list-group-item"
          key={type.id}
          active={type.id === selectedTypeId.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TypeBar;
