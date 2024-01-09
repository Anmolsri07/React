import React, { useState } from "react";

export default function TextForm(props) {
  const handeUpClick = () => {
    console.log("upper case clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handeLowClick = () => {
    console.log("upper case clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
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
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            class="form-control"
            id="box"
            rows="8"
            value={text}
            onChange={handleOnChange}
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

      <div className="container my-3">
        <h2>Enter yourText Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
