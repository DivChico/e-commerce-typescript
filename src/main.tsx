import ReactDOM from "react-dom/client";
import "./main.css";
import AppRouter from "./routes/AppRouter";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
