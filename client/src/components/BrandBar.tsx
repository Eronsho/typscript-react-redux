import React from "react";
import { useDispatch } from "react-redux";
import { TypeBrand } from "../types/device";
import { Row, Card } from "react-bootstrap";
import { selectedBrands } from "../store/action-creators/brand";

type BrandListProps = {
  brands: TypeBrand[];
  selectedBrandId: TypeBrand;
};
const allBrand = {
  id: null,
  name: "все",
  createdAt: 1,
  updatedAt: 1,
};
const BrandBar: React.FC<BrandListProps> = ({ brands, selectedBrandId }) => {
  const dispatch = useDispatch();
  const setSelectedBrand = (brand: TypeBrand) => {
    dispatch(selectedBrands(brand));
  };

  return (
    <Row className="d-flex">
      <Card
        className="p-3"
        style={{ cursor: " pointer" }}
        onClick={() => setSelectedBrand(allBrand)}
        border={selectedBrandId.id === null ? "danger" : "light"}
      >
        Все
      </Card>
      {brands.map((brand) => (
        <Card
          className="p-3"
          key={brand.id}
          style={{ cursor: " pointer" }}
          onClick={() => setSelectedBrand(brand)}
          border={selectedBrandId?.id === brand.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
};

export default BrandBar;
