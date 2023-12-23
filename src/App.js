import { ConfigProvider } from "antd";
import "./App.css";
import ReduxProvider from "./redux/provider";
import MainRouter from "./routes/MainRouter";

function App() {
  return (
    <ConfigProvider>
      <ReduxProvider>
        <MainRouter />
      </ReduxProvider>
    </ConfigProvider>
  );
}

export default App;
