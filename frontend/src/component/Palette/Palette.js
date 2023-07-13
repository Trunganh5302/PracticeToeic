import React from "react";
import '../Palette/Palette.css'

export default function Palette() {
  return (
    <aside className="WrapperPalette">
      <h3 className="titlePalette">Question palette</h3>
      <div className="itemQuestion">
        <ul>
          <button className="btnNumQues">1</button>
          <button className="btnNumQues">2</button>
          <button className="btnNumQues">3</button>
          <button className="btnNumQues">4</button>
          <button className="btnNumQues">5</button>
          <button className="btnNumQues">6</button>
          <button className="btnNumQues">7</button>
          <button className="btnNumQues">8</button>
          <button className="btnNumQues">9</button>
          <button className="btnNumQues">10</button>
        </ul>
      </div>
      <div className="checkAns">
        <div className="rightAns"><span>0</span>/<span>10</span><span>Correct</span></div>
        <div className="WrongAns"><span>0</span>/<span>10</span><span>Incorrect</span></div>
      </div>
    </aside>
  );
}
