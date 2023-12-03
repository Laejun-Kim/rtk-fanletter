import Router from "router/Router";
import GlobalStyle from "GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
