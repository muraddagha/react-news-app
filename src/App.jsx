import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import FilterContextProvider from "./store/filter-context";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <FilterContextProvider>
            <RouterProvider router={Router} />
          </FilterContextProvider>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
