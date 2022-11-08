import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RouterMain from "./routes";
import GlobalStyle from "./styles/Global";
import { SpanTop } from "./components/SpanTop/style";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        theme="colored"
        pauseOnHover={true}
      />
      <SpanTop />
      <RouterMain />
    </>
  );
}

export default App;
