import { ToastContainer } from "react-toastify";
import { SpanTop } from "./components/SpanTop/style";
import RouterMain from "./routes";
import GlobalStyle from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <SpanTop />
      <RouterMain />
    </>
  );
}

export default App;
