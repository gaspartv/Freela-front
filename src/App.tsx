import { ToastContainer } from "react-toastify";
import RouterMain from "./routes";
import GlobalStyle from "./styles/Global";
import "react-toastify/dist/ReactToastify.css";
<<<<<<< HEAD
import { SpanTop } from "./components/SpanTop/style";
=======
import { ChakraProvider } from "@chakra-ui/react";
>>>>>>> feat/home

function App() {
  return (
    <>
<<<<<<< HEAD
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        theme="colored"
        pauseOnHover={true}
      />
      <SpanTop />
      <RouterMain />
=======
      <ChakraProvider>
        <GlobalStyle />
        <ToastContainer
          position="top-right"
          autoClose={1500}
          theme="colored"
          pauseOnHover={true}
        />
        <RouterMain />
      </ChakraProvider>
>>>>>>> feat/home
    </>
  );
}

export default App;
