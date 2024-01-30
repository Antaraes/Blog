import { ConfigProvider } from "antd";
import "./App.css";
import ReduxProvider from "./redux/provider";
import MainRouter from "./routes/MainRouter";
import { QueryClient, QueryClientProvider } from "react-query";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const client = new QueryClient();
function App() {
  return (
    <ConfigProvider>
      <ReduxProvider>
        <QueryClientProvider client={client}>
          <MainRouter />
          <Toaster />
        </QueryClientProvider>
      </ReduxProvider>
    </ConfigProvider>
  );
}

export default App;
