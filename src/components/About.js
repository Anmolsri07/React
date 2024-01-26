import React from "react";

export default function About(props) {
  // let mystyle = {
  //   color: "white",
  //   backgroundColor: "black",
  // };

  //using use state
  // const [mystyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [btnText, setBtnText] = useState("Enable dark mode");

  // const ToggleStyle = () => {
  //   if (mystyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //     setBtnText("Enable light mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark mode");
  //   }
  // };
  let mystyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
    // border: "2px solid",
    // borderColor: props.mode === "dark" ? "white" : "black",
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
              <strong>Analyze your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              TextUtils give you a way to analyze your Text quickly and
              Efficiently.be it Word count,character count
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.Textutils
              reports the number of words and character.thus it is suitable for
              writing Text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              This word counter software works in any browser such as
              chrome,firefox,Internet Explorer,safari,opera.it suits to count
              character in facebook,blog,books,excel document,pdf document,essay
              etc
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button type="button" className="btn btn-primary" onClick={ToggleStyle}>
          {btnText}
        </button>
      </div> */}
    </div>
  );
}
