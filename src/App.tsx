import { ToastContainer } from "react-toastify";
import RouterMain from "./routes";
import GlobalStyle from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer theme="colored" autoClose={2000} />
      <RouterMain />
    </>
  );
}

export default App;
