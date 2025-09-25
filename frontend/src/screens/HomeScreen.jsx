import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate ,useParams} from "react-router-dom";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetProductsQuery } from "../slices/productApiSlice";
import { Col, Row } from "react-bootstrap";
import Paginate from "../components/Paginate";

function HomeScreen() {
  const { userInfo } = useSelector((state) => state.auth);

  const { pageNumber, keyword } = useParams();

  let {
    data: products,
    isLoading,
    error,
  } = useGetProductsQuery({ pageNumber, keyword });

  const navigate = useNavigate();

  return (
    <>
      <h1>Latest Products</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data?.message}</Message>
      ) : (
        <>
          <Row>
            {products?.products?.map((product, index) => (
              <Col sm={12} md={6} lg={4} xl={3} key={index}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
           <Paginate pages={products?.pages} page={products?.page} />
        </>
      )}
    </>
  );
}

export default HomeScreen;
