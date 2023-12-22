import "./App.css";


import logo from "./assets/react.svg";

function App() {
  return (
    <div
      style={{
        marginTop: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ marginTop: "auto" }}>Let's Start !</h1>
      <img src={logo} alt="react_logo" style={{ marginBottom: "auto" }} />
    </div>
  );
}

export default App;
