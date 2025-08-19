import { Row, Col, Button, Table } from "react-bootstrap";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useNavigate } from "react-router-dom";
import {
  useGetAllProductsQuery,
  useDeleteProductMutation,
} from "../../slices/productApiSlice";
import { toast } from "react-toastify";

const ProductListScreen = () => {
  const {
    data: products,
    isLoading,
    error,
    refetch,
  } = useGetAllProductsQuery();

  const [deleteProduct] = useDeleteProductMutation();

  const navigate = useNavigate();

  const deleteHandler = async (productId) => {
    try {
      await deleteProduct(productId).unwrap();
      toast.success("Product Deleted");
      refetch();
    } catch (error) {
      toast.error(error?.data?.message || error?.message);
    }
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-end">
          <Button
            className="btn-sm m-3"
            onClick={() => navigate("/admin/addProduct")}
          >
            <FaPlus /> Create Product
          </Button>
        </Col>
      </Row>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <Button variant="light" className="btn-sm mx-2" onClick={()=>navigate(`/admin/edit/${product._id}`)}>
                      <FaEdit />
                    </Button>

                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(product._id)}
                    >
                      <FaTrash style={{ color: "white" }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* PAGINATE PLACEHOLDER */}
        </>
      )}
    </>
  );
};

export default ProductListScreen;
