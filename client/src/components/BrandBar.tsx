import React from "react";
import { useDispatch } from "react-redux";
import { TypeBrand } from "../types/device";
import { Row, Card } from "react-bootstrap";
import {
  selectedBrands,
  selectedBrandsAll,
} from "../store/action-creators/brand";
import { fetchDevice } from "../store/action-creators/device";
import { selectedTypes } from "../store/action-creators/type";
type BrandListProps = {
  brands: TypeBrand[];
  selectedBrandId: TypeBrand;
};
const BrandBar: React.FC<BrandListProps> = (brands) => {
  const dispatch = useDispatch();
  const setSelectedBrand = (brand: TypeBrand) => {
    dispatch(selectedBrands(brand));
  };

  return (
    <Row className="d-flex">
      <Card
        className="p-3"
        style={{ cursor: " pointer" }}
        onClick={() => dispatch(selectedBrandsAll())}
        border={brands.selectedBrandId.id === null ? "danger" : "light"}
      >
        Все
      </Card>
      {brands.brands.map((brand) => (
        <Card
          className="p-3"
          key={brand.id}
          style={{ cursor: " pointer" }}
          onClick={() => setSelectedBrand(brand)}
          border={brands.selectedBrandId?.id === brand.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
};

export default BrandBar;
