import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null); //whether dark mode is enable or not

  const showAlert = (message, Type) => {
    setAlert({ msg: message, Type: Type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been Enabled ", "success");
      // document.title = "TextUtils-dark mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light Mode has been Enabled ", "success");
      // document.title = "TextUtils-light mode";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
      {/* <Navbar></Navbar> */}
      <Alert alert={alert}></Alert>
      <div className="container my-3 ">
        <Routes>
          <Route
            path=""
            element={
              <TextForm
                heading="Try TextUtils-Word counter,Character Counter,Remove extra spaces"
                mode={mode}
                showAlert={showAlert}
              ></TextForm>
            }
          />

          <Route path="about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
