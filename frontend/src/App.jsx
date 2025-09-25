import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import ProductListScreen from "./screens/Admin/ProductListScreen";
import ProductAddScreen from "./screens/Admin/ProductAddScreen";
import ProductEditScreen from "./screens/Admin/ProductEditScreen";
import ProductScreen from "./screens/ProductScreen";
import UserListScreen from "./screens/Admin/UserListScreen";
import UserEditScreen from "./screens/Admin/UserEditScreen";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import PaymentScreen from "./screens/PaymentScreen";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrderListScreen from "./screens/Admin/OrderListScreen";
import PrivateRoutes from "./components/PrivateRoutes";
import AdminRoutes from "./components/AdminRoutes";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />

            <Route path="/" element={<HomeScreen />} />
            <Route path="/page/:pageNumber" element={<HomeScreen />} />
            <Route
              path="/search/:keyword/page/:pageNumber"
              element={<HomeScreen />}
            />


            <Route path="/product/:id" element={<ProductScreen />} />
            

            <Route path="" element={<PrivateRoutes />}>
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/shipping" element={<ShippingScreen />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/order/:id" element={<OrderScreen />} />
            </Route>

            <Route path="/profile" element={<ProfileScreen />} />

            <Route path="" element={<AdminRoutes />}>
              <Route
                path="/admin/productlist"
                element={<ProductListScreen />}
              />
              <Route path="/admin/addProduct" element={<ProductAddScreen />} />
              <Route path="/admin/edit/:id" element={<ProductEditScreen />} />

              <Route path="/admin/userlist" element={<UserListScreen />} />
              <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
              <Route path="/admin/orderlist" element={<OrderListScreen />} />
            </Route>
          </Routes>
        </Container>
      </main>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
