import { GlobalProvider } from "./contexts";
import { Navigation } from "./routes";

export const App = () => {
  return (
    <GlobalProvider>
      <Navigation />
    </GlobalProvider>
  );
};
