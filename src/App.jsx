import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes";
import './i18n/i18n';

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;