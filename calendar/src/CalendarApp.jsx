import { Provider } from "react-redux";
import { store } from "./store";
import { AppRouter } from "./router";
import { BrowserRouter } from "react-router-dom";

export const CalendarApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};
