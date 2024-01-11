import {render} from "react-dom";
import "./index.css";
import App from "./App";

//react-query
import { QueryClientProvider } from "react-query";
import { queryClient } from "./lib/queryClient";


render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById("root")
);
