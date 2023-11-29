import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "components/Layout";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Login from "pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
