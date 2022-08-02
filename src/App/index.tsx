import Providers from "../Providers";
import Router from "../Router";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <Providers>
      <Router />
      <CssBaseline />
    </Providers>
  );
};

export default App;
