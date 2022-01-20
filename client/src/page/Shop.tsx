import React, { useEffect } from "react";
import {
  Card,
  Button,
  Container,
  Form,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviseList";
import TypeBar from "../components/TypeBar";
import Pages from "../components/Pages";
import { fetchDeviceRequest } from "../store/action-creators/device";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { fetchTypesRequest } from "../store/action-creators/type";
import { fetchBrandsRequest } from "../store/action-creators/brand";
const Shop: React.FC = () => {
  const dispatch = useDispatch();
  const { device, loading, count, page } = useTypeSelector(
    (state) => state.device
  );
  const { type } = useTypeSelector((state) => state.type);
  const { brand } = useTypeSelector((state) => state.brand);
  const { selectedBrand } = useTypeSelector((state) => state.brandId);
  const { selectedType } = useTypeSelector((state) => state.typeId);
  const { user } = useTypeSelector((state) => state.user);

  useEffect(() => {
    dispatch(
      fetchDeviceRequest({ typeId: null, brandId: null, page: null, limit: 4 })
    );
    dispatch(fetchBrandsRequest());
    dispatch(fetchTypesRequest());
    console.log(brand);
  }, []);
  useEffect(() => {
    dispatch(
      fetchDeviceRequest({
        typeId: selectedType.id,
        brandId: selectedBrand.id,
        page: page,
        limit: 4,
      })
    );
  }, [selectedBrand, selectedType, page]);
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar types={type} selectedTypeId={selectedType} />
        </Col>
        <Col md={9}>
          <BrandBar brands={brand} selectedBrandId={selectedBrand} />
          {loading ? (
            <Spinner animation={"grow"} />
          ) : (
            <DeviceList device={device} />
          )}

          <Pages count={count} pags={page} />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
