import { ToastContainer } from "react-toastify";
import { SpanTop } from "./components/SpanTop/style";
import RouterMain from "./routes";
import GlobalStyle from "./styles/Global";
import 'react-toastify/dist/ReactToastify.css';

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
