import React from "react";
import '../Process/Progress.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

export default function Process() {
  return (
    <div className="WrapperProgress">
      <FontAwesomeIcon className="iconCancel" icon={faXmark} style={{color: "#b5b5b5",}} />
      <div class="progress-loader">
        <div class="progress"></div>
      </div>
    </div>
  );
}
