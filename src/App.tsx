import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { GlobalProvider } from "./contexts";
import { Navigation } from "./routes";

export const App = () => {
  return (
    <>
      <ToastContainer />

      <GlobalProvider>
        <Navigation />
      </GlobalProvider>
    </>
  );
};
