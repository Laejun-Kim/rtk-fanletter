import Router from "router/Router";
import GlobalStyle from "GlobalStyle";
import { useSelector } from "react-redux";

function App() {
  const allstates = useSelector((state) => state);
  console.log(allstates);
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
