import "./App.css";
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
    </>
  );
}

export default App;
