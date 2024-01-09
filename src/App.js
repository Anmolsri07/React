import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils"></Navbar>
      {/* <Navbar></Navbar> */}
      <div className="container my-3 ">
        <TextForm heading="Enter the Text to Analyze"></TextForm>
      </div>

      <About></About>
    </>
  );
}

export default App;
