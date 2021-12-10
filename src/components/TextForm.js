import React, { useState } from "react";

export default function TextForm(props) {
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert(" The Text Has Been Cleared!", "success");
  };
  const handleSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces  Has Been Removed!", "success");
  };
  const handleCopyClick = () => {
    let copyText = document.getElementById("myBox");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("The Text Has Been Copied!", "success");
  };
  const handleUpperClick = () => {
    console.log("Text Was Changed in to Upper Case" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Has Been Converted in to Upper Case!", "success");
  };
  const handleLowClick = () => {
    console.log("Text Was Changed in to Upper Case" + text);
    let newText = text.toLowerCase();
    setText(newText);

    props.showAlert("Text Has Been Converted in to Lower Case!", "success");
  };
  const handleOnChange = (event) => {
    console.log("handle is Changed");
    let selectText = document.getElementById("myBox");

    selectText.select();

    setText(event.target.value);
  };

  const [text, setText] = useState(" ");
  // text="Enter New Text"--thats wrong way to change state
  // setText("New Text");// --thats correct way to change state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="9"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSpacesClick}>
          Remove Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleUpperClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert To Lowercase
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2> Text Summary</h2>
        <p>
          {text.split(" ").length} words and{" "}
          {text.length === " " ? text.length[0] : text.length} charactors
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>

        <h3> Preview </h3>
        <p>
          {text.length > 0
            ? text
            : "Enter Something  in The Textbox Above To Preview it Here"}
        </p>
      </div>
    </>
  );
}
