import React, { useState } from "react";

export default function TextForm(props) {
  const handeUpClick = () => {
    console.log("upper case clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case", "success");
  };
  const handeLowClick = () => {
    console.log("upper case clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case", "success");
  };
  const clearClick = () => {
    // console.log("upper case clicked" + text);
    // let newText = text.toLowerCase();
    setText(" ");
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text="new text" //wrong way to change state
  // setText("new text"); //correct wayto change state
  console.log(props);
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="box"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        {/* <p>you have clicked {count} times</p> */}

        <button className="btn btn-primary mx-2" onClick={handeUpClick}>
          Convert to upper case
        </button>

        <button className="btn btn-primary mx-2" onClick={handeLowClick}>
          Convert to Lower case
        </button>
        <button className="btn btn-primary mx-2" onClick={clearClick}>
          Clear
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Enter yourText Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the Textbox above to Preview it here"}
        </p>
      </div>
    </>
  );
}
