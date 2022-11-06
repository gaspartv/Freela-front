import { ToastContainer } from "react-toastify";
import RouterMain from "./routes";
import GlobalStyle from "./styles/Global";
import "react-toastify/dist/ReactToastify.css";
// import { ChakraProvider } from "@chakra-ui/react";
// import { SpanTop } from "./components/SpanTop/style";

function App() {
  return (
    <>
      {/* <ChakraProvider> */}
        <GlobalStyle />
        <ToastContainer
          position="top-right"
          autoClose={1500}
          theme="colored"
          pauseOnHover={true}
        />
        {/* <SpanTop /> */}
        <RouterMain />
      {/* </ChakraProvider> */}
    </>
  );
}

export default App;
