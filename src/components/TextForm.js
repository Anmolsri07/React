import React, { useState } from "react";

export default function TextForm(props) {
  const handeUpClick = () => {
    console.log("upper case clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("enter text here");
  // text="new text" //wrong way to change state
  // setText("new text"); //correct wayto change state
  return (
    <div>
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
      <button className="btn btn-primary" onClick={handeUpClick}>
        Convert to upper case
      </button>
    </div>
  );
}
