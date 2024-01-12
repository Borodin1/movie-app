import {render} from "react-dom";
import "./index.css";
import App from "./App";

//react-query
import { QueryClientProvider } from "react-query";
import { queryClient } from "./lib/queryClient";
import { BrowserRouter } from 'react-router-dom';


render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById("root")
);
