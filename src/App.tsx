import { ToastContainer } from "react-toastify";
import RouterMain from "./routes";
import GlobalStyle from "./styles/Global";
import "react-toastify/dist/ReactToastify.css";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
