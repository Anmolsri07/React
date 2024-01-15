import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null); //whether dark mode is enable or not

  const showAlert = (message, Type) => {
    setAlert({ msg: message, Type: Type });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been Enabled ", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light Mode has been Enabled ", "Success");
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
      {/* <Navbar></Navbar> */}
      <Alert alert={alert}></Alert>
      <div className="container my-3 ">
        <TextForm heading="Enter the Text to Analyze" mode={mode}></TextForm>
      </div>

      <About></About>
    </>
  );
}

export default App;
