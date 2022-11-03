import { ToastContainer } from "react-toastify";
import RouterMain from "./routes";
import GlobalStyle from "./styles/Global";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer position="top-right" autoClose={1500} theme="colored" pauseOnHover={true}/>
      <RouterMain />
    </>
  );
}

export default App; 
