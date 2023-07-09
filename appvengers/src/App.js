import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import { useSelector, useDispatch, Provider } from "react-redux";
import Home from "./components/Home";
function App() {
  const content = useSelector((state) => state.editor.content);
  const dispatch = useDispatch();
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "black",
        height: "100vh",
        width: "100%",
      }}
    >
      <h1 style={{ color: "white" }}>🖊DOCS🖊</h1>
      <div
        style={{
          display: "flex",
          flex: "2",
          justifyContent: "center",
          alignItems: "center",
          padding: "10%",
          width: "80%",
        }}
      >
        <Home />
      </div>
    </div>
  );
}

export default App;
