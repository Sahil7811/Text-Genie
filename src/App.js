import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import React, { useState } from "react"; //imprc

function App() {
  const [mode, setMode] = useState("light"); //light mode default
  const [alert, setAlert] = useState(null); //state for alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  //function for theme change
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#405D72";
      showAlert("Dark Mode is Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextGenie"
        AboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter The Text To Analyze..."
          mode={mode}
        />
      </div>
    </>
  );
}
export default App;
